// LUCA — 5th Grade Review (Days 1-24) + 6th Grade Prep (Days 25-34)
// Rotation: Math -> ELA -> Science, repeating. Standards = CA Common Core (Math/ELA) + CA NGSS (Science).
// Personalized with Luca's friends (Axel, Cooper, Brandon, Carlo, Shane, Sid, Arian, Cyrus), his karate journey,
// his love of anime/pirate-adventure stories, and his Japanese language learning.

window.LUCA_LESSONS = [
  {
    day: 1, date: "2026-07-16", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.NBT.A.1", standardLabel: "Place Value Patterns",
    title: "Powers of Place Value",
    hook: "Every time you shift a digit one spot to the left, its value multiplies by 10 — math's cheapest magic trick!",
    teach: [
      "In our base-ten system, each place value is 10 times the value of the place to its right.",
      "Moving a digit one place to the LEFT multiplies its value by 10; moving it one place to the RIGHT divides its value by 10.",
      "Multiplying by 10, 100, or 1,000 shifts the decimal point right that many places. Dividing shifts it left.",
      "This pattern works the same way with decimals: 0.5 × 10 = 5, and 5 ÷ 10 = 0.5.",
      "😂 Fun fact: the decimal point is secretly the laziest character in math — it never actually moves, we just pretend it does."
    ],
    example: { problem: "Luca's dojo is raising money for new belts. If they raise 4.7 hundred dollars (4.7 × 100), how much is that?", solution: "Multiplying by 100 shifts the decimal 2 places right: 4.7 × 100 = 470, so $470." },
    quiz: [
      { q: "What is 3.2 × 1,000?", choices: ["3,200", "320", "32", "3.2"], answer: 0, explain: "Multiplying by 1,000 shifts the decimal 3 places right." },
      { q: "What is 650 ÷ 100?", choices: ["6.5", "65", "0.65", "6,500"], answer: 0, explain: "Dividing by 100 shifts the decimal 2 places left." },
      { q: "In the number 5,500, how does the value of the first 5 compare to the second 5?", choices: ["It is 10 times greater", "It is equal", "It is 10 times smaller", "It is 100 times smaller"], answer: 0, explain: "The first 5 is in the thousands place; the second is in the hundreds place — a 10x difference." },
      { q: "What is 0.08 × 10?", choices: ["0.8", "0.008", "8", "80"], answer: 0, explain: "Multiplying by 10 shifts the decimal 1 place right." },
      { q: "Cooper's karate tournament awards a score that multiplies by 100 after a bonus round. If his score was 6.4, what is it now?", choices: ["640", "64", "6,400", "0.64"], answer: 0, explain: "6.4 × 100 = 640 (shift decimal 2 places right)." },
      { q: "What is 92 ÷ 1,000?", choices: ["0.092", "0.92", "9.2", "92,000"], answer: 0, explain: "Dividing by 1,000 shifts the decimal 3 places left." },
      { q: "In the number 4,400, the first 4 is how many times greater than the second 4?", choices: ["10 times greater", "100 times greater", "Equal", "1,000 times greater"], answer: 0, explain: "Thousands place is 10x the hundreds place." },
      { q: "What is 0.6 × 100?", choices: ["60", "6", "0.06", "600"], answer: 0, explain: "Multiplying by 100 shifts the decimal 2 places right: 0.6 → 60." }
    ]
  },
  {
    day: 2, date: "2026-07-17", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "RL.5.1", standardLabel: "Quoting Text to Support Inference",
    title: "Prove It With the Text",
    hook: "An inference is an educated guess — but a great reader backs it up with hard evidence, like a detective solving a case!",
    teach: [
      "An inference is a conclusion you draw by combining what the text says with what you already know.",
      "Quoting accurately means using the author's exact words, in quotation marks, as evidence.",
      "A strong inference answer has two parts: your idea, AND the exact quote that supports it.",
      "Avoid inferences that aren't backed by the text — if you can't point to evidence, it's just a guess.",
      "😂 Fun fact: 'I have a feeling' is not text evidence, no matter how confident you sound saying it."
    ],
    example: { problem: "Text: 'Axel's hands trembled as he tightened his belt for the third time, staring at the target board.' What can you infer, and what's your evidence?", solution: "I infer Axel is nervous before his karate test. Evidence: 'his hands trembled...as he tightened his belt...for the third time.'" },
    quiz: [
      { q: "An inference is:", choices: ["A conclusion drawn from text clues plus your own knowledge", "A fact directly stated in the text", "A random guess with no evidence", "The title of the book"], answer: 0, explain: "Inferences combine text evidence with background knowledge." },
      { q: "Quoting accurately means:", choices: ["Using the author's exact words in quotation marks", "Rewriting the sentence in your own words", "Skipping the text entirely", "Only using page numbers"], answer: 0, explain: "Accurate quoting preserves the author's exact wording." },
      { q: "Text: 'He slammed the door and didn't come down for dinner.' What can you infer?", choices: ["He is upset about something", "He is very hungry", "He loves dinner", "He is asleep"], answer: 0, explain: "Slamming the door and avoiding dinner suggests he's upset." },
      { q: "Why must an inference be supported by text evidence?", choices: ["So the conclusion is grounded in the text, not just a guess", "Because it's required to add page numbers", "Because inferences are always false otherwise", "It isn't necessary at all"], answer: 0, explain: "Evidence keeps inferences reasonable and text-based." },
      { q: "Text: 'The young pirate captain's sword hand shook as the storm clouds rolled over the horizon.' What can you infer about the captain?", choices: ["The captain is afraid", "The captain is bored", "The captain is asleep", "The captain is celebrating"], answer: 0, explain: "A shaking hand facing a storm suggests fear." },
      { q: "Which is the STRONGEST way to support an inference in an essay?", choices: ["A direct quote from the text in quotation marks", "A vague feeling with no quote", "Your favorite color", "A guess about the author's life"], answer: 0, explain: "Direct quotes are the strongest, most specific evidence." },
      { q: "Text: 'Brandon bowed to his sensei, then let out a long breath he didn't know he'd been holding.' What can you infer?", choices: ["Brandon was nervous but relieved it was over", "Brandon didn't care about the test", "Brandon was falling asleep", "Brandon was angry at his sensei"], answer: 0, explain: "Bowing and releasing held breath suggests nervous relief after a test." },
      { q: "An inference that ignores the text completely and relies only on personal opinion is:", choices: ["A weak, unsupported guess", "The strongest kind of inference", "Always 100% correct", "The same as a direct quote"], answer: 0, explain: "Inferences must be grounded in the text to be valid, not just opinion." }
    ]
  },
  {
    day: 3, date: "2026-07-18", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-PS1-1 / 5-PS1-2", standardLabel: "Matter & Conservation of Mass",
    title: "Tiny Particles, Big Ideas",
    hook: "Everything around you — even air, even your karate gi, even you — is made of particles too small to see!",
    teach: [
      "All matter is made up of tiny particles too small to see with the naked eye, even in things that look solid or empty (like air).",
      "Matter can exist as a solid, liquid, or gas, and particles are arranged differently in each state.",
      "The law of conservation of matter states that matter is not created or destroyed — it just changes form.",
      "When you measure the total weight of substances before and after mixing or a reaction, the total mass stays the same (assuming nothing escapes as a gas unaccounted for).",
      "😂 Fun fact: technically you are mostly empty space held together by tiny particles — so next time your sensei says 'focus your energy,' you can point out there's barely any solid you to focus in the first place."
    ],
    example: { problem: "If you dissolve 10 grams of sugar into 100 grams of water, what is the total mass of the sugar water?", solution: "110 grams — the mass of the sugar and water are conserved (combined), even though the sugar seems to 'disappear.'" },
    quiz: [
      { q: "What is all matter made of?", choices: ["Tiny particles too small to see", "Only solids", "Empty space with nothing inside", "Light only"], answer: 0, explain: "All matter is composed of extremely small particles." },
      { q: "The law of conservation of matter states that matter:", choices: ["Is not created or destroyed, only changes form", "Disappears when mixed with other things", "Can be created from nothing", "Only applies to liquids"], answer: 0, explain: "Total matter/mass stays constant through physical or chemical changes." },
      { q: "If 5g of salt is dissolved into 95g of water, what is the total mass?", choices: ["100g", "95g", "5g", "0g"], answer: 0, explain: "Mass is conserved: 5g + 95g = 100g total." },
      { q: "Which of these is true about air?", choices: ["It is made of matter/particles, even though we can't see it", "It has no particles at all", "It is not matter", "It weighs nothing anywhere"], answer: 0, explain: "Air is matter composed of gas particles, just invisible to the eye." },
      { q: "A 200g ice cube melts completely into water. What is the mass of the water?", choices: ["200g", "0g, it disappears", "100g", "400g"], answer: 0, explain: "Melting is a physical change; mass is conserved, so it stays 200g." },
      { q: "Why can't you see individual particles of matter with just your eyes?", choices: ["They are far too small for the naked eye to detect", "Matter has no particles", "Particles are invisible by choice", "Only liquids have particles"], answer: 0, explain: "Particles like atoms and molecules are far smaller than what the eye can resolve." },
      { q: "You mix 50g of flour and 50g of water into dough. What is the dough's mass?", choices: ["100g", "50g", "0g", "150g"], answer: 0, explain: "Combining substances conserves total mass: 50+50=100g." },
      { q: "Which state of matter typically has particles that are the most spread out?", choices: ["Gas", "Solid", "Liquid", "None — all states are identical"], answer: 0, explain: "Gas particles are spread far apart compared to liquids and solids." }
    ]
  },
  {
    day: 4, date: "2026-07-19", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.NBT.B.5", standardLabel: "Multi-Digit Multiplication",
    title: "Multiplication Mastery",
    hook: "Bigger numbers, same strategies — let's multiply multi-digit numbers with total boss-level confidence!",
    teach: [
      "Break larger numbers apart by place value (like the standard algorithm or the area/box method) to make multiplication manageable.",
      "In the standard algorithm, multiply the top number by each digit of the bottom number, starting with ones, then tens (remembering to shift left and add a placeholder zero).",
      "The box (area) method splits both factors by place value, multiplies each part, then adds all the partial products together.",
      "Estimating first (rounding factors) helps you check whether your final answer is reasonable.",
      "😂 Fun fact: the placeholder zero in multi-digit multiplication has one job and absolutely nails it every single time, kind of like a reliable training partner."
    ],
    example: { problem: "Solve 47 × 26 using partial products.", solution: "47 × 20 = 940, and 47 × 6 = 282. Adding: 940 + 282 = 1,222." },
    quiz: [
      { q: "What is 34 × 12?", choices: ["408", "402", "388", "418"], answer: 0, explain: "34 × 10 = 340, 34 × 2 = 68, 340 + 68 = 408." },
      { q: "What is 56 × 23?", choices: ["1,288", "1,268", "1,308", "1,178"], answer: 0, explain: "56 × 20 = 1,120, 56 × 3 = 168, 1,120 + 168 = 1,288." },
      { q: "Estimating 68 × 31 by rounding gives approximately:", choices: ["2,100 (70 × 30)", "1,000", "3,000", "700"], answer: 0, explain: "Rounding 68→70 and 31→30 gives 70 × 30 = 2,100." },
      { q: "What is 123 × 4?", choices: ["492", "482", "512", "446"], answer: 0, explain: "100×4=400, 20×4=80, 3×4=12; 400+80+12=492." },
      { q: "Shane's favorite anime app grants 45 XP per episode watched. How much XP after 16 episodes?", choices: ["720", "620", "740", "700"], answer: 0, explain: "45 × 16 = 45×10 + 45×6 = 450+270 = 720." },
      { q: "What is 72 × 19?", choices: ["1,368", "1,298", "1,468", "1,318"], answer: 0, explain: "72 × 20 = 1,440, minus 72 = 1,368." },
      { q: "Estimate 89 × 42 by rounding to the nearest ten.", choices: ["Approximately 3,600 (90 × 40)", "Approximately 4,000", "Approximately 800", "Approximately 1,200"], answer: 0, explain: "Rounding 89→90, 42→40: 90 × 40 = 3,600." },
      { q: "Luca's dojo has 205 students, and each pays $6 for a tournament patch. How much money is collected?", choices: ["$1,230", "$1,130", "$1,250", "$1,200"], answer: 0, explain: "200×6=1,200, 5×6=30, 1,200+30=1,230." }
    ]
  },
  {
    day: 5, date: "2026-07-20", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "RL.5.2", standardLabel: "Determining Theme",
    title: "Uncovering the Theme",
    hook: "A theme is bigger than the plot — it's the deep message the whole story teaches, kind of like the moral behind a great anime training arc!",
    teach: [
      "Theme is the underlying message or lesson about life that a story communicates, shown through characters, events, and their consequences.",
      "Unlike a topic (like 'friendship'), a theme is a full statement (like 'true friendship means being there for someone even when it's hard').",
      "Look at how the main character changes from the beginning to the end of the story — that change often reveals the theme.",
      "A story can have more than one theme, and different readers might state it slightly differently while still being correct.",
      "😂 Fun fact: nearly every training-arc story ever written — including the pirate anime you love — has the same secret theme: 'hard work eventually pays off.' Writers really love that one."
    ],
    example: { problem: "In a story, a young pirate crew member is laughed at for being weak, but after months of relentless training with his crew, he becomes strong enough to protect his friends. What's a possible theme?", solution: "Possible theme: Persistence and support from friends can turn weakness into real strength." },
    quiz: [
      { q: "Theme is best described as:", choices: ["The underlying message or lesson about life in a story", "The setting of the story", "A one-word topic like 'love'", "The name of the main character"], answer: 0, explain: "Theme is a full idea/message, not just a topic word." },
      { q: "Which is an example of a theme statement (not just a topic)?", choices: ["Courage means acting even when you're afraid", "Courage", "The forest", "Chapter 3"], answer: 0, explain: "A theme is a complete statement about life, not a single word." },
      { q: "How can a character's change help reveal the theme?", choices: ["Their growth often shows the lesson the story is teaching", "It never relates to theme", "Characters never change in stories", "It only affects the setting"], answer: 0, explain: "Character transformation is a common way authors reveal themes." },
      { q: "Can a story have more than one valid theme?", choices: ["Yes, different readers can find multiple valid themes", "No, there is only ever one correct theme", "Themes don't exist in stories", "Only nonfiction has themes"], answer: 0, explain: "Stories often support multiple reasonable theme interpretations." },
      { q: "A weak young hero trains relentlessly and eventually defeats a powerful rival. What's a likely theme?", choices: ["Hard work and dedication lead to growth", "Rivals should never be respected", "Training is a waste of time", "Only natural talent matters"], answer: 0, explain: "The character's growth through effort points to this theme." },
      { q: "Which is a TOPIC, not a theme?", choices: ["Friendship", "Friendship can give you the courage to face impossible odds", "Loyalty is often tested by hardship", "True strength comes from vulnerability"], answer: 0, explain: "'Friendship' is just a single-word topic, not a full theme statement." },
      { q: "A ship's crew member who learns to forgive a former rival after understanding his struggles reveals a theme about:", choices: ["Empathy and forgiveness", "Revenge is always right", "Rivals should never change", "Struggles don't matter"], answer: 0, explain: "The character's forgiveness after understanding suggests this theme." },
      { q: "Why might two readers state the theme of the same book slightly differently?", choices: ["Themes can have multiple valid interpretations", "One of them is definitely wrong", "Books only have exactly one theme, always", "Themes are randomly assigned"], answer: 0, explain: "Reasonable theme interpretations can vary between readers." }
    ]
  },
  {
    day: 6, date: "2026-07-21", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-PS1-3 / 5-PS1-4", standardLabel: "Mixtures & Chemical Reactions",
    title: "Mix It or Change It?",
    hook: "Stirring sugar into water is very different from baking soda fizzing with vinegar — let's find out why one's chill and one's chaotic!",
    teach: [
      "A mixture combines two or more substances that keep their own properties and can usually be separated again (like sand and water).",
      "A solution is a special type of mixture where one substance dissolves evenly into another (like salt in water).",
      "A chemical reaction occurs when substances combine to form a brand-new substance with different properties — this change usually cannot be reversed.",
      "Signs of a chemical reaction include bubbling/fizzing, color change, temperature change, or a new smell.",
      "😂 Fun fact: a baking soda and vinegar volcano is basically a chemical reaction cosplaying as a science fair project."
    ],
    example: { problem: "Baking soda and vinegar are combined and start fizzing rapidly, producing gas bubbles. Is this a mixture or a chemical reaction?", solution: "A chemical reaction — the fizzing/gas production shows a new substance (carbon dioxide gas) is being formed." },
    quiz: [
      { q: "A solution is:", choices: ["A mixture where one substance dissolves evenly into another", "Always a chemical reaction", "A substance that can never be separated", "Only found in cooking"], answer: 0, explain: "Solutions are a type of mixture with even dissolving, like salt water." },
      { q: "Which is a sign of a chemical reaction?", choices: ["Fizzing and bubbling", "Stirring without any change", "Two colors staying separate", "Nothing happens at all"], answer: 0, explain: "Fizzing often indicates gas production from a new substance forming." },
      { q: "Mixing sand and water and then letting the sand settle to filter it out shows that this mixture:", choices: ["Can be separated back into its original parts", "Created a new chemical substance", "Cannot ever be separated", "Was a chemical reaction"], answer: 0, explain: "Physical mixtures usually can be separated, unlike chemical reactions." },
      { q: "Which is true about chemical reactions?", choices: ["They usually cannot be reversed", "They are always reversible", "They never change properties", "They only happen in labs"], answer: 0, explain: "Chemical reactions form new substances, usually not easily undone." },
      { q: "Carlo mixes oil and water for a cooking project, and they stay separated in layers. This is an example of:", choices: ["A mixture (not a solution)", "A solution", "A chemical reaction", "A new element"], answer: 0, explain: "Oil and water don't dissolve evenly, so it's a mixture, not a true solution." },
      { q: "Which of these is the BEST evidence that a chemical reaction happened?", choices: ["A new substance forms with different properties, like gas or heat", "The mixture looks exactly the same as before", "You stirred it with a spoon", "It weighs the same as before mixing"], answer: 0, explain: "New substances with new properties are the key evidence of a chemical reaction." },
      { q: "Rusting of iron (turning to reddish-brown rust over time) is an example of:", choices: ["A chemical reaction", "A simple mixture", "A solution", "A reversible physical change"], answer: 0, explain: "Rust is a new substance formed by a slow chemical reaction with oxygen." },
      { q: "Which pair BOTH describe solutions (not just mixtures)?", choices: ["Salt water and sugar water", "Sand and water, oil and water", "Trail mix and a salad", "Rocks and sand"], answer: 0, explain: "Salt and sugar dissolve evenly into water, forming true solutions." }
    ]
  },
  {
    day: 7, date: "2026-07-22", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.NBT.B.6", standardLabel: "Whole Number Division",
    title: "Division Deep Dive",
    hook: "Dividing big numbers by two-digit numbers is a superpower once you know the steps — time to level up your division game!",
    teach: [
      "Long division follows the pattern: Divide, Multiply, Subtract, Bring down, Repeat.",
      "Estimate first: think about how many times the divisor fits into the first part of the dividend.",
      "When dividing by a 2-digit number, round the divisor to help estimate each step's quotient digit.",
      "Check your work by multiplying the quotient by the divisor (and adding any remainder) — it should equal the original dividend.",
      "😂 Fun fact: 'Divide, Multiply, Subtract, Bring down' is basically the four-step boss battle you have to win before you can move to the next number."
    ],
    example: { problem: "Solve 936 ÷ 12.", solution: "12 goes into 93 about 7 times (7×12=84, remainder 9); bring down the 6 to get 96; 12 goes into 96 exactly 8 times. Answer: 78." },
    quiz: [
      { q: "What is 144 ÷ 12?", choices: ["12", "14", "10", "16"], answer: 0, explain: "12 × 12 = 144, so the answer is 12." },
      { q: "What is 528 ÷ 24?", choices: ["22", "24", "20", "26"], answer: 0, explain: "24 × 22 = 528." },
      { q: "In long division, what is the correct order of steps?", choices: ["Divide, Multiply, Subtract, Bring down", "Multiply, Divide, Bring down, Subtract", "Subtract, Divide, Multiply, Bring down", "Bring down, Subtract, Divide, Multiply"], answer: 0, explain: "The standard long division sequence is Divide-Multiply-Subtract-Bring down, repeated." },
      { q: "What is 875 ÷ 25?", choices: ["35", "30", "40", "25"], answer: 0, explain: "25 × 35 = 875." },
      { q: "A pirate crew of 18 needs to split 684 gold coins evenly. How many coins does each crew member get?", choices: ["38", "36", "40", "34"], answer: 0, explain: "18 × 38 = 684." },
      { q: "What is 391 ÷ 17?", choices: ["23", "21", "25", "19"], answer: 0, explain: "17 × 23 = 391." },
      { q: "When you check a division answer by multiplying the quotient by the divisor, what should you get?", choices: ["The original dividend (plus any remainder)", "Always zero", "A completely random number", "The divisor again"], answer: 0, explain: "Multiplying quotient × divisor should recreate the dividend." },
      { q: "Luca's dojo splits 1,050 tournament raffle tickets evenly among 35 students to sell. How many tickets does each student get?", choices: ["30", "25", "35", "40"], answer: 0, explain: "35 × 30 = 1,050." }
    ]
  },
  {
    day: 8, date: "2026-07-23", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "RI.5.2", standardLabel: "Main Idea & Supporting Details",
    title: "Main Idea Hunters",
    hook: "Every nonfiction paragraph has one big idea holding up a bunch of smaller supporting facts — like a boss holding up its minions!",
    teach: [
      "The main idea is the most important point the author wants you to understand about the whole text or a section.",
      "Supporting details are specific facts, examples, or explanations that back up and explain the main idea.",
      "The main idea is sometimes stated directly (often in the first or last sentence), but sometimes it's implied and you must infer it from the details.",
      "A helpful test: if you removed a sentence and the paragraph's point still stands, it was probably a supporting detail, not the main idea.",
      "😂 Fun fact: the main idea is the star of the paragraph, and every supporting detail is basically its hype squad."
    ],
    example: { problem: "Paragraph: 'Karate builds more than physical strength. Students learn discipline through repeated practice. They also build focus by memorizing complex forms called kata.' What is the main idea?", solution: "Main idea: Karate builds more than physical strength. The other sentences are supporting details explaining what else it builds." },
    quiz: [
      { q: "The main idea of a text is:", choices: ["The most important point the author wants you to understand", "A minor supporting fact", "Always the last sentence only", "The title of the book"], answer: 0, explain: "Main idea = the central point of the text or paragraph." },
      { q: "Supporting details:", choices: ["Provide facts or examples that explain the main idea", "Replace the need for a main idea", "Are always found in the glossary", "Have nothing to do with the topic"], answer: 0, explain: "Supporting details reinforce and explain the main idea." },
      { q: "When is the main idea 'implied'?", choices: ["When it's not directly stated and must be inferred from details", "When it's written in bold letters", "When it's always in the title", "It's never implied"], answer: 0, explain: "An implied main idea requires the reader to piece it together from clues." },
      { q: "A good way to test if a sentence is a supporting detail is to ask:", choices: ["Does removing it still leave the main point standing?", "Is it the longest sentence?", "Is it written in a question?", "Does it use exclamation points?"], answer: 0, explain: "If the main point survives without it, it was likely a supporting detail." },
      { q: "Paragraph: 'Learning Japanese has opened up new interests for Luca. He can now recognize basic words in his favorite anime. He also enjoys practicing greetings with his sensei at the dojo.' What is the main idea?", choices: ["Learning Japanese has opened up new interests for Luca", "Anime is only in English", "Luca hates language learning", "Sensei is a difficult word to say"], answer: 0, explain: "The first sentence states the main idea; the rest support it with examples." },
      { q: "Which is a supporting detail, NOT a main idea?", choices: ["He enjoys practicing greetings with his sensei at the dojo", "Learning Japanese has opened up new interests for Luca (as a general claim)", "Language matters (as a broad topic)", "Interests matter (as a broad topic)"], answer: 0, explain: "This is a specific example supporting the broader main idea." },
      { q: "Why is it useful to identify the main idea of a text?", choices: ["It helps you understand and remember the most important point", "It has no real purpose", "It replaces the need to read the rest of the text", "It's only useful for tests"], answer: 0, explain: "Identifying the main idea helps comprehension and retention." },
      { q: "An author writes an entire article about karate belts without ever directly stating 'belt progression shows growth,' but every paragraph supports that idea. This main idea is:", choices: ["Implied, not directly stated", "Directly stated in the title only", "Nonexistent", "Only found in the glossary"], answer: 0, explain: "When the point isn't stated outright but supported by details, it's implied." }
    ]
  },
  {
    day: 9, date: "2026-07-24", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-PS3-1", standardLabel: "Energy from Food",
    title: "Follow the Energy",
    hook: "Where does your energy to spar, train, and power through a karate class really come from? Let's trace it all the way back to the sun!",
    teach: [
      "Nearly all energy on Earth's surface can be traced back to the sun.",
      "Plants capture the sun's energy and use it to make their own food (a process called photosynthesis).",
      "When animals eat plants (or eat other animals that ate plants), they get the stored energy that originally came from the sun.",
      "This flow of energy — sun to plants to animals — is often shown using a food chain or energy pyramid.",
      "😂 Fun fact: technically, the energy fueling your next karate kick started its journey as sunlight — you're basically solar-powered."
    ],
    example: { problem: "A rabbit eats grass, and a fox eats the rabbit. Trace the energy back to its original source.", solution: "The sun's energy → captured by grass through photosynthesis → eaten and used by the rabbit → eaten and used by the fox." },
    quiz: [
      { q: "Where does nearly all energy on Earth's surface originally come from?", choices: ["The sun", "The soil", "Animals", "Water"], answer: 0, explain: "The sun is the primary energy source for life on Earth." },
      { q: "How do plants get energy from the sun?", choices: ["Through photosynthesis, making their own food", "By eating animals", "By absorbing energy from rocks", "Plants don't need energy"], answer: 0, explain: "Photosynthesis lets plants convert sunlight into food energy." },
      { q: "How do animals that eat plants get energy?", choices: ["By consuming the stored energy in the plants they eat", "Directly from the sun's rays on their skin", "From water only", "They don't need energy from food"], answer: 0, explain: "Animals get energy by eating plants (or other animals) that stored solar energy." },
      { q: "A food chain shows:", choices: ["How energy flows from one living thing to another", "Only what animals look like", "The weather pattern of a region", "A list of animal names with no connections"], answer: 0, explain: "Food chains illustrate the transfer of energy between organisms." },
      { q: "In a food chain of grass → grasshopper → frog → snake, where did the energy originally come from?", choices: ["The sun, captured by the grass", "The snake", "The frog", "The soil directly"], answer: 0, explain: "The grass captured solar energy first, then it passed up the chain." },
      { q: "Why are plants called 'producers' in a food chain?", choices: ["They produce (make) their own food using sunlight", "They eat other organisms", "They produce nothing at all", "They only consume energy"], answer: 0, explain: "Producers make their own food, unlike consumers who eat others." },
      { q: "An energy pyramid typically shows the MOST energy at which level?", choices: ["The bottom, with producers like plants", "The very top, with top predators", "Equally spread at every level", "Energy pyramids don't involve levels"], answer: 0, explain: "Energy decreases as you move up the pyramid from producers to top predators." },
      { q: "If all plants on Earth suddenly disappeared, what would happen to most food chains?", choices: ["They would collapse, since plants are the energy source for nearly everything", "Nothing would change at all", "Animals would get MORE energy", "The sun would stop working"], answer: 0, explain: "Since plants capture the sun's energy first, losing them collapses the food chain." }
    ]
  },
  {
    day: 10, date: "2026-07-25", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.NF.A.1", standardLabel: "Adding & Subtracting Fractions",
    title: "Fraction Common Ground",
    hook: "You can't add apples and oranges — and you can't add fractions with different denominators until they find common ground!",
    teach: [
      "To add or subtract fractions, they must have the same denominator (a common denominator).",
      "Find the least common multiple (LCM) of the denominators to use as the common denominator.",
      "Convert each fraction to an equivalent fraction with that common denominator, then add or subtract the numerators only.",
      "Always simplify your final answer to lowest terms if possible, and convert improper fractions to mixed numbers if needed.",
      "😂 Fun fact: fractions with different denominators refuse to combine until they agree on a 'common denominator' — basically math's version of two rivals finally teaming up."
    ],
    example: { problem: "After karate practice, Luca and Sid split a pizza. Luca eats 1/3 of it and Sid eats 1/4 of it. How much did they eat together?", solution: "The LCM of 3 and 4 is 12. 1/3 = 4/12 and 1/4 = 3/12. Add: 4/12 + 3/12 = 7/12." },
    quiz: [
      { q: "What is 1/2 + 1/3?", choices: ["5/6", "2/5", "1/6", "2/6"], answer: 0, explain: "Common denominator 6: 3/6 + 2/6 = 5/6." },
      { q: "What is 3/4 − 1/2?", choices: ["1/4", "2/2", "1/2", "2/4"], answer: 0, explain: "1/2 = 2/4, so 3/4 − 2/4 = 1/4." },
      { q: "Before adding fractions with different denominators, you must first:", choices: ["Find a common denominator", "Add the denominators together", "Multiply both numerators", "Convert to decimals only"], answer: 0, explain: "A common denominator is required before adding/subtracting fractions." },
      { q: "What is 2/5 + 1/5?", choices: ["3/5", "3/10", "2/10", "1/5"], answer: 0, explain: "Same denominators — just add numerators: 2+1=3, so 3/5." },
      { q: "What is 2/3 + 1/6?", choices: ["5/6", "3/9", "3/6", "1/2"], answer: 0, explain: "2/3 = 4/6, so 4/6 + 1/6 = 5/6." },
      { q: "What is 7/8 − 1/4?", choices: ["5/8", "6/4", "3/8", "6/8"], answer: 0, explain: "1/4 = 2/8, so 7/8 − 2/8 = 5/8." },
      { q: "What is the LCM (least common multiple) of the denominators in 1/4 + 1/6?", choices: ["12", "24", "10", "6"], answer: 0, explain: "The smallest number both 4 and 6 divide into evenly is 12." },
      { q: "Luca trains 5/6 of an hour on kicks and 1/3 of an hour on forms. How much total time did he train, simplified?", choices: ["1 1/6 hours", "6/9 hours", "6/6 hours", "7/9 hours"], answer: 0, explain: "1/3 = 2/6, so 5/6 + 2/6 = 7/6 = 1 1/6." }
    ]
  },
  {
    day: 11, date: "2026-07-26", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "RI.5.3", standardLabel: "Explaining Relationships in Text",
    title: "Connecting the Dots",
    hook: "History and science are full of cause-and-effect chains — let's practice connecting the dots like a true plot-twist detective!",
    teach: [
      "Informational texts often explain relationships between events, ideas, or people — like causes and effects, or steps in a process.",
      "Cause-and-effect relationships answer 'why did this happen?' — the cause comes first, and the effect is the result.",
      "Look for signal words like 'because,' 'as a result,' 'therefore,' and 'led to' to spot these relationships.",
      "Use specific information from the text (not your own opinions) to explain exactly how one event relates to another.",
      "😂 Fun fact: cause-and-effect is basically the plot of every disaster movie ever made, just with better special effects."
    ],
    example: { problem: "Text: 'As factories grew during the Industrial Revolution, more people moved from farms to cities to find jobs, causing rapid city growth.' Explain the relationship.", solution: "Cause: factories growing and offering jobs. Effect: people moved from farms to cities, causing rapid city growth. The signal word 'causing' shows this connection." },
    quiz: [
      { q: "A cause-and-effect relationship shows:", choices: ["Why something happened and what resulted from it", "A list of random unrelated facts", "Only the setting of a story", "The author's opinion only"], answer: 0, explain: "Cause-and-effect connects an event (cause) to its outcome (effect)." },
      { q: "Which signal word suggests a cause-and-effect relationship?", choices: ["as a result", "yesterday", "for example", "in conclusion"], answer: 0, explain: "'As a result' signals that an effect is being described." },
      { q: "Text: 'Because the drought lasted for years, crops failed and food prices rose.' What is the effect?", choices: ["Crops failed and food prices rose", "The drought started", "It rained heavily", "Nothing changed"], answer: 0, explain: "The effect is the result of the cause (the drought)." },
      { q: "When explaining a relationship in informational text, you should use:", choices: ["Specific information directly from the text", "Only your personal opinion", "A made-up story", "No evidence at all"], answer: 0, explain: "Explanations of text relationships must be grounded in the text itself." },
      { q: "Text: 'Because Arian practiced his kata every single day, his form improved so much that he tested for his next belt early.' What is the CAUSE here?", choices: ["Arian practicing his kata every single day", "Testing for his next belt", "His improved form", "Nothing is a cause here"], answer: 0, explain: "Daily practice is the cause; the early belt test is the effect." },
      { q: "Which phrase signals a STEP in a process, rather than cause-and-effect?", choices: ["first, next, then, finally", "as a result", "this caused", "which led to"], answer: 0, explain: "Sequence words like 'first, next, then' show steps in a process." },
      { q: "Text: 'When a ship's crew works together during a storm, they navigate safely, which then leads to finding new islands to explore.' What is the FINAL effect described?", choices: ["Finding new islands to explore", "The storm starting", "The crew arguing", "Losing the ship"], answer: 0, explain: "The chain ends with 'finding new islands to explore' as the final effect." },
      { q: "Why is it important to use the text's own words when explaining a relationship, rather than just your opinion?", choices: ["It keeps your explanation accurate and grounded in evidence", "Opinions are always more accurate", "The text's words are never useful", "It makes the explanation shorter only"], answer: 0, explain: "Using text evidence ensures explanations are accurate, not just opinion-based." }
    ]
  },
  {
    day: 12, date: "2026-07-27", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-LS1-1", standardLabel: "How Plants Get Materials to Grow",
    title: "Plant Building Blocks",
    hook: "A giant tree doesn't come from 'nothing' — it's built almost entirely out of air and water. Mind. Blown.",
    teach: [
      "Plants get water and nutrients from the soil through their roots.",
      "Plants take in carbon dioxide from the air through tiny openings in their leaves.",
      "Using sunlight, water, and carbon dioxide, plants make their own food (sugar) through photosynthesis, releasing oxygen as a byproduct.",
      "Surprisingly, most of a plant's mass (like the wood in a tree trunk) comes from air and water, not just soil.",
      "😂 Fun fact: an entire oak tree is basically made of thin air (and water) that got really, really committed to a bit."
    ],
    example: { problem: "Where does most of the mass of a giant oak tree actually come from?", solution: "Mostly from air (carbon dioxide) and water, which the plant combines using sunlight energy to build its structure through photosynthesis — not mainly from soil." },
    quiz: [
      { q: "Plants absorb carbon dioxide through:", choices: ["Tiny openings in their leaves", "Their roots only", "Their flowers", "They don't use carbon dioxide"], answer: 0, explain: "Leaves have small openings (stomata) that take in carbon dioxide." },
      { q: "What do plant roots primarily absorb from soil?", choices: ["Water and nutrients", "Oxygen only", "Carbon dioxide", "Sunlight"], answer: 0, explain: "Roots draw water and dissolved nutrients from the soil." },
      { q: "What gas do plants release as a byproduct of photosynthesis?", choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 0, explain: "Photosynthesis produces oxygen as a byproduct." },
      { q: "Most of a tree's mass actually comes from:", choices: ["Air and water combined through photosynthesis", "Soil alone", "Sunlight has mass and becomes wood", "Nothing — trees have no real mass"], answer: 0, explain: "This surprises many people — trees are mostly built from air (CO2) and water." },
      { q: "If you weighed the soil around a tree before and after 10 years of growth, what would you likely find?", choices: ["The soil mass barely changed, since the tree mostly used air and water", "The soil mass dropped drastically, becoming the whole tree", "The soil mass doubled", "There's no way to know"], answer: 0, explain: "Since trees mostly build mass from air (CO2) and water, soil mass changes very little." },
      { q: "What three ingredients does a plant combine to perform photosynthesis?", choices: ["Sunlight, water, and carbon dioxide", "Soil, rocks, and sunlight", "Oxygen, nitrogen, and soil", "Water, oxygen, and rocks"], answer: 0, explain: "Photosynthesis requires sunlight, water, and carbon dioxide." },
      { q: "Why do leaves have tiny openings called stomata?", choices: ["To let carbon dioxide in and oxygen/water vapor out", "To absorb soil nutrients", "To attract insects only", "To block sunlight"], answer: 0, explain: "Stomata allow gas exchange needed for photosynthesis." },
      { q: "The sugar a plant makes through photosynthesis is mainly used for:", choices: ["Energy and building the plant's structure", "Making soil richer", "Attracting sunlight", "Nothing — it's wasted"], answer: 0, explain: "The sugar fuels the plant's growth and life processes." }
    ]
  },
  {
    day: 13, date: "2026-07-28", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.NF.B.4", standardLabel: "Multiplying Fractions",
    title: "Fraction Multiplication Magic",
    hook: "Multiplying fractions is actually easier than adding them — no common denominator drama required!",
    teach: [
      "To multiply fractions, multiply the numerators together and multiply the denominators together.",
      "You do NOT need a common denominator to multiply fractions, unlike adding or subtracting.",
      "Multiplying a fraction by a whole number means treating the whole number as a fraction over 1 (like 3 = 3/1).",
      "Simplify (reduce) your answer to lowest terms, or cancel common factors before multiplying to make numbers smaller.",
      "😂 Fun fact: multiplying fractions makes numbers SMALLER, which honestly feels like math breaking its own rules."
    ],
    example: { problem: "A treasure map shows the treasure is buried 2/3 of the way across an island that is 3/4 of a mile long. How far is the treasure from the start?", solution: "Multiply numerators: 2×3=6. Multiply denominators: 3×4=12. Result: 6/12, which simplifies to 1/2 mile." },
    quiz: [
      { q: "What is 1/2 × 1/4?", choices: ["1/8", "2/6", "1/6", "2/8"], answer: 0, explain: "1×1=1 (numerator), 2×4=8 (denominator): 1/8." },
      { q: "What is 3/5 × 2/3?", choices: ["2/5", "6/15", "5/8", "6/8"], answer: 0, explain: "3×2=6, 5×3=15, giving 6/15 which simplifies to 2/5." },
      { q: "What is 4 × 2/3 (treat 4 as 4/1)?", choices: ["8/3", "6/3", "8/4", "2/3"], answer: 0, explain: "4/1 × 2/3 = 8/3 (which equals 2 and 2/3)." },
      { q: "Do you need a common denominator to multiply fractions?", choices: ["No, just multiply numerators and denominators directly", "Yes, always", "Only for mixed numbers", "Only for fractions greater than 1"], answer: 0, explain: "Unlike addition/subtraction, multiplication doesn't require common denominators." },
      { q: "What is 3/4 × 2/5?", choices: ["3/10", "5/9", "6/20", "6/9"], answer: 0, explain: "3×2=6, 4×5=20, giving 6/20 which simplifies to 3/10." },
      { q: "What is 5/6 × 3/10?", choices: ["1/4", "15/60", "8/16", "5/4"], answer: 0, explain: "5×3=15, 6×10=60, giving 15/60 which simplifies to 1/4." },
      { q: "What is 6 × 1/3?", choices: ["2", "6/3", "18", "1/2"], answer: 0, explain: "6/1 × 1/3 = 6/3 = 2." },
      { q: "Why does multiplying two fractions less than 1 give an answer SMALLER than either fraction?", choices: ["You're taking a fractional part of an already-small amount", "Multiplication always makes numbers bigger", "It's a trick question — it doesn't", "Fractions can't be multiplied"], answer: 0, explain: "Multiplying by a fraction less than 1 shrinks the result, since you're finding a part of a part." }
    ]
  },
  {
    day: 14, date: "2026-07-29", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "L.5.1 / L.5.2", standardLabel: "Conventions: Pronouns & Punctuation",
    title: "Grammar Precision",
    hook: "Clear writing depends on using pronouns and punctuation correctly — let's polish those skills like preparing for a black belt test!",
    teach: [
      "A pronoun must clearly refer to a specific noun (its antecedent) — avoid vague pronouns that could confuse the reader.",
      "Use commas to separate introductory phrases, items in a series, and to set off nonessential information.",
      "Use a comma before a coordinating conjunction (and, but, or, so) when joining two complete sentences.",
      "Correct pronoun-antecedent agreement means matching singular pronouns with singular nouns, and plural with plural.",
      "😂 Fun fact: a vague pronoun is like a text message that just says 'it happened' — technically words, zero actual information."
    ],
    example: { problem: "Fix this sentence: 'Every student must bring their own belt.' Is 'their' correct with the singular 'student'?", solution: "In formal writing, you could say 'Every student must bring his or her own belt' or rewrite as 'All students must bring their own belts' to match plural correctly." },
    quiz: [
      { q: "A pronoun's antecedent is:", choices: ["The specific noun the pronoun refers to", "A type of punctuation mark", "The last word in a sentence", "A synonym for verb"], answer: 0, explain: "The antecedent is the noun a pronoun stands in for." },
      { q: "Which sentence uses a comma correctly before a conjunction joining two complete sentences?", choices: ["I finished my homework, and I went to karate practice.", "I finished my homework and, I went to karate practice.", "I finished my homework and I went, to karate practice.", "I finished, my homework and I went to karate practice."], answer: 0, explain: "A comma goes before 'and' when joining two complete sentences." },
      { q: "Which sentence has correct pronoun-antecedent agreement?", choices: ["The students bowed to their sensei.", "The student bowed to their sensei.", "The students bowed to its sensei.", "The student bowed to their sensei happily today because."], answer: 0, explain: "'Students' (plural) correctly matches with 'their' (plural)." },
      { q: "Commas can be used to:", choices: ["Separate items in a list", "Replace all periods", "End every sentence", "Replace question marks"], answer: 0, explain: "One key use of commas is separating list items." },
      { q: "Which sentence has a VAGUE pronoun problem?", choices: ["When Cooper met Cyrus, he shared his water bottle.", "Cooper shared his water bottle with Cyrus.", "The dog wagged its tail.", "The students raised their hands."], answer: 0, explain: "It's unclear whether 'he' and 'his' refer to Cooper or Cyrus — that's a vague pronoun." },
      { q: "Which sentence correctly uses an introductory comma?", choices: ["After the tournament ended, we celebrated.", "After the tournament ended we celebrated, together.", "After, the tournament ended we celebrated.", "After the tournament, ended we celebrated."], answer: 0, explain: "A comma follows an introductory phrase before the main clause." },
      { q: "Which pronoun correctly matches 'the crew' (a singular collective noun)?", choices: ["it", "they", "them", "these"], answer: 0, explain: "'Crew' is singular as a collective noun, matching the singular pronoun 'it.'" },
      { q: "Which sentence needs a comma before the conjunction?", choices: ["The match ended and the crowd cheered.", "The match ended.", "It ended quickly.", "The crowd cheered loudly."], answer: 0, explain: "Two complete sentences joined by 'and' need a comma before it: 'The match ended, and the crowd cheered.'" }
    ]
  },
  {
    day: 15, date: "2026-07-30", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-LS2-1", standardLabel: "Ecosystems: Food Webs & Matter Cycling",
    title: "Web of Life",
    hook: "In nature, nothing is wasted — matter cycles endlessly through living things and their environment, like the ultimate recycling program (or a well-run pirate crew where everyone has a job)!",
    teach: [
      "A food web shows how multiple food chains connect and overlap within an ecosystem, showing complex feeding relationships.",
      "Producers (plants) make their own food; consumers (animals) eat other organisms; decomposers (fungi, bacteria) break down dead material.",
      "Decomposers play a crucial role by returning nutrients from dead organisms back into the soil, so the matter can be reused by plants.",
      "Matter continually cycles through an ecosystem (plants to animals to decomposers and back to soil), while energy generally flows one direction, starting from the sun.",
      "😂 Fun fact: decomposers are nature's cleanup crew, and honestly, they never once complain about the smell."
    ],
    example: { problem: "What role do decomposers play in a forest ecosystem?", solution: "Decomposers break down dead plants and animals, releasing nutrients back into the soil so new plants can use them to grow — recycling matter through the ecosystem." },
    quiz: [
      { q: "A food web shows:", choices: ["Multiple interconnected food chains in an ecosystem", "Only one animal's diet", "The weather in a region", "A map of land and water"], answer: 0, explain: "Food webs illustrate complex, overlapping feeding relationships." },
      { q: "What is the role of decomposers?", choices: ["Breaking down dead material and returning nutrients to soil", "Making their own food from sunlight", "Eating only living plants", "Producing oxygen only"], answer: 0, explain: "Decomposers recycle nutrients from dead organisms back into the ecosystem." },
      { q: "Which organism is a producer?", choices: ["A tree", "A wolf", "A mushroom (decomposer)", "A hawk"], answer: 0, explain: "Producers, like trees, make their own food via photosynthesis." },
      { q: "In an ecosystem, matter generally:", choices: ["Cycles and gets reused repeatedly", "Disappears permanently after use", "Is created from nothing continuously", "Never moves between organisms"], answer: 0, explain: "Matter cycles through the ecosystem via feeding and decomposition." },
      { q: "If all decomposers disappeared from a forest, what would likely happen?", choices: ["Dead matter would pile up, and nutrients wouldn't return to the soil", "Nothing would change at all", "Plants would grow faster than ever", "Animals would stop needing food"], answer: 0, explain: "Without decomposers, nutrients get stuck in dead matter instead of recycling." },
      { q: "Which of these is a consumer that eats both plants and animals (an omnivore)?", choices: ["A bear", "A tree", "Sunlight", "A mushroom"], answer: 0, explain: "Bears eat both plants and animals, making them omnivores (a type of consumer)." },
      { q: "Why is a food WEB a more accurate model than a single food CHAIN?", choices: ["It shows how many different chains overlap and connect in real ecosystems", "It only shows one animal's diet, which is simpler", "Food webs are not real, only food chains are", "There is no difference between them"], answer: 0, explain: "Real ecosystems have many interconnected feeding relationships, better shown by a web." },
      { q: "Which best describes how ENERGY flows through an ecosystem (unlike matter)?", choices: ["Energy flows mostly in one direction, starting from the sun", "Energy cycles endlessly like matter does", "Energy disappears completely with each transfer", "Energy comes from decomposers first"], answer: 0, explain: "Unlike matter (which cycles), energy generally flows one direction, starting with the sun." }
    ]
  },
  {
    day: 16, date: "2026-07-31", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.NF.B.7", standardLabel: "Dividing Fractions & Whole Numbers",
    title: "Splitting Fractions",
    hook: "What happens when you divide a whole number by a fraction, or a fraction by a whole number? Let's find out — plot twist incoming!",
    teach: [
      "Dividing a unit fraction by a whole number means splitting that fraction into even smaller equal parts.",
      "Dividing a whole number by a unit fraction means finding how many of those fraction-sized pieces fit into the whole number.",
      "A helpful trick: dividing by a fraction is the same as multiplying by its reciprocal (flip the fraction upside down).",
      "Drawing a picture or number line can help you visualize what the division is actually asking.",
      "😂 Fun fact: dividing by a fraction makes the answer BIGGER — division officially broke its own rules again, just like multiplication did yesterday."
    ],
    example: { problem: "Solve 1/3 ÷ 4 (splitting one-third of a treasure chest into 4 equal parts).", solution: "1/3 ÷ 4 = 1/3 × 1/4 = 1/12." },
    quiz: [
      { q: "What is 1/2 ÷ 3?", choices: ["1/6", "3/2", "1/3", "3/6"], answer: 0, explain: "1/2 ÷ 3 = 1/2 × 1/3 = 1/6." },
      { q: "What is 4 ÷ 1/2 (how many halves fit into 4)?", choices: ["8", "2", "4", "1/8"], answer: 0, explain: "4 ÷ 1/2 = 4 × 2 = 8 halves fit into 4 wholes." },
      { q: "Dividing by a fraction is the same as:", choices: ["Multiplying by its reciprocal", "Adding the reciprocal", "Subtracting the reciprocal", "Doing nothing different"], answer: 0, explain: "Flip and multiply is the standard fraction division shortcut." },
      { q: "What is 1/4 ÷ 2?", choices: ["1/8", "1/2", "2/4", "1/6"], answer: 0, explain: "1/4 ÷ 2 = 1/4 × 1/2 = 1/8." },
      { q: "What is 6 ÷ 1/3 (how many thirds fit into 6)?", choices: ["18", "2", "3", "6"], answer: 0, explain: "6 ÷ 1/3 = 6 × 3 = 18." },
      { q: "What is 1/5 ÷ 4?", choices: ["1/20", "4/5", "1/9", "5/4"], answer: 0, explain: "1/5 ÷ 4 = 1/5 × 1/4 = 1/20." },
      { q: "What is the reciprocal of 1/6?", choices: ["6", "1/6", "-6", "0"], answer: 0, explain: "Flipping 1/6 gives 6/1, which equals 6." },
      { q: "A crew's treasure map is cut so each piece is 1/8 of the whole map. How many pieces fit into 3 whole maps?", choices: ["24", "8", "3", "11"], answer: 0, explain: "3 ÷ 1/8 = 3 × 8 = 24 pieces." }
    ]
  },
  {
    day: 17, date: "2026-08-01", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "L.5.4 / L.5.5", standardLabel: "Figurative Language",
    title: "Painting Pictures with Words",
    hook: "Authors don't always mean exactly what they say — figurative language paints vivid pictures in our minds, like anime power-up scenes but in words!",
    teach: [
      "A simile compares two different things using 'like' or 'as,' such as 'brave as a lion.'",
      "A metaphor compares two things directly, saying one thing IS another, like 'time is a thief.'",
      "An idiom is a phrase whose meaning isn't literal, like 'it's raining cats and dogs' (meaning heavy rain).",
      "Figurative language helps readers form vivid mental images and understand emotions or ideas more deeply than literal words alone.",
      "😂 Fun fact: if 'it's raining cats and dogs' were literal, that would be both a meteorological miracle and a serious animal-safety concern."
    ],
    example: { problem: "Identify the figurative language: 'The dojo was a beehive of motion after the tournament announcement.'", solution: "This is a metaphor — comparing the busy dojo directly to a beehive (without using 'like' or 'as')." },
    quiz: [
      { q: "Which sentence contains a simile?", choices: ["His kick was as fast as lightning.", "His kick was lightning.", "He kicked quickly.", "His kick lit up the room literally."], answer: 0, explain: "Similes use 'like' or 'as' to compare things." },
      { q: "Which sentence contains a metaphor?", choices: ["The dojo was a beehive of motion.", "The dojo was as busy as a beehive.", "The dojo seemed busy like a beehive.", "The dojo had bees in it."], answer: 0, explain: "A metaphor directly states one thing IS another, without 'like/as.'" },
      { q: "What does the idiom 'break the ice' mean?", choices: ["To ease tension and start a conversation", "To literally break frozen water", "To end a friendship", "To be very cold"], answer: 0, explain: "This idiom means to relieve social tension, not a literal action." },
      { q: "Why do authors use figurative language?", choices: ["To create vivid images and deeper meaning", "To confuse readers on purpose", "Because literal language is against the rules", "To make sentences longer only"], answer: 0, explain: "Figurative language enriches meaning and imagery." },
      { q: "'The young captain's determination was a raging fire that nothing could extinguish.' What figurative device is this?", choices: ["Metaphor", "Simile", "Idiom", "None — it's literal"], answer: 0, explain: "It directly says determination IS a fire, without 'like' or 'as' — a metaphor." },
      { q: "What does the idiom 'it's a piece of cake' mean?", choices: ["Something is very easy", "Someone is eating dessert", "Something is very difficult", "A recipe is being shared"], answer: 0, explain: "This idiom means a task is easy, not literally about cake." },
      { q: "'The wind howled like a wounded wolf across the deck of the ship.' What figurative device is used?", choices: ["Simile", "Metaphor", "Idiom", "Literal description"], answer: 0, explain: "The word 'like' signals a simile comparing the wind to a howling wolf." },
      { q: "Which sentence uses an idiom?", choices: ["Don't spill the beans about the surprise belt ceremony!", "The beans fell out of the bag.", "He ate beans for dinner.", "The bag was full of beans."], answer: 0, explain: "'Spill the beans' idiomatically means to reveal a secret." }
    ]
  },
  {
    day: 18, date: "2026-08-02", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-ESS1-1 / 5-ESS1-2", standardLabel: "Patterns in the Sky",
    title: "Sky Patterns & Seasons",
    hook: "The sun, moon, and stars follow predictable patterns that have guided sailors — and anime pirate crews — across the seas for thousands of years!",
    teach: [
      "Stars other than the sun are extremely far away, which is why they appear as tiny points of light compared to our much closer sun.",
      "Earth's rotation on its axis (spinning once every 24 hours) causes the pattern of day and night.",
      "Earth's tilt combined with its orbit around the sun (365 days) causes the changing seasons throughout the year.",
      "The apparent brightness of a star depends on both its actual size/energy output and its distance from Earth.",
      "😂 Fun fact: the sun isn't even the biggest star out there — it's just really, really good at being close to us."
    ],
    example: { problem: "Why does the sun look so much bigger and brighter than any other star in the sky?", solution: "The sun is a star too, but it is vastly closer to Earth than any other star, making it appear much larger and brighter, even though other stars may be much bigger in reality." },
    quiz: [
      { q: "What causes day and night on Earth?", choices: ["Earth's rotation on its axis", "The moon blocking the sun", "The sun turning on and off", "Earth's orbit around the sun"], answer: 0, explain: "Earth spinning on its axis every 24 hours creates day and night." },
      { q: "What causes the changing seasons?", choices: ["Earth's tilt combined with its orbit around the sun", "Random weather changes", "The moon's phases", "Earth spinning faster in summer"], answer: 0, explain: "Axial tilt plus orbit causes different amounts of sunlight throughout the year." },
      { q: "Why do stars (other than the sun) look like tiny points of light?", choices: ["They are extremely far away from Earth", "They are actually much smaller than the sun", "They don't produce much light", "They are moving away quickly"], answer: 0, explain: "Distance makes even huge stars appear as small points of light." },
      { q: "How long does it take Earth to complete one full orbit around the sun?", choices: ["About 365 days", "24 hours", "30 days", "7 days"], answer: 0, explain: "One full orbit (a year) takes about 365 days." },
      { q: "If Earth's axis had no tilt at all, what would likely happen to seasons?", choices: ["There would be little to no seasonal variation", "Seasons would change every single day", "Only winter would ever happen", "Nothing would change about day/night"], answer: 0, explain: "Axial tilt is the main reason sunlight amounts vary through the year, causing seasons." },
      { q: "A star that looks dim in the night sky could be:", choices: ["Either small/dim, or just very far away", "Definitely closer than the sun", "Definitely the smallest star that exists", "Impossible to explain"], answer: 0, explain: "Both actual brightness and distance affect how bright a star appears." },
      { q: "During which season is the Northern Hemisphere tilted most toward the sun?", choices: ["Summer", "Winter", "It never tilts toward the sun", "Only during eclipses"], answer: 0, explain: "Summer in the Northern Hemisphere occurs when it's tilted toward the sun." },
      { q: "Why does Earth's rotation (not orbit) explain day and night, rather than the year-long trip around the sun?", choices: ["Rotation happens roughly every 24 hours, matching a full day/night cycle", "Orbit takes only a few hours", "Rotation takes exactly one year", "Day and night are caused by the moon only"], answer: 0, explain: "Earth's 24-hour spin (rotation) matches the day/night cycle; orbit takes a year and causes seasons instead." }
    ]
  },
  {
    day: 19, date: "2026-08-03", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.MD.C.5", standardLabel: "Volume of Rectangular Prisms",
    title: "Filling Up Space",
    hook: "How much space does a box actually hold? Let's calculate volume like we're figuring out how much loot fits in a treasure chest!",
    teach: [
      "Volume measures how much space a 3D object takes up, measured in cubic units (like cubic inches or cubic centimeters).",
      "For a rectangular prism, Volume = length × width × height.",
      "You can also find volume by counting how many unit cubes fit inside the shape.",
      "Volume can also be found by multiplying the area of the base by the height: V = (l × w) × h.",
      "😂 Fun fact: figuring out the volume of your backpack is basically the real-world math problem you solve every single morning trying to fit your karate gi and lunch in."
    ],
    example: { problem: "Find the volume of a treasure chest that is 5 cm long, 3 cm wide, and 4 cm tall.", solution: "V = 5 × 3 × 4 = 60 cubic centimeters." },
    quiz: [
      { q: "What is the formula for volume of a rectangular prism?", choices: ["length × width × height", "length + width + height", "2 × (length + width)", "length × width only"], answer: 0, explain: "Volume of a rectangular prism = l × w × h." },
      { q: "A treasure chest is 6 in long, 2 in wide, and 3 in tall. What is its volume?", choices: ["36 cubic inches", "11 cubic inches", "18 cubic inches", "72 cubic inches"], answer: 0, explain: "6 × 2 × 3 = 36 cubic inches." },
      { q: "Volume is measured in:", choices: ["Cubic units", "Square units", "Linear units", "Degrees"], answer: 0, explain: "Volume uses cubic units since it measures 3D space." },
      { q: "A cube has sides of 4 cm each. What is its volume?", choices: ["64 cubic cm", "16 cubic cm", "12 cubic cm", "48 cubic cm"], answer: 0, explain: "4 × 4 × 4 = 64 cubic centimeters." },
      { q: "A treasure chest is 8 ft long, 3 ft wide, and 2 ft tall. What's its volume?", choices: ["48 cubic feet", "13 cubic feet", "24 cubic feet", "96 cubic feet"], answer: 0, explain: "8 × 3 × 2 = 48 cubic feet." },
      { q: "If a rectangular prism has a base area of 20 square inches and a height of 5 inches, what is its volume?", choices: ["100 cubic inches", "25 cubic inches", "15 cubic inches", "4 cubic inches"], answer: 0, explain: "V = base area × height = 20 × 5 = 100 cubic inches." },
      { q: "A dojo's trophy case is 10 in × 5 in × 8 in. What is its volume?", choices: ["400 cubic inches", "23 cubic inches", "80 cubic inches", "350 cubic inches"], answer: 0, explain: "10 × 5 × 8 = 400 cubic inches." },
      { q: "Two boxes have the same volume but different shapes. What does this tell you?", choices: ["Different-shaped prisms can hold the same amount of space", "One of them must be measured wrong", "Volume only applies to cubes", "This is impossible"], answer: 0, explain: "Volume depends on l×w×h, so different dimensions can still multiply to the same volume." }
    ]
  },
  {
    day: 20, date: "2026-08-04", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "W.5.1", standardLabel: "Opinion Writing with Evidence",
    title: "Persuasive Power",
    hook: "A great opinion piece doesn't just state what you think — it proves it with solid reasons, like winning an argument with actual receipts!",
    teach: [
      "Start with a clear thesis statement that states your opinion directly.",
      "Support your opinion with logically organized reasons, each backed by facts, examples, or evidence — not just feelings.",
      "Use linking words and phrases (consequently, specifically, in contrast) to connect your reasons and evidence clearly.",
      "End with a strong concluding statement that follows logically from the reasons you presented.",
      "😂 Fun fact: 'because I said so' works great for parents, but zero points in a persuasive essay — sorry."
    ],
    example: { problem: "Write a thesis and one supporting reason for: 'Should schools teach a second language, like Japanese?'", solution: "Thesis: Schools should teach a second language like Japanese. Reason: Learning a new language helps students understand different cultures and improves memory and focus." },
    quiz: [
      { q: "A thesis statement in opinion writing should:", choices: ["Clearly state your opinion on the topic", "List random unrelated facts", "Only ask a question", "Avoid stating an opinion"], answer: 0, explain: "The thesis directly presents the writer's opinion." },
      { q: "Which is the strongest kind of supporting evidence?", choices: ["Facts, examples, or data related to the reason", "Just saying 'I feel like it'", "Copying a friend's opinion", "Ignoring the topic"], answer: 0, explain: "Strong evidence uses facts and examples, not just feelings." },
      { q: "Which linking phrase could show contrast between two ideas?", choices: ["in contrast", "for example", "specifically", "as a result"], answer: 0, explain: "'In contrast' signals a difference or opposing idea." },
      { q: "A strong conclusion in an opinion piece should:", choices: ["Logically follow from the reasons presented", "Introduce a brand-new unrelated opinion", "Contradict the thesis", "Only restate the title"], answer: 0, explain: "Conclusions should connect back to and reinforce the argument made." },
      { q: "Which sentence is the STRONGEST supporting evidence for 'Martial arts training builds discipline'?", choices: ["Studies show structured practice improves focus and self-control", "Karate is sometimes fun", "My friend agrees with me", "Uniforms look cool"], answer: 0, explain: "A study-based fact is much stronger evidence than a vague or unrelated claim." },
      { q: "Which linking phrase would best introduce your MOST convincing reason?", choices: ["Most importantly", "By the way", "Actually never mind", "In no particular order"], answer: 0, explain: "'Most importantly' signals your strongest point." },
      { q: "Why should an opinion essay avoid relying only on feelings ('I just don't like it')?", choices: ["Feelings alone don't convince a reader without evidence", "Feelings are the strongest form of evidence", "Essays should have no reasons at all", "Feelings should replace facts always"], answer: 0, explain: "Persuasive writing needs solid evidence, not just unsupported feelings." },
      { q: "Which is the correct structure for a well-organized opinion paragraph?", choices: ["Thesis, reasons with evidence, conclusion", "Conclusion, thesis, random facts", "Only reasons, no thesis or conclusion", "Evidence first, then nothing else"], answer: 0, explain: "A clear thesis, supported reasons, then a conclusion is the standard structure." }
    ]
  },
  {
    day: 21, date: "2026-08-05", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-ESS2-1", standardLabel: "Earth's Interacting Systems",
    title: "Earth's Four Systems",
    hook: "Earth is made of four major systems that constantly interact — like a giant, connected machine running the ultimate group project (or a well-coordinated ship's crew).",
    teach: [
      "The geosphere includes all the rock, soil, and minerals that make up Earth's solid structure.",
      "The hydrosphere includes all of Earth's water — oceans, rivers, lakes, ice, and water vapor.",
      "The atmosphere is the layer of gases surrounding Earth, including the air we breathe.",
      "The biosphere includes all living things on Earth. These four systems constantly interact — for example, rain (hydrosphere) falling on soil (geosphere) helps plants (biosphere) grow, using air (atmosphere) too.",
      "😂 Fun fact: Earth's four systems are basically the ultimate crew — none of them could carry the planet alone."
    ],
    example: { problem: "A volcanic island erupts, releasing ash into the sky, which blocks sunlight and cools the atmosphere, affecting plant growth. Which Earth systems are interacting here?", solution: "The geosphere (volcano/rock), atmosphere (ash blocking sunlight, temperature change), and biosphere (plant growth affected) are all interacting." },
    quiz: [
      { q: "Which Earth system includes rocks, soil, and minerals?", choices: ["Geosphere", "Hydrosphere", "Atmosphere", "Biosphere"], answer: 0, explain: "The geosphere is Earth's solid rock and soil structure." },
      { q: "Which Earth system includes all living things?", choices: ["Biosphere", "Geosphere", "Atmosphere", "Hydrosphere"], answer: 0, explain: "The biosphere encompasses all living organisms." },
      { q: "Rain falling from clouds onto soil to help plants grow shows interaction between which systems?", choices: ["Hydrosphere, geosphere, and biosphere", "Only the atmosphere", "Only the biosphere", "None of them interact"], answer: 0, explain: "Water (hydrosphere) + soil (geosphere) + plants (biosphere) are all involved." },
      { q: "Which Earth system is made of the gases surrounding the planet?", choices: ["Atmosphere", "Geosphere", "Hydrosphere", "Biosphere"], answer: 0, explain: "The atmosphere is the layer of air/gases around Earth." },
      { q: "A river (hydrosphere) slowly carves a canyon out of rock (geosphere) over time. This shows:", choices: ["The hydrosphere and geosphere interacting", "Only the atmosphere at work", "The biosphere acting alone", "No interaction at all"], answer: 0, explain: "Water eroding rock is a direct interaction between hydrosphere and geosphere." },
      { q: "Which of these is an example of the biosphere affecting the atmosphere?", choices: ["Trees releasing oxygen into the air", "A rock sitting still", "Ocean waves crashing", "Snow falling on a mountain"], answer: 0, explain: "Living trees (biosphere) release oxygen, changing the air (atmosphere)." },
      { q: "A coral reef (biosphere) grows in ocean water (hydrosphere) on top of rocky formations (geosphere). This is an example of:", choices: ["Three Earth systems interacting together", "Only one system existing", "A made-up scenario with no real systems", "The atmosphere acting alone"], answer: 0, explain: "This scenario shows biosphere, hydrosphere, and geosphere all interacting." },
      { q: "Why is it useful to think of Earth as four interacting systems instead of just separate parts?", choices: ["It helps explain how changes in one system affect the others", "Because the systems never actually connect", "Because only one system matters at a time", "It has no real scientific usefulness"], answer: 0, explain: "Understanding interactions helps explain real events like erosion, weather, and ecosystems." }
    ]
  },
  {
    day: 22, date: "2026-08-06", subject: "Math", levelLabel: "5th Grade Review",
    standard: "5.G.A.1 / 5.G.A.2", standardLabel: "The Coordinate Plane",
    title: "Mapping with Coordinates",
    hook: "The coordinate plane is like a treasure map — every point has an exact address made of two numbers, X marks the spot!",
    teach: [
      "The coordinate plane has a horizontal x-axis and a vertical y-axis, meeting at the origin (0, 0).",
      "A point is written as an ordered pair (x, y): the x-coordinate tells how far to move right/left, and the y-coordinate tells how far up/down.",
      "Always start at the origin, move horizontally first (along the x-axis), then move vertically (parallel to the y-axis) to plot a point.",
      "Coordinate graphs are useful for representing real-world data, like plotting distance over time.",
      "😂 Fun fact: 'x before y' is the golden rule of coordinates — mess up that order and you'll end up in a totally different spot, like reading a treasure map upside down."
    ],
    example: { problem: "Plot and describe the point (3, 5) on a treasure map.", solution: "Starting at the origin, move 3 units right (x=3), then move 5 units up (y=5) to reach the point." },
    quiz: [
      { q: "In the ordered pair (4, 7), what does the 4 represent?", choices: ["How far to move along the x-axis (horizontal)", "How far to move along the y-axis (vertical)", "The total sum of the point", "The origin's location"], answer: 0, explain: "The first number in an ordered pair is always the x-coordinate." },
      { q: "What are the coordinates of the origin?", choices: ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"], answer: 0, explain: "The origin is where both axes meet, at (0,0)." },
      { q: "To plot the point (2, 6), you should first:", choices: ["Move 2 units right from the origin", "Move 6 units right from the origin", "Move 2 units up from the origin", "Start at (6,2) instead"], answer: 0, explain: "Always move along the x-axis (horizontal) first." },
      { q: "Which axis is vertical?", choices: ["The y-axis", "The x-axis", "Both are horizontal", "Neither is vertical"], answer: 0, explain: "The y-axis runs vertically (up and down)." },
      { q: "A treasure map shows treasure at (5, 2). How do you get there from the origin?", choices: ["Move 5 right, then 2 up", "Move 2 right, then 5 up", "Move 5 up, then 2 right", "Move 2 left, then 5 down"], answer: 0, explain: "The x-coordinate (5) is horizontal movement first, then y-coordinate (2) is vertical." },
      { q: "Which point is located 4 units left and 3 units up from the origin (using negative x)?", choices: ["(-4, 3)", "(4, -3)", "(3, -4)", "(-3, 4)"], answer: 0, explain: "Left of origin is negative x (-4), and up is positive y (3)." },
      { q: "If two points share the same y-coordinate, what does that mean about their positions?", choices: ["They are at the same height (horizontal line apart)", "They are at the same left-right position", "They are the exact same point", "They cannot be graphed"], answer: 0, explain: "Same y-coordinate means they line up horizontally at the same height." },
      { q: "What is the correct order for reading an ordered pair (x, y)?", choices: ["x-coordinate first, then y-coordinate", "y-coordinate first, then x-coordinate", "It doesn't matter which comes first", "Only x matters"], answer: 0, explain: "Ordered pairs are always written (x, y), with x first." }
    ]
  },
  {
    day: 23, date: "2026-08-07", subject: "ELA", levelLabel: "5th Grade Review",
    standard: "L.5.4a", standardLabel: "Using Context Clues",
    title: "Vocabulary Code-Breaking",
    hook: "You don't need a dictionary for every hard word — the sentences around it often hold the secret, like decoding a hidden message! Today let's even try it with some Japanese loanwords.",
    teach: [
      "Context clues are hints in the surrounding sentence(s) that help you figure out an unfamiliar word's meaning.",
      "A definition clue directly explains the word nearby, often signaled by commas or 'which means.'",
      "A contrast clue uses opposite ideas (signaled by 'but,' 'however,' 'unlike') to hint at meaning.",
      "An example clue gives specific examples (signaled by 'such as,' 'for instance') that reveal the word's category or meaning.",
      "😂 Fun fact: 'dojo' and 'sensei' are Japanese words English speakers borrowed because, honestly, there wasn't a cooler way to say them."
    ],
    example: { problem: "'Luca's sensei, which means teacher in Japanese, bowed respectfully before starting class.' What does 'sensei' mean?", solution: "Sensei means teacher — the definition clue 'which means teacher in Japanese' directly explains it." },
    quiz: [
      { q: "A context clue is:", choices: ["A hint in nearby text that reveals a word's meaning", "A word that always means the opposite", "Only found in the dictionary", "A punctuation mark"], answer: 0, explain: "Context clues are hints embedded in surrounding text." },
      { q: "Which signal word often indicates a contrast clue?", choices: ["however", "for example", "which means", "such as"], answer: 0, explain: "'However' signals a contrasting idea, hinting at meaning through opposites." },
      { q: "'The dojo, which means training hall in Japanese, was filled with the sound of focused breathing.' What clue type is used?", choices: ["Definition clue", "Contrast clue", "Example clue", "No clue used"], answer: 0, explain: "'Which means' directly signals a definition clue." },
      { q: "'Martial arts terms, such as kata and dojo, are often borrowed directly from Japanese.' What clue type helps define 'borrowed'?", choices: ["Example clue", "Contrast clue", "Definition clue", "None"], answer: 0, explain: "'Such as' introduces examples that clarify the meaning." },
      { q: "'The villain's plan was utterly futile; despite months of effort, it accomplished absolutely nothing.' What does 'futile' most likely mean?", choices: ["Useless or unsuccessful", "Extremely clever", "Very expensive", "Extremely fast"], answer: 0, explain: "The clue 'accomplished absolutely nothing' hints that 'futile' means useless." },
      { q: "Which signal phrase would introduce an EXAMPLE clue?", choices: ["for instance", "however", "in contrast", "unlike"], answer: 0, explain: "'For instance' introduces specific examples clarifying meaning." },
      { q: "'Unlike his boisterous younger brother, Cyrus was calm and focused before his belt test.' What does 'boisterous' most likely mean?", choices: ["Loud and energetic", "Quiet and shy", "Extremely tired", "Very organized"], answer: 0, explain: "The contrast with 'calm and focused' suggests 'boisterous' means the opposite: loud/energetic." },
      { q: "Why are context clues a useful reading strategy?", choices: ["They let you figure out unfamiliar words without stopping to look them up", "They replace the need to read the sentence at all", "They only work with easy words", "They are only used in nonfiction"], answer: 0, explain: "Context clues help maintain reading flow while understanding new vocabulary." }
    ]
  },
  {
    day: 24, date: "2026-08-08", subject: "Science", levelLabel: "5th Grade Review",
    standard: "5-ESS3-1", standardLabel: "Human Impact on Earth's Resources",
    title: "Protecting Our Planet",
    hook: "Humans use Earth's resources every day — but our choices can help protect or harm the environment, like a real-life side quest that matters.",
    teach: [
      "Natural resources (like water, forests, and fossil fuels) are materials from Earth that humans use for survival and daily life.",
      "Some resources are renewable (can be replaced naturally, like trees or solar energy) while others are nonrenewable (take millions of years to form, like coal and oil).",
      "Human activities such as deforestation, pollution, and overuse of resources can negatively affect the environment.",
      "Individuals and communities can help protect resources through actions like recycling, conserving water, and reducing waste.",
      "😂 Fun fact: fossil fuels take millions of years to form, so using them wisely is basically respecting a REALLY long cooking time."
    ],
    example: { problem: "Why is it important to conserve nonrenewable resources like oil and coal?", solution: "Because they take millions of years to form and cannot be quickly replaced, so using them carefully helps ensure they last and reduces environmental harm from over-extraction." },
    quiz: [
      { q: "Which of these is a renewable resource?", choices: ["Solar energy", "Coal", "Oil", "Natural gas"], answer: 0, explain: "Solar energy is naturally replenished and doesn't run out." },
      { q: "Which of these is a nonrenewable resource?", choices: ["Coal", "Wind", "Sunlight", "Trees (if replanted)"], answer: 0, explain: "Coal takes millions of years to form and isn't quickly replaceable." },
      { q: "Which human activity can negatively impact forests?", choices: ["Deforestation (cutting down trees)", "Recycling", "Conserving water", "Planting new trees"], answer: 0, explain: "Deforestation removes trees faster than they can regrow." },
      { q: "Which action helps protect Earth's resources?", choices: ["Recycling and reducing waste", "Wasting water constantly", "Cutting down forests unnecessarily", "Ignoring pollution"], answer: 0, explain: "Recycling and reducing waste help conserve resources." },
      { q: "Why is overfishing a concern for ocean resources?", choices: ["Fish populations may not recover if caught faster than they can reproduce", "Fish are a nonrenewable resource like coal", "Overfishing has no real environmental impact", "There is an unlimited supply of fish"], answer: 0, explain: "Even renewable resources like fish can run out if used faster than they replenish." },
      { q: "Which is the BEST long-term solution to reduce dependence on nonrenewable fossil fuels?", choices: ["Investing more in renewable energy sources like solar and wind", "Using more coal and oil", "Ignoring the issue completely", "Only using resources faster"], answer: 0, explain: "Renewable energy sources don't run out, unlike fossil fuels." },
      { q: "Why might a community set up a recycling program?", choices: ["To reduce waste and reuse materials, conserving resources", "To create more pollution", "To use up resources faster", "Recycling has no real purpose"], answer: 0, explain: "Recycling conserves resources and reduces environmental harm." },
      { q: "Which best explains why 'renewable' doesn't always mean 'unlimited without care'?", choices: ["Even renewable resources can be overused faster than they replenish", "Renewable resources can never run out under any circumstances", "Renewable just means 'free'", "Renewable resources don't need any management"], answer: 0, explain: "Resources like forests or fish are renewable but still need responsible management." }
    ]
  },
  {
    day: 25, date: "2026-08-09", subject: "Math", levelLabel: "6th Grade Prep",
    standard: "6.RP.A.1", standardLabel: "Ratios & Rate Language",
    title: "Ratio Reasoning",
    hook: "Welcome to 6th grade math — ratios compare quantities and show up everywhere, from recipes to game stats to anime power scaling!",
    teach: [
      "A ratio compares two quantities, often written as 'a to b,' a:b, or a/b — like 3 cats to 5 dogs (3:5).",
      "A ratio doesn't have to compare parts of the same whole — it can compare completely different quantities, like miles to hours.",
      "A rate is a special ratio that compares two different units, like 60 miles per hour (miles to hours).",
      "Equivalent ratios keep the same relationship even when both numbers are multiplied or divided by the same factor, like 2:3 is equivalent to 4:6.",
      "😂 Fun fact: ratios are basically the 'recipe' of math — mess up the proportions and things get weird fast (looking at you, double-salt cookies)."
    ],
    example: { problem: "Luca's dojo has a ratio of 2 instructors for every 1 group of students. If there are 6 groups, how many instructors are needed?", solution: "Keeping the 2:1 ratio, 6 groups need 12 instructors (2×6=12)." },
    quiz: [
      { q: "A ratio of 4 red marbles to 6 blue marbles can also be written as:", choices: ["4:6", "4+6", "4-6", "4 divided evenly by 6 only"], answer: 0, explain: "Ratios are commonly written with a colon, like 4:6." },
      { q: "Which of these is an equivalent ratio to 3:5?", choices: ["6:10", "3:10", "6:5", "5:3"], answer: 0, explain: "Multiplying both parts of 3:5 by 2 gives 6:10, an equivalent ratio." },
      { q: "A ship sails 120 miles in 2 hours. What is its rate in miles per hour?", choices: ["60 mph", "120 mph", "240 mph", "2 mph"], answer: 0, explain: "120 miles ÷ 2 hours = 60 miles per hour." },
      { q: "A rate is best described as:", choices: ["A ratio comparing two different units", "Always comparing identical units", "A single number with no comparison", "The same thing as a fraction of a whole"], answer: 0, explain: "Rates compare different kinds of units, like distance and time." },
      { q: "Luca's belt test has a ratio of 2:1 for kicks to punches in a required combo. If he does 6 kicks, how many punches does he need?", choices: ["3 punches", "6 punches", "2 punches", "12 punches"], answer: 0, explain: "Keeping the 2:1 ratio, 6 kicks needs 3 punches (6:3 simplifies to 2:1)." },
      { q: "Cooper scores 45 points across 9 sparring rounds. What is his scoring rate per round?", choices: ["5 points per round", "9 points per round", "45 points per round", "4 points per round"], answer: 0, explain: "45 points ÷ 9 rounds = 5 points per round." },
      { q: "Which ratio is NOT equivalent to 4:8?", choices: ["3:5", "1:2", "2:4", "8:16"], answer: 0, explain: "4:8 simplifies to 1:2; only 3:5 doesn't match that same simplified relationship." },
      { q: "If a training snack recipe has a ratio of 3 parts oats to 2 parts honey, how many parts oats are needed for 8 parts honey (keeping the ratio equivalent)?", choices: ["12 parts oats", "8 parts oats", "10 parts oats", "6 parts oats"], answer: 0, explain: "3:2 scaled up by 4 gives 12:8, keeping the same ratio." }
    ]
  },
  {
    day: 26, date: "2026-08-10", subject: "ELA", levelLabel: "6th Grade Prep",
    standard: "RL.6.2", standardLabel: "Theme: Objective Summary",
    title: "Summarizing Without Opinions",
    hook: "In 6th grade, you'll not only find the theme — you'll summarize the story objectively, without letting your own opinions sneak in like an uninvited plot twist!",
    teach: [
      "An objective summary states what happens in a text using only facts from the story — no personal opinions or judgments.",
      "To determine theme in 6th grade, you'll trace how it's developed over the course of the text through particular details, not just at the end.",
      "Avoid phrases like 'I think' or 'this was a great story' in an objective summary — stick to what actually happened.",
      "A strong theme statement should apply broadly to life, not just describe the specific plot of that one story.",
      "😂 Fun fact: keeping your opinions out of a summary is harder than it sounds — it's basically reviewing your favorite anime episode without saying if it was good."
    ],
    example: { problem: "Which is more objective: 'The awesome training arc was about a weak fighter who trained really hard' or 'The training arc follows a weak fighter who trains for months to grow stronger'?", solution: "The second one — it states facts about the plot without the personal opinion word 'awesome.'" },
    quiz: [
      { q: "An objective summary should:", choices: ["State the facts of the text without personal opinions", "Include your own judgments about the story", "Use words like 'I think' throughout", "Be shorter than the title"], answer: 0, explain: "Objective means fact-based, free of personal opinion." },
      { q: "Which phrase would NOT belong in an objective summary?", choices: ["\"This amazing story was about...\"", "\"The story follows a character who...\"", "\"The main event occurs when...\"", "\"By the end, the character has...\""], answer: 0, explain: "'Amazing' is a personal opinion, not an objective fact." },
      { q: "A strong theme statement should:", choices: ["Apply broadly to life, not just describe the specific plot", "Only describe exactly what happened in the story", "Be a single word", "Include the character's name only"], answer: 0, explain: "Themes are universal ideas, broader than the specific plot." },
      { q: "How is theme in 6th grade texts typically developed?", choices: ["Gradually, through details across the whole text", "Only in the very first sentence", "Only through the book's title", "It's never actually developed"], answer: 0, explain: "Theme unfolds through details and events throughout the text." },
      { q: "Which sentence is the MOST objective summary of a plot event?", choices: ["The main character decided to apologize after realizing his mistake.", "The main character finally did the right thing, which was so satisfying.", "I loved how the character apologized, it was perfect.", "The character's apology was definitely the best part."], answer: 0, explain: "This sentence states the plot fact without adding personal judgment." },
      { q: "Why might a theme be revealed gradually through details rather than stated once?", choices: ["Authors build meaning slowly through events, choices, and consequences", "Themes are usually only in the last line", "Details never relate to theme", "Themes are stated directly in every single book"], answer: 0, explain: "Complex texts develop theme across multiple moments, not just one line." },
      { q: "Which of these is too broad to be a useful theme statement (more like a topic)?", choices: ["Courage", "Facing your fears can reveal inner strength you didn't know you had", "Betrayal can permanently change relationships", "True leadership requires sacrifice"], answer: 0, explain: "'Courage' alone is just a topic word, not a complete theme statement." },
      { q: "A summary that says 'this was the best episode ever' instead of describing what happened is:", choices: ["Too opinion-based to be objective", "A perfect objective summary", "Exactly what a summary should include", "The same as describing the plot"], answer: 0, explain: "Opinions like 'best episode ever' don't belong in an objective summary." }
    ]
  },
  {
    day: 27, date: "2026-08-11", subject: "Science", levelLabel: "6th Grade Prep",
    standard: "MS-PS1", standardLabel: "Atoms & Molecules Intro",
    title: "Meet the Atom",
    hook: "Everything in the universe — including you, your phone, and your karate belt — is built from incredibly tiny building blocks called atoms!",
    teach: [
      "An atom is the smallest basic unit of matter that still has the properties of an element.",
      "Atoms are made of even smaller particles: protons and neutrons in the nucleus (center), and electrons moving around it.",
      "When two or more atoms bond together, they form a molecule, like two hydrogen atoms and one oxygen atom bonding to form water (H2O).",
      "Different elements have different types of atoms, and combining different elements' atoms can create entirely new substances with new properties.",
      "😂 Fun fact: you are made of roughly 7 octillion atoms, which means you're basically the world's most impressive teamwork project."
    ],
    example: { problem: "Water is made of hydrogen and oxygen. What is the correct way to describe water at the atomic level?", solution: "Water is a molecule made of 2 hydrogen atoms bonded to 1 oxygen atom (H2O)." },
    quiz: [
      { q: "What is an atom?", choices: ["The smallest basic unit of matter for an element", "A type of molecule only", "A large chunk of rock", "A kind of energy"], answer: 0, explain: "Atoms are the fundamental building blocks of elements." },
      { q: "What is found in the nucleus of an atom?", choices: ["Protons and neutrons", "Only electrons", "Only water", "Nothing at all"], answer: 0, explain: "The nucleus contains protons and neutrons; electrons orbit around it." },
      { q: "What is a molecule?", choices: ["Two or more atoms bonded together", "A single proton", "An empty space", "A type of rock"], answer: 0, explain: "Molecules form when atoms bond together." },
      { q: "Water (H2O) is made of which atoms?", choices: ["2 hydrogen atoms and 1 oxygen atom", "2 oxygen atoms and 1 hydrogen atom", "1 hydrogen atom only", "3 oxygen atoms"], answer: 0, explain: "H2O indicates 2 hydrogen atoms bonded with 1 oxygen atom." },
      { q: "Which particle in an atom has a negative charge?", choices: ["Electron", "Proton", "Neutron", "None of them have charge"], answer: 0, explain: "Electrons carry a negative charge and orbit the nucleus." },
      { q: "Carbon dioxide (CO2) is made of which atoms?", choices: ["1 carbon atom and 2 oxygen atoms", "2 carbon atoms and 1 oxygen atom", "1 carbon atom only", "2 oxygen atoms only"], answer: 0, explain: "CO2 means 1 carbon atom bonded to 2 oxygen atoms." },
      { q: "What makes one element different from another at the atomic level?", choices: ["The number of protons in the atom's nucleus", "The color of the atom", "The size of the molecule", "Whether it's a liquid or solid"], answer: 0, explain: "The number of protons (atomic number) defines which element an atom is." },
      { q: "Why can combining atoms of different elements create a substance with totally new properties?", choices: ["Bonded atoms form molecules with properties different from the original elements", "Combining atoms never changes anything", "Only identical atoms can bond", "Molecules always look the same as their atoms"], answer: 0, explain: "For example, hydrogen and oxygen gas combine to form water, with very different properties from either gas alone." }
    ]
  },
  {
    day: 28, date: "2026-08-12", subject: "Math", levelLabel: "6th Grade Prep",
    standard: "6.NS.B.2 / 6.NS.B.3", standardLabel: "Dividing Multi-Digit Numbers & Decimals",
    title: "Decimal Division Prep",
    hook: "6th grade takes division further — including numbers with decimal points, because math never stops leveling up!",
    teach: [
      "Dividing multi-digit whole numbers uses the same long division steps you already know: Divide, Multiply, Subtract, Bring down.",
      "To divide a decimal by a whole number, divide as usual and place the decimal point in the quotient directly above the decimal point in the dividend.",
      "To divide by a decimal, first multiply both the divisor and dividend by a power of 10 to make the divisor a whole number, then divide normally.",
      "Always double-check your decimal placement by estimating — the answer should make sense in size.",
      "😂 Fun fact: misplacing a decimal point is how a $5.00 item accidentally becomes a $500 item — always double-check your work!"
    ],
    example: { problem: "Solve 8.4 ÷ 0.4 (splitting a crew's treasure haul).", solution: "Multiply both numbers by 10 to clear the decimal in the divisor: 84 ÷ 4 = 21." },
    quiz: [
      { q: "What is 6.3 ÷ 3?", choices: ["2.1", "21", "0.21", "3.1"], answer: 0, explain: "Divide normally and keep the decimal point aligned: 6.3 ÷ 3 = 2.1." },
      { q: "To divide 5.6 ÷ 0.7, what's the first helpful step?", choices: ["Multiply both numbers by 10 to make 56 ÷ 7", "Divide as-is with decimals in place", "Add the two numbers instead", "Round both numbers to 0"], answer: 0, explain: "Multiplying both by 10 removes the decimal from the divisor, making division easier." },
      { q: "What is 56 ÷ 7 (used as a stepping stone to solve 5.6 ÷ 0.7)?", choices: ["8", "9", "7", "6"], answer: 0, explain: "56 ÷ 7 = 8, so 5.6 ÷ 0.7 = 8 as well." },
      { q: "What is 12.6 ÷ 6?", choices: ["2.1", "21", "0.21", "1.2"], answer: 0, explain: "12.6 ÷ 6 = 2.1, keeping the decimal aligned." },
      { q: "What is 9.6 ÷ 1.2?", choices: ["8", "0.8", "80", "0.08"], answer: 0, explain: "Multiply both by 10: 96 ÷ 12 = 8." },
      { q: "What is 45.5 ÷ 5?", choices: ["9.1", "0.91", "91", "9.01"], answer: 0, explain: "45.5 ÷ 5 = 9.1." },
      { q: "Estimate 19.8 ÷ 2 by rounding 19.8 to 20 first. What's a reasonable estimate?", choices: ["About 10", "About 100", "About 1", "About 40"], answer: 0, explain: "20 ÷ 2 = 10, a reasonable estimate for 19.8 ÷ 2." },
      { q: "What is 3.24 ÷ 0.6?", choices: ["5.4", "0.54", "54", "0.054"], answer: 0, explain: "Multiply both by 10: 32.4 ÷ 6 = 5.4." }
    ]
  },
  {
    day: 29, date: "2026-08-13", subject: "ELA", levelLabel: "6th Grade Prep",
    standard: "RI.6.2", standardLabel: "Central Idea vs. Opinion",
    title: "Central Idea, Not Opinion",
    hook: "6th grade ELA asks you to separate the author's central idea from any personal judgments — like being a fact-checking detective!",
    teach: [
      "The central idea is the main point an informational text conveys — similar to main idea, but you'll also analyze how it's conveyed through particular details.",
      "A summary of the central idea should be objective and distinct from personal opinions or judgments about the topic.",
      "Notice when an author includes their own opinion (using words like 'clearly' or 'unfortunately') versus stating a fact.",
      "A strong central idea summary traces how the idea develops and is supported throughout the whole text, not just one paragraph.",
      "😂 Fun fact: spotting sneaky opinion words like 'clearly' and 'obviously' hiding inside 'facts' is basically a superpower once you notice it."
    ],
    example: { problem: "Text: 'Martial arts training clearly benefits kids by building discipline and improving focus.' What's the central idea vs. the opinion-flavored word?", solution: "Central idea: Martial arts training benefits kids by building discipline and focus. The word 'clearly' adds a slight opinion/emphasis that isn't a neutral fact." },
    quiz: [
      { q: "The central idea of an informational text is:", choices: ["The main point the text conveys, supported by details", "The author's personal opinion only", "A single supporting detail", "The title of the article"], answer: 0, explain: "Central idea = main point, distinct from opinion." },
      { q: "Which word signals a personal opinion rather than a neutral fact?", choices: ["unfortunately", "reported", "measured", "recorded"], answer: 0, explain: "'Unfortunately' reflects a judgment/feeling, not a neutral fact." },
      { q: "A strong central idea summary should:", choices: ["Trace how the idea is developed and supported through the whole text", "Focus only on the first sentence", "Include the summarizer's own opinions", "Ignore supporting details entirely"], answer: 0, explain: "Central idea summaries should reflect the whole text's development of the idea." },
      { q: "Why is it important to separate central idea from opinion?", choices: ["To understand the text's actual point without bias creeping in", "Because opinions are illegal in writing", "Because central ideas don't really exist", "It isn't important at all"], answer: 0, explain: "Keeping fact and opinion separate leads to clearer understanding." },
      { q: "'Learning a second language obviously improves both memory and cultural understanding, according to numerous studies.' Which word signals opinion rather than pure fact?", choices: ["obviously", "language", "studies", "memory"], answer: 0, explain: "'Obviously' adds a judgment/assumption rather than stating a neutral fact." },
      { q: "Which sentence is the MOST neutral, fact-based statement?", choices: ["Studies show that regular practice is linked to skill improvement.", "Everyone knows practice is clearly the best thing you can do.", "Practice is obviously amazing for everyone.", "Skipping practice is clearly a huge mistake."], answer: 0, explain: "This states a fact based on studies without inserting a personal judgment." },
      { q: "How does a central idea summary differ from just copying the text's first sentence?", choices: ["It reflects how the idea develops with support across the WHOLE text", "It should be identical to the first sentence always", "It should include opinions the summarizer has", "There is no real difference"], answer: 0, explain: "A full central idea summary considers the whole text's development, not just the opener." },
      { q: "Which is an example of an author's opinion sneaking into an informational text?", choices: ["\"This is unquestionably the best training method.\"", "\"The study included 500 participants.\"", "\"Data was collected over six months.\"", "\"Results were published in a science journal.\""], answer: 0, explain: "'Unquestionably the best' is a judgment, not a neutral fact." }
    ]
  },
  {
    day: 30, date: "2026-08-14", subject: "Science", levelLabel: "6th Grade Prep",
    standard: "MS-ESS2", standardLabel: "Plate Tectonics & Rock Cycle Intro",
    title: "Earth's Shifting Plates",
    hook: "Earth's outer layer is broken into giant puzzle pieces that are constantly, slowly moving — talk about the world's slowest video game level. And yes, this is how real volcanic islands (like the ones your favorite pirate crews explore) actually form!",
    teach: [
      "Earth's outer shell is broken into large sections called tectonic plates, which float on the semi-molten layer beneath them and move very slowly over time.",
      "Where plates meet, they can collide (forming mountains), pull apart (creating new crust), or slide past each other (causing earthquakes).",
      "The rock cycle describes how rocks transform between three types — igneous (from cooled magma/lava), sedimentary (from compressed sediment), and metamorphic (changed by heat and pressure) — over long periods.",
      "Plate tectonics and the rock cycle are connected: for example, volcanic activity at plate boundaries creates igneous rock, which is exactly how many real volcanic islands form.",
      "😂 Fun fact: tectonic plates move about as fast as your fingernails grow — truly the world's most epic slow-motion battle."
    ],
    example: { problem: "Why do earthquakes often happen at the boundaries between tectonic plates?", solution: "Plates sliding past, colliding, or pulling apart from each other create tremendous stress and friction, which releases as an earthquake when the built-up energy suddenly shifts the rock." },
    quiz: [
      { q: "What are tectonic plates?", choices: ["Large sections of Earth's outer shell that slowly move", "Small rocks found in rivers", "Layers of the atmosphere", "Types of ocean currents"], answer: 0, explain: "Tectonic plates are massive moving sections of Earth's crust." },
      { q: "What happens when two tectonic plates collide?", choices: ["Mountains can form", "The plates disappear instantly", "Nothing happens at all", "The Earth stops spinning"], answer: 0, explain: "Colliding plates can push rock upward, forming mountain ranges." },
      { q: "Igneous rock forms from:", choices: ["Cooled magma or lava", "Compressed sediment layers", "Extreme heat and pressure on existing rock", "Living organisms"], answer: 0, explain: "Igneous rock is created when molten rock cools and solidifies." },
      { q: "What often causes earthquakes?", choices: ["Plates sliding past or colliding with each other", "Rain falling", "Trees growing", "Ocean tides only"], answer: 0, explain: "Stress at plate boundaries builds up and releases as earthquakes." },
      { q: "How do many real volcanic islands actually form?", choices: ["Volcanic activity at plate boundaries builds up igneous rock over time", "They float over from other continents", "They are always man-made", "They form instantly with no cause"], answer: 0, explain: "Repeated eruptions at plate boundaries build up rock until an island forms above the water." },
      { q: "Sedimentary rock forms from:", choices: ["Compressed layers of sediment over time", "Cooled lava only", "Sudden explosions", "Living plants only"], answer: 0, explain: "Sedimentary rock forms as layers of sediment compress and harden over time." },
      { q: "Metamorphic rock forms when existing rock is changed by:", choices: ["Extreme heat and pressure", "Simply sitting in water", "Being painted a new color", "Cooling from a liquid state"], answer: 0, explain: "Heat and pressure transform existing rock into metamorphic rock." },
      { q: "Why are earthquakes and volcanoes often found along the SAME plate boundaries?", choices: ["Both are caused by the movement and stress of tectonic plates", "They are completely unrelated phenomena", "Volcanoes cause plates to stop moving", "Earthquakes only happen in the ocean"], answer: 0, explain: "Plate boundary activity (collision, sliding, separating) can trigger both earthquakes and volcanic activity." }
    ]
  },
  {
    day: 31, date: "2026-08-15", subject: "Math", levelLabel: "6th Grade Prep",
    standard: "6.EE.A.2", standardLabel: "Expressions with Variables",
    title: "Meet the Variable",
    hook: "In 6th grade, letters start standing in for numbers — welcome to the world of algebraic expressions, math's ultimate mystery box!",
    teach: [
      "A variable is a letter (like x or n) that represents an unknown or changing number.",
      "An algebraic expression combines numbers, variables, and operations, like 3x + 5 (no equals sign, unlike an equation).",
      "To evaluate an expression, substitute a given number for the variable and then follow order of operations to simplify.",
      "Writing expressions from word phrases: 'five more than a number' becomes n + 5; 'three times a number' becomes 3n.",
      "😂 Fun fact: a variable is basically math's way of saying 'we'll figure out what this number actually is later.'"
    ],
    example: { problem: "Luca trains for a base of 4 hours per week, plus x extra hours before a tournament. Write and evaluate the expression if x = 3.", solution: "Expression: 4 + x. Substitute x=3: 4 + 3 = 7 hours." },
    quiz: [
      { q: "What is a variable?", choices: ["A letter representing an unknown or changing number", "Always the number 1", "A type of punctuation", "A fixed number that never changes"], answer: 0, explain: "Variables stand in for unknown or varying values." },
      { q: "Evaluate 2x + 5 when x = 6.", choices: ["17", "13", "11", "16"], answer: 0, explain: "2(6) + 5 = 12 + 5 = 17." },
      { q: "Which expression matches 'seven less than a number n'?", choices: ["n − 7", "7 − n", "n + 7", "7n"], answer: 0, explain: "'Less than' means subtracting from the number, so n − 7." },
      { q: "Evaluate 5(y − 2) when y = 4.", choices: ["10", "18", "20", "8"], answer: 0, explain: "5(4−2) = 5(2) = 10." },
      { q: "Which expression matches 'twice the number of katas, plus four warm-up moves'?", choices: ["2n + 4", "n + 4 + 4", "4n + 2", "2(n + 4)"], answer: 0, explain: "'Twice a number' means 2n, then 'plus four' adds 4: 2n + 4." },
      { q: "Evaluate 3x² when x = 2.", choices: ["12", "6", "9", "8"], answer: 0, explain: "3(2²) = 3(4) = 12." },
      { q: "A tournament gives you 10 starting points, plus 5 points per round won (n rounds). Which expression shows total points?", choices: ["10 + 5n", "10n + 5", "10 − 5n", "15n"], answer: 0, explain: "Starting 10 points plus 5 for each round (n) gives 10 + 5n." },
      { q: "Evaluate 4(x + 3) when x = 5.", choices: ["32", "23", "17", "12"], answer: 0, explain: "4(5+3) = 4(8) = 32." }
    ]
  },
  {
    day: 32, date: "2026-08-16", subject: "ELA", levelLabel: "6th Grade Prep",
    standard: "L.6.4 / L.6.5", standardLabel: "Denotation & Connotation",
    title: "The Feeling Behind Words",
    hook: "Words can have the same dictionary meaning but feel completely different — that's the secret power of connotation, word-choice sorcery at its finest!",
    teach: [
      "Denotation is a word's exact, literal dictionary definition.",
      "Connotation is the feeling or association a word carries beyond its literal meaning — positive, negative, or neutral.",
      "For example, 'thrifty' and 'stingy' both denote someone careful with money, but 'thrifty' has a positive connotation while 'stingy' has a negative one.",
      "Authors carefully choose words with specific connotations to influence how readers feel about a character, event, or idea.",
      "😂 Fun fact: calling a ship's captain 'bold' versus 'reckless' technically describes the same daring choice — but only one of them is getting a statue built in their honor."
    ],
    example: { problem: "Compare the connotations of 'childish' and 'youthful.'", solution: "Both relate to being young, but 'childish' has a negative connotation (immature), while 'youthful' has a positive connotation (energetic, fresh)." },
    quiz: [
      { q: "Denotation refers to:", choices: ["A word's literal dictionary meaning", "The feeling a word gives you", "A type of punctuation", "The opposite of a word"], answer: 0, explain: "Denotation is the exact, literal definition of a word." },
      { q: "Connotation refers to:", choices: ["The feeling or association a word carries", "The number of letters in a word", "The literal dictionary definition only", "A grammar rule"], answer: 0, explain: "Connotation is the emotional association beyond the literal meaning." },
      { q: "Which word has a more positive connotation than 'nosy'?", choices: ["curious", "snoopy", "prying", "meddling"], answer: 0, explain: "'Curious' implies the same behavior but with a positive spin." },
      { q: "Why might an author choose 'notorious' instead of 'famous'?", choices: ["To give a negative connotation to the person's fame", "Because they mean the exact same thing with no difference", "To confuse the reader on purpose", "Because 'notorious' is easier to spell"], answer: 0, explain: "'Notorious' implies fame for something bad, unlike neutral 'famous.'" },
      { q: "Which word pair has the SAME denotation but DIFFERENT connotation?", choices: ["Slender / Skinny", "Book / Car", "Run / Sleep", "Happy / Book"], answer: 0, explain: "Both mean 'thin,' but 'slender' sounds more positive than 'skinny.'" },
      { q: "'The determined fighter refused to give up' vs. 'The stubborn fighter refused to give up.' What's the difference?", choices: ["'Determined' has a positive connotation; 'stubborn' has a more negative one", "They mean completely different things", "There is no difference at all", "'Stubborn' is always more positive"], answer: 0, explain: "Both describe persistence, but the connotations differ — one positive, one more negative." },
      { q: "Which word has a NEGATIVE connotation for someone who saves money carefully?", choices: ["cheap", "thrifty", "frugal", "economical"], answer: 0, explain: "'Cheap' implies stinginess, unlike the more neutral/positive alternatives." },
      { q: "Why do authors deliberately choose words with strong connotations?", choices: ["To shape how readers feel about characters or events", "Because all words mean exactly the same thing", "Connotation has no effect on readers", "To make the text longer"], answer: 0, explain: "Word choice with connotation is a powerful tool to influence reader perception." }
    ]
  },
  {
    day: 33, date: "2026-08-17", subject: "Science", levelLabel: "6th Grade Prep",
    standard: "MS-LS1", standardLabel: "Cell Theory Intro",
    title: "The Building Blocks of Life",
    hook: "Zoom in far enough on any living thing, and you'll find the same basic unit: the cell — nature's smallest, busiest little factory.",
    teach: [
      "Cell theory states that all living things are made of one or more cells, and the cell is the basic unit of structure and function in living organisms.",
      "Some organisms (like bacteria) are unicellular, made of just one cell, while others (like humans) are multicellular, made of trillions of cells.",
      "All cells come from other pre-existing cells through cell division — cells don't just appear from nothing.",
      "Different types of cells (like muscle cells, nerve cells, or plant cells) are specialized to perform different jobs in an organism.",
      "😂 Fun fact: you started as a single cell and grew into trillions of them — technically, you're the most impressive glow-up in the history of glow-ups."
    ],
    example: { problem: "Is a single bacterium unicellular or multicellular, and what does that mean?", solution: "Unicellular — it is made of only one single cell that performs all the functions needed for life." },
    quiz: [
      { q: "According to cell theory, the cell is:", choices: ["The basic unit of structure and function in living things", "Only found in animals", "A type of rock", "Not related to living things"], answer: 0, explain: "Cell theory establishes the cell as life's fundamental unit." },
      { q: "An organism made of only one cell is called:", choices: ["Unicellular", "Multicellular", "Non-living", "A molecule"], answer: 0, explain: "'Uni-' means one, so unicellular means one-celled." },
      { q: "According to cell theory, where do new cells come from?", choices: ["Existing cells, through cell division", "They appear from nothing", "Only from non-living matter", "From sunlight directly"], answer: 0, explain: "Cells arise only from pre-existing cells dividing." },
      { q: "Why might a muscle cell look different from a nerve cell?", choices: ["Different cell types are specialized for different jobs", "All cells actually look identical", "Muscle cells aren't real cells", "Cells never have different shapes"], answer: 0, explain: "Cell specialization allows different structures suited to different functions." },
      { q: "A human body is made of trillions of cells. What term describes this kind of organism?", choices: ["Multicellular", "Unicellular", "Non-living", "Acellular"], answer: 0, explain: "'Multi-' means many, so multicellular means made of many cells." },
      { q: "Which of these is an example of cell specialization?", choices: ["A nerve cell being shaped to transmit signals quickly", "All cells in the body being exactly identical", "Cells having no particular jobs", "Cells only existing in plants"], answer: 0, explain: "Nerve cells have long, specialized shapes suited for signal transmission." },
      { q: "Why can't a new cell form from non-living matter, according to cell theory?", choices: ["Cells only come from other existing cells dividing", "Cells can form from rocks", "Cell theory says nothing about this", "Non-living matter always creates cells"], answer: 0, explain: "A core part of cell theory is that cells arise only from pre-existing cells." },
      { q: "Bacteria are described as unicellular organisms. What does this tell you about a single bacterium?", choices: ["It performs all necessary life functions using just one cell", "It has trillions of specialized cells", "It has no cells at all", "It cannot be considered alive"], answer: 0, explain: "Unicellular organisms handle everything needed for life within a single cell." }
    ]
  },
  {
    day: 34, date: "2026-08-18", subject: "Math", levelLabel: "6th Grade Prep",
    standard: "6.NS.C.6", standardLabel: "Negative Numbers & the Number Line",
    title: "Beyond Zero",
    hook: "Numbers don't stop at zero — welcome to the world of negative numbers, found all around you (like temperature, elevation, and how many belts away from black belt you are counting down)!",
    teach: [
      "Negative numbers are less than zero and are located to the left of zero on a horizontal number line (or below zero on a vertical one).",
      "The absolute value of a number is its distance from zero, always expressed as a positive number (or zero), like |-5| = 5.",
      "On a number line, numbers further to the right are always greater, even when comparing two negative numbers (e.g., -2 > -5).",
      "Real-world examples of negative numbers include temperatures below zero, elevations below sea level, and counting down belts remaining before black belt.",
      "😂 Fun fact: you just crushed all 34 days of Summer Training Academy — that number of completed quests is about as far from zero (in the good direction) as it gets, kind of like getting one belt closer to black belt!"
    ],
    example: { problem: "If Luca is 3 belts away from black belt, and Sid is 8 belts away, who is closer?", solution: "Luca is closer, since -3 is greater than -8 on a number line (closer to zero, or in this case, closer to the goal)." },
    quiz: [
      { q: "What is the absolute value of -7?", choices: ["7", "-7", "0", "14"], answer: 0, explain: "Absolute value is distance from zero, always positive: |-7| = 7." },
      { q: "Which number is greater: -4 or -1?", choices: ["-1", "-4", "They are equal", "Cannot be determined"], answer: 0, explain: "-1 is closer to zero (further right on the number line), so it's greater." },
      { q: "A temperature of -10°F compared to 5°F is:", choices: ["Colder (lower)", "Warmer (higher)", "The same temperature", "Impossible to compare"], answer: 0, explain: "Negative numbers represent values below zero, so -10°F is colder than 5°F." },
      { q: "An elevation of -50 feet means:", choices: ["50 feet below sea level", "50 feet above sea level", "50 feet underground only", "It is not a real elevation"], answer: 0, explain: "Negative elevation typically represents a location below sea level." },
      { q: "What is the absolute value of 0?", choices: ["0", "1", "-1", "Undefined"], answer: 0, explain: "Zero's distance from itself is 0." },
      { q: "Which list correctly orders numbers from LEAST to GREATEST?", choices: ["-9, -3, 0, 4", "4, 0, -3, -9", "-3, -9, 0, 4", "0, -9, -3, 4"], answer: 0, explain: "On a number line, -9 is furthest left (least), then -3, then 0, then 4 (greatest)." },
      { q: "If Luca is '-2 belts' away from black belt and Brandon is '-5 belts' away, who is closer to black belt?", choices: ["Luca (-2 is greater than -5)", "Brandon", "They are equally close", "Cannot be determined"], answer: 0, explain: "-2 is closer to zero than -5, so Luca is closer to his goal." },
      { q: "Which is TRUE about -20 and -2?", choices: ["-2 is greater than -20", "-20 is greater than -2", "They are equal", "Negative numbers can't be compared"], answer: 0, explain: "-2 is closer to zero than -20, so -2 is greater." }
    ]
  }
];
