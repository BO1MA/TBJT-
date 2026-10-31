const SAVE_KEY = "jagged_tongue_save";

const state = {
  stone: 0,
  lantern: 0,
  silence: 0
};

// 1. Boot sequence setup
const bootSequence = [
  "videos/boot_01_title_intro.mp4",
  "videos/boot_02_studio_intro.mp4"
];
let bootIndex = 0;

// 2. Main story video sequence map (Acts 1, 2, 3, and Endings)
const videoSequences = {
  intro: [
    "videos/intro_00_elian_awakening.mp4",
    "videos/intro_01_childhood_curse.mp4",
    "videos/intro_02_village_outcast.mp4",
    "videos/intro_03_cake_unveiling.mp4",
    "videos/intro_04_cake_crack_decision.mp4"
  ],

  // --- ACT 1: MARKET EVENT RESOLUTIONS ---
  scene1_stone: [
    "videos/scene1_stone_frame1.mp4",
    "videos/scene1_stone_frame2.mp4",
    "videos/scene1_stone_frame3.mp4",
    "videos/scene1_stone_shards_reaction.mp4"
  ],
  scene1_lantern: [
    "videos/scene1_lantern_frame1.mp4",
    "videos/scene1_lantern_frame2_alt_tray.mp4",
    "videos/scene1_lantern_frame3.mp4",
    "videos/scene1_lantern_frame4.mp4"
  ],
  scene1_silence: [
    "videos/scene1_silence_frame1.mp4",
    "videos/scene1_silence_frame2.mp4",
    "videos/scene1_silence_frame3.mp4",
    "videos/scene1_silence_frame4.mp4",
    "videos/silence_bridge_mine_entrance.mp4"
  ],

  // --- ACT 2: JOURNEY TO THE GREAT HALL ---
  scene2_stone: [
    "videos/scene2_stone_frame1.mp4",
    "videos/scene2_stone_frame2.mp4",
    "videos/scene2_stone_frame3.mp4",
    "videos/scene2_stone_frame4.mp4",
    "videos/scene2_stone_frame5.mp4",
    "videos/scene2_stone_frame6.mp4"
  ],
  scene2_lantern: [
    "videos/scene2_lantern_frame1.mp4",
    "videos/scene2_lantern_frame2.mp4",
    "videos/scene2_lantern_frame3.mp4",
    "videos/scene2_lantern_frame4.mp4",
    "videos/scene2_lantern_frame5.mp4"
  ],
  scene2_silence: [
    "videos/scene2_silence_frame1.mp4",
    "videos/scene2_silence_frame2.mp4",
    "videos/scene2_silence_frame3.mp4",
    "videos/scene2_silence_frame4.mp4",
    "videos/scene2_silence_frame5.mp4",
    "videos/scene2_silence_frame6.mp4",
    "videos/scene2_silence_frame7.mp4"
  ],

  // --- ACT 3: THE GREAT HALL CLIMAX ---
  scene3_stone: [
    "videos/scene3_stone_frame1.mp4",
    "videos/scene3_stone_frame2.mp4",
    "videos/scene3_stone_frame3.mp4",
    "videos/scene3_stone_frame4.mp4",
    "videos/scene3_stone_frame5.mp4",
    "videos/scene3_stone_frame6.mp4",
    "videos/scene3_stone_frame7.mp4",
    "videos/scene3_stone_frame8.mp4",
    "videos/scene3_stone_frame9.mp4",
    "videos/scene3_stone_frame10.mp4",
    "videos/scene3_stone_frame11.mp4"
  ],
  scene3_lantern: [
    "videos/scene3_lantern_frame1.mp4",
    "videos/scene3_lantern_frame2.mp4",
    "videos/scene3_lantern_frame3.mp4",
    "videos/scene3_lantern_frame4.mp4",
    "videos/scene3_lantern_frame5.mp4",
    "videos/scene3_lantern_frame6.mp4",
    "videos/scene3_lantern_frame7.mp4",
    "videos/scene3_lantern_frame8.mp4",
    "videos/scene3_lantern_frame9.mp4",
    "videos/scene3_lantern_frame10.mp4"
  ],
  scene3_silence: [
    "videos/scene3_silence_frame1.mp4",
    "videos/scene3_silence_frame2.mp4",
    "videos/scene3_silence_frame3.mp4",
    "videos/scene3_silence_frame4.mp4",
    "videos/scene3_silence_frame5.mp4",
    "videos/scene3_silence_frame6.mp4",
    "videos/scene3_silence_frame7.mp4"
  ],

  // --- FINAL EPILOGUES / TIMELINE CLOSURES ---
  ending_stone: [
    "videos/ending_stone_frame1.mp4",
    "videos/ending_stone_frame2.mp4",
    "videos/ending_stone_frame3.mp4",
    "videos/ending_stone_frame4.mp4",
    "videos/ending_stone_frame5.mp4",
    "videos/ending_stone_frame6.mp4",
    "videos/ending_stone_frame7.mp4",
    "videos/ending_stone_frame8.mp4",
    "videos/ending_stone_frame9.mp4",
    "videos/ending_stone_frame10.mp4",
    "videos/ending_stone_frame11.mp4",
    "videos/ending_stone_frame12.mp4",
    "videos/ending_stone_frame13.mp4"
  ],
  ending_lantern: [
    "videos/ending_lantern_frame1.mp4",
    "videos/ending_lantern_frame2.mp4",
    "videos/ending_lantern_frame3.mp4",
    "videos/ending_lantern_frame4.mp4",
    "videos/ending_lantern_frame5.mp4",
    "videos/ending_lantern_frame6.mp4"
  ],
  ending_silence: [
    "videos/ending_silence_frame1.mp4",
    "videos/ending_silence_frame2.mp4",
    "videos/ending_silence_frame3.mp4",
    "videos/ending_silence_frame3_b_snow_shiver.mp4",
    "videos/ending_silence_frame4.mp4"
  ]
};

// 3. Cinematic Subtitles Dictionary
const subtitlesData = {
  // ==================== INTRO ====================
  "intro_00_elian_awakening.mp4": [],
  "intro_01_childhood_curse.mp4": [
    { start: 1.0, end: 3.4, text: "I didn't see what people wished for." },
    { start: 3.6, end: 6.0, text: "I only saw what was." }
  ],
  "intro_02_village_outcast.mp4": [
    { start: 0.8, end: 2.8, text: "<span class='sub-shout'>Look at him! It's him!</span>" },
    { start: 3.0, end: 6.0, text: "<span class='sub-shout'>Get out!</span>" }
  ],
  "intro_03_cake_unveiling.mp4": [
    { start: 1.8, end: 5.0, text: "<span class='sub-elder'>Citizens! Witness the pinnacle of my career!</span>" },
    { start: 5.2, end: 8.5, text: "<span class='sub-elder'>Six months of sugar, sweat, and soul!</span>" }
  ],
  "intro_04_cake_crack_decision.mp4": [
    { start: 1.5, end: 4.8, text: "A sharp eye sees the crack before the crash..." },
    { start: 5.0, end: 8.8, text: "...but a wise heart knows how to mend it without a sound." }
  ],

  // ==================== ACT 1 ====================
  // --- scene1_stone ---
  "scene1_stone_frame1.mp4": [
    { start: 0.0, end: 3.5, text: "In the village of Oakhaven, every sound had its place." },
    { start: 3.8, end: 6.8, text: "The ring of the anvil, the song of the lark..." },
    { start: 7.0, end: 9.5, text: "...and the silence of Elian." }
  ],
  "scene1_stone_frame2.mp4": [
    { start: 0.0, end: 2.5, text: "Elian didn't speak often." },
    { start: 2.8, end: 5.0, text: "Not because he had nothing to say..." },
    { start: 5.2, end: 9.5, text: "...but because his words... well, they were different." }
  ],
  "scene1_stone_frame3.mp4": [
    { start: 0.0, end: 2.5, text: "<span class='sub-elder'>My work... destroyed!</span>" },
    { start: 2.8, end: 5.5, text: "<span class='sub-elder'>Your words are a heavy burden, Elian.</span>" },
    { start: 5.6, end: 9.5, text: "In Oakhaven, Elian's truth was felt as a weight... a shadow over their joy." }
  ],
  "scene1_stone_shards_reaction.mp4": [
    { start: 2.0, end: 4.5, text: "His voice didn't carry on the wind..." },
    { start: 4.8, end: 6.8, text: "...it cut through it." }
  ],

  // --- scene1_lantern ---
  "scene1_lantern_frame1.mp4": [
    { start: 0.8, end: 4.8, text: "Grace is the hand that steadies the world when it begins to tilt..." },
    { start: 5.5, end: 8.8, text: "...often before a single soul notices the lean." }
  ],
  "scene1_lantern_frame2_alt_tray.mp4": [
    { start: 0.8, end: 4.2, text: "Master Algenib, the honey layers are weeping at the south corner." },
    { start: 4.5, end: 8.8, text: "If you brace it now with the wooden tray, no one will ever know it bowed." }
  ],
  "scene1_lantern_frame3.mp4": [
    { start: 4.5, end: 9.0, text: "<span class='sub-elder'>Oh, stars... Thank you, lad. Just in time.</span>" }
  ],
  "scene1_lantern_frame4.mp4": [
    { start: 2.0, end: 5.0, text: "<span class='sub-narrator'>True strength requires no audience.</span>" },
    { start: 5.2, end: 9.0, text: "<span class='sub-narrator'>It finds its reward in the stability it leaves behind.</span>" }
  ],

  // --- scene1_silence ---
  "scene1_silence_frame1.mp4": [
    { start: 1.8, end: 5.5, text: "But the past is a gag that never loosens." }
  ],
  "scene1_silence_frame2.mp4": [
    { start: 0.0, end: 3.0, text: "He saw the fault lines before anyone else." },
    { start: 4.0, end: 5.2, text: "A simple tilt..." },
    { start: 5.4, end: 8.0, text: "A simple word could have fixed it." }
  ],
  "scene1_silence_frame3.mp4": [
    { start: 3.8, end: 7.5, text: "Safety is the heaviest burden a coward carries." }
  ],
  "scene1_silence_frame4.mp4": [
    { start: 0.5, end: 3.5, text: "<span class='sub-shout'>I can't be part of this anymore...</span>" }
  ],
  "silence_bridge_mine_entrance.mp4": [
    { start: 5.8, end: 7.8, text: "The wood remembers the weight." },
    { start: 8.0, end: 9.8, text: "Do you, Elian?" }
  ],

  // ==================== ACT 2 ====================
  // --- scene2_stone ---
  "scene2_stone_frame1.mp4": [
    { start: 0.0, end: 3.8, text: "The winter had teeth, and the Great Hall was its only cage." },
    { start: 4.0, end: 8.0, text: "But inside, a different kind of rot was festering." }
  ],
  "scene2_stone_frame2.mp4": [],
  "scene2_stone_frame3.mp4": [
    { start: 0.8, end: 3.5, text: "Elian heard what the others ignored." },
    { start: 3.8, end: 9.5, text: "The sound of a foundation failing under the weight of its own silence." }
  ],
  "scene2_stone_frame4.mp4": [
    { start: 0.8, end: 3.5, text: "<span class='sub-shout'>The beam! It's hollowed by rot!</span>" },
    { start: 3.8, end: 8.0, text: "<span class='sub-shout'>Can't you hear it? We must leave before the roof yields to the snow!</span>" }
  ],
  "scene2_stone_frame5.mp4": [
    { start: 0.8, end: 2.5, text: "<span class='sub-elder sub-shout'>Silence, boy!</span>" },
    { start: 2.8, end: 5.0, text: "<span class='sub-elder'>You bring ill omens when we need hope.</span>" },
    { start: 5.2, end: 9.5, text: "<span class='sub-elder'>Your tongue is as jagged as the ice outside, and just as cold!</span>" }
  ],
  "scene2_stone_frame6.mp4": [],

  // --- scene2_lantern ---
  "scene2_lantern_frame1.mp4": [
    { start: 1.0, end: 2.5, text: "<span class='sub-narrator'>Wisdom...</span>" },
    { start: 3.5, end: 9.0, text: "<span class='sub-narrator'>Wisdom hears the whisper of ruin before it becomes a roar.</span>" }
  ],
  "scene2_lantern_frame2.mp4": [
    { start: 3.0, end: 5.5, text: "<span class='sub-narrator'>Elder Orus, forgive my intrusion.</span>" },
    { start: 5.8, end: 8.8, text: "<span class='sub-narrator'>The hearth wind is shifting tonight.</span>" }
  ],
  "scene2_lantern_frame3.mp4": [
    { start: 0.0, end: 3.0, text: "The drafts are heavy in the center tonight." },
    { start: 3.5, end: 8.5, text: "Perhaps the families would find more warmth and comfort by the tapestries at the edges?" }
  ],
  "scene2_lantern_frame4.mp4": [],
  "scene2_lantern_frame5.mp4": [
    { start: 2.0, end: 4.5, text: "<span class='sub-elder'>We are warm, and we are whole.</span>" },
    { start: 4.8, end: 9.5, text: "<span class='sub-elder'>To lead is to guide others to safety... so gently they believe they chose the path themselves.</span>" }
  ],

  // --- scene2_silence ---
  "scene2_silence_frame1.mp4": [
    { start: 0.8, end: 2.8, text: "I don't think we can stop it." },
    { start: 3.0, end: 5.2, text: "What if it destroys everything?" },
    { start: 5.5, end: 8.5, text: "<span class='sub-shout'>There's no way out... We are trapped here!</span>" }
  ],
  "scene2_silence_frame2.mp4": [],
  "scene2_silence_frame3.mp4": [
    { start: 3.0, end: 5.0, text: "The cake was a warning." },
    { start: 5.2, end: 7.5, text: "The hall... the hall was the price." }
  ],
  "scene2_silence_frame4.mp4": [
    { start: 1.8, end: 4.2, text: "<span class='sub-elder sub-shout'>Everyone to the doors!</span>" },
    { start: 4.5, end: 7.5, text: "<span class='sub-elder sub-shout'>Move quickly! Move quickly!</span>" }
  ],
  "scene2_silence_frame5.mp4": [],
  "scene2_silence_frame6.mp4": [
    { start: 1.8, end: 4.8, text: "The light showed the truth. The wood was soft." },
    { start: 5.0, end: 7.0, text: "A child could have seen it." },
    { start: 7.2, end: 9.0, text: "A coward did." }
  ],
  "scene2_silence_frame7.mp4": [
    { start: 1.5, end: 6.0, text: "He chose the silence of the grave, before the bodies were even cold." }
  ],

  // ==================== ACT 3 ====================
  // --- scene3_stone ---
  "scene3_stone_frame1.mp4": [],
  "scene3_stone_frame2.mp4": [],
  "scene3_stone_frame3.mp4": [],
  "scene3_stone_frame4.mp4": [
    { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Look up, you blind fools! Your shelter is an open grave!</span>" },
    { start: 4.5, end: 9.5, text: "The heart of that oak is nothing but sawdust and termite rot!" }
  ],
  "scene3_stone_frame5.mp4": [
    { start: 0.0, end: 3.5, text: "<span class='sub-shout'>The physics do not care about your sanctuary!</span>" },
    { start: 4.0, end: 9.0, text: "<span class='sub-shout'>Clear the center hall or die beneath it!</span>" }
  ],
  "scene3_stone_frame6.mp4": [
    { start: 0.0, end: 4.5, text: "<span class='sub-elder'>You! The herald of ruin! You shattered the Baker's harvest!</span>" },
    { start: 5.0, end: 9.5, text: "<span class='sub-elder'>And now you dare vomit your dark omens into our only sanctuary?</span>" }
  ],
  "scene3_stone_frame7.mp4": [
    { start: 0.0, end: 4.0, text: "<span class='sub-elder sub-shout'>Seize the demon! Throw him into the blizzard!</span>" }
  ],
  "scene3_stone_frame8.mp4": [
    { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Get him! Don't let him escape!</span>" },
    { start: 4.5, end: 9.0, text: "<span class='sub-shout'>Make him pay! No mercy!</span>" }
  ],
  "scene3_stone_frame9.mp4": [],
  "scene3_stone_frame10.mp4": [],
  "scene3_stone_frame11.mp4": [],

  // --- scene3_lantern ---
  "scene3_lantern_frame1.mp4": [
    { start: 3.0, end: 9.0, text: "<span class='sub-narrator'>Truth is a blade... if held poorly, it cuts the wielder and the witness alike.</span>" }
  ],
  "scene3_lantern_frame2.mp4": [
    { start: 4.5, end: 7.0, text: "He saw the rot..." },
    { start: 7.1, end: 9.5, text: "He saw the end." }
  ],
  "scene3_lantern_frame3.mp4": [
    { start: 0.0, end: 5.5, text: "Elder, forgive the interruption, but the north wind is playing a cruel trick on the rafters tonight." },
    { start: 5.6, end: 9.0, text: "<span class='sub-elder'>The wind? Speak plainly, boy!</span>" }
  ],
  "scene3_lantern_frame4.mp4": [
    { start: 0.0, end: 4.5, text: "The northern draft is cutting down through the chimney seam..." },
    { start: 5.0, end: 9.5, text: "The families on the center benches are beginning to shiver." }
  ],
  "scene3_lantern_frame5.mp4": [
    { start: 0.0, end: 9.5, text: "If we shift all the center benches toward the outer wall hearths right now, we can keep every child warm until morning." }
  ],
  "scene3_lantern_frame6.mp4": [
    { start: 1.0, end: 4.5, text: "<span class='sub-elder'>You speak wisely, lad. Listen well!</span>" },
    { start: 4.6, end: 9.5, text: "<span class='sub-elder'>All benches are to clear the center aisle immediately!</span>" }
  ],
  "scene3_lantern_frame7.mp4": [
    { start: 4.0, end: 9.0, text: "<span class='sub-narrator'>Grace provides the space for the truth to land without breaking lives.</span>" }
  ],
  "scene3_lantern_frame8.mp4": [],
  "scene3_lantern_frame9.mp4": [],
  "scene3_lantern_frame10.mp4": [
    { start: 6.8, end: 9.8, text: "The truth didn't break them. It saved them." }
  ],

  // --- scene3_silence ---
  "scene3_silence_frame1.mp4": [
    { start: 0.0, end: 7.0, text: "The cold did not merely chill Elian's skin... It had entered his soul." }
  ],
  "scene3_silence_frame2.mp4": [
    { start: 0.0, end: 3.0, text: "They do not want the light." },
    { start: 5.0, end: 9.0, text: "Wake them, and they will tear you apart for interrupting their dream." }
  ],
  "scene3_silence_frame3.mp4": [
    { start: 0.0, end: 4.5, text: "His vision parsed reality with excruciating clarity..." },
    { start: 5.5, end: 9.5, text: "A hairline fracture. 400 heartbeats remaining." }
  ],
  "scene3_silence_frame4.mp4": [
    { start: 0.0, end: 5.0, text: "Fear has a way of silencing the boldest visual cues..." },
    { start: 5.5, end: 9.5, text: "Before a sound could escape, his voice was stolen." }
  ],
  "scene3_silence_frame5.mp4": [
    { start: 0.0, end: 4.5, text: "Why die for people who despise you?" },
    { start: 6.5, end: 9.5, text: "He turned his spine on the center aisle." }
  ],
  "scene3_silence_frame6.mp4": [
    { start: 0.0, end: 8.0, text: "500 heartbeats... 400... 300..." }
  ],
  "scene3_silence_frame7.mp4": [
    { start: 1.5, end: 6.0, text: "The ties that bind are never truly strong..." },
    { start: 6.5, end: 9.8, text: "Until nothing is left but the cold silence." }
  ],

  // ==================== ENDINGS ====================
  // --- ending_stone ---
  "ending_stone_frame1.mp4": [
    { start: 5.0, end: 8.5, text: "The weight of their silence finally broke the world." }
  ],
  "ending_stone_frame2.mp4": [
    { start: 3.0, end: 5.0, text: "The boy did not lie." },
    { start: 5.2, end: 9.2, text: "The truth was not a word, but a geometry of survival." }
  ],
  "ending_stone_frame3.mp4": [
    { start: 1.8, end: 4.0, text: "It showed them the way." },
    { start: 5.0, end: 7.0, text: "Not the way they wanted..." },
    { start: 7.5, end: 9.5, text: "...but the way that was." }
  ],
  "ending_stone_frame4.mp4": [],
  "ending_stone_frame5.mp4": [
    { start: 3.5, end: 5.2, text: "In the light of the truth..." },
    { start: 5.5, end: 9.5, text: "...they finally saw the boy they had cast into the dark." }
  ],
  "ending_stone_frame6.mp4": [
    { start: 1.0, end: 3.0, text: "<span class='sub-elder'>Forgive us.</span>" },
    { start: 5.0, end: 7.5, text: "The jagged tongue had cut them deep..." },
    { start: 7.8, end: 9.8, text: "...only so the healing could begin." }
  ],
  "ending_stone_frame7.mp4": [
    { start: 0.8, end: 2.8, text: "The mountain had gone silent." },
    { start: 3.0, end: 4.2, text: "The walls held." },
    { start: 4.5, end: 9.2, text: "But within the stillness of the great hall, a different kind of storm was settling in the boy's heart." }
  ],
  "ending_stone_frame8.mp4": [
    { start: 1.0, end: 4.8, text: "For years, Elian had used the truth like a blade." },
    { start: 5.2, end: 7.0, text: "He had been right, yes..." },
    { start: 7.2, end: 9.5, text: "...but he had been cruel." }
  ],
  "ending_stone_frame9.mp4": [
    { start: 4.8, end: 6.5, text: "I gave them the truth..." },
    { start: 7.0, end: 9.5, text: "...but I gave it to them as a wound." }
  ],
  "ending_stone_frame10.mp4": [
    { start: 0.2, end: 1.5, text: "He saw it then." },
    { start: 1.8, end: 5.0, text: "<span class='sub-narrator'>Truth without grace is just another way to break a person.</span>" },
    { start: 5.5, end: 9.5, text: "<span class='sub-narrator'>But truth held in kindness... that is a light that guides them home.</span>" }
  ],
  "ending_stone_frame11.mp4": [],
  "ending_stone_frame12.mp4": [
    { start: 0.2, end: 2.8, text: "<span class='sub-narrator'>Next time, I will lead with the light.</span>" },
    { start: 3.0, end: 5.2, text: "The boy with the jagged tongue was gone." },
    { start: 5.4, end: 9.5, text: "In his place sat a young man who finally understood the weight of his words." }
  ],
  "ending_stone_frame13.mp4": [
    { start: 3.8, end: 7.5, text: "And for the first time in Oakhaven, the truth didn't hurt..." },
    { start: 7.8, end: 9.5, text: "...it healed." }
  ],

  // --- ending_lantern ---
  "ending_lantern_frame1.mp4": [
    { start: 2.5, end: 4.2, text: "The truth did not break the house." },
    { start: 4.3, end: 7.2, text: "It only revealed where the house was already broken." }
  ],
  "ending_lantern_frame2.mp4": [
    { start: 1.5, end: 4.0, text: "In that moment, they saw not a harbinger of doom..." },
    { start: 4.1, end: 6.5, text: "...but a shepherd of the light." }
  ],
  "ending_lantern_frame3.mp4": [
    { start: 3.5, end: 5.5, text: "<span class='sub-elder'>You saved our lives, Elian.</span>" },
    { start: 5.6, end: 9.5, text: "<span class='sub-elder'>We were blind to the rot, but you gave us the eyes to see.</span>" }
  ],
  "ending_lantern_frame4.mp4": [],
  "ending_lantern_frame5.mp4": [
    { start: 0.5, end: 3.0, text: "<span class='sub-narrator'>Truth is a guiding star, not a blade.</span>" },
    { start: 3.1, end: 5.5, text: "<span class='sub-narrator'>When delivered with kindness, it does not cut...</span>" },
    { start: 5.6, end: 8.8, text: "<span class='sub-narrator'>...it illuminates the path home.</span>" }
  ],
  "ending_lantern_frame6.mp4": [
    { start: 1.0, end: 5.5, text: "And so, the lantern path led him exactly where he needed to be." },
    { start: 6.0, end: 9.2, text: "Not to a destination... but to a neighbor." }
  ],

  // --- ending_silence ---
  "ending_silence_frame1.mp4": [],
  "ending_silence_frame2.mp4": [
    { start: 0.8, end: 2.5, text: "He was safe." },
    { start: 2.6, end: 4.0, text: "He was whole." },
    { start: 4.2, end: 8.0, text: "He was cursed... He was cursed." }
  ],
  "ending_silence_frame3.mp4": [
    { start: 5.0, end: 8.5, text: "<span class='sub-shout'>I let the roof crush them...</span>" }
  ],
  "ending_silence_frame3_b_snow_shiver.mp4": [],
  "ending_silence_frame4.mp4": [
    { start: 4.0, end: 6.2, text: "The Silence path is a long one..." },
    { start: 6.3, end: 9.0, text: "...and Elian walks it alone." }
  ]
};

let activeSequence = null;
let activeSequenceName = null;
let activeSequenceIndex = 0;
let isGamePaused = false;
let isIntroActive = true;
let isEndingAnalysisActive = false;
let shouldShowLogAfterIntro = false;

const player = document.getElementById("fmv-player");
const loadingScreen = document.getElementById("loading-screen");
const mainMenu = document.getElementById("main-menu");
const btnContinue = document.getElementById("btn-continue");
const btnNewGame = document.getElementById("btn-new-game");
const btnSettings = document.getElementById("btn-settings");
const btnCredits = document.getElementById("btn-credits");
const dbhOverlay = document.getElementById("dbh-overlay");
const hudPrompt = document.getElementById("hud-prompt");
const nodesContainer = document.getElementById("nodes-container");
const timerBar = document.getElementById("timer-bar");
const subtitleBox = document.getElementById("subtitle-box");

// Pause & Settings elements
const pauseMenu = document.getElementById("pause-menu");
const btnPauseTrigger = document.getElementById("btn-pause-trigger");
const btnPauseResume = document.getElementById("btn-pause-resume");
const btnPauseSettings = document.getElementById("btn-pause-settings");
const btnPauseQuit = document.getElementById("btn-pause-quit");
const settingsMenu = document.getElementById("settings-menu");
const volumeSlider = document.getElementById("volume-slider");
const volumeValDisplay = document.getElementById("volume-val-display");
const muteToggle = document.getElementById("mute-toggle");
const subtitlesToggle = document.getElementById("subtitles-toggle");
const btnFullscreenToggle = document.getElementById("btn-fullscreen-toggle");
const platformTag = document.getElementById("platform-tag");
const desktopControls = document.getElementById("desktop-display-controls");
const webControls = document.getElementById("web-display-controls");
const displayButtons = document.querySelectorAll(".display-btn");
const btnSettingsClose = document.getElementById("btn-settings-close");
const creditsMenu = document.getElementById("credits-menu");
const btnCreditsClose = document.getElementById("btn-credits-close");
const quitTriggerBtn = document.getElementById("btn-quit") || document.getElementById("btn-desktop-quit");
const quitConfirmModal = document.getElementById("quit-confirm-modal");
const btnQuitCancel = document.getElementById("btn-quit-cancel");
const btnQuitConfirm = document.getElementById("btn-quit-confirm");
const btnVersionLog = document.getElementById("btn-version-log");
const updateLogModal = document.getElementById("update-log-modal");
const btnUpdateLogClose = document.getElementById("btn-update-log-close");
const webShutdownScreen = document.getElementById("web-shutdown-screen");
const btnRebootSession = document.getElementById("btn-reboot-session");
const gfxButtons = document.querySelectorAll(".quality-btn");
const audioProfileButtons = document.querySelectorAll(".audio-profile-btn");

const SETTINGS_KEY = "jagged_tongue_settings";
let gameSettings = {
  volume: 100,
  muted: false,
  subtitles: true,
  graphics: "cinematic",
  audioProfile: "atmos",
  displayMode: "fullscreen"
};

const isDesktopApp = Boolean(window.desktopAPI && window.desktopAPI.isDesktop);
const CURRENT_VERSION = "1.0.4";
const GITHUB_REPO = "BO1MA/TBJT";
const statusIndicator = document.getElementById("version-status-indicator");
const currentVersionDisplay = document.getElementById("current-version-display");
if (currentVersionDisplay) {
  currentVersionDisplay.textContent = `v${CURRENT_VERSION}`;
}

function parseVersion(value) {
  const match = String(value || "").replace(/^v/i, "").match(/^\d+(?:\.\d+){0,2}/);
  return match ? match[0].split(".").map(Number) : [0];
}

function compareVersions(left, right) {
  const a = parseVersion(left);
  const b = parseVersion(right);
  for (let index = 0; index < 3; index += 1) {
    if ((a[index] || 0) !== (b[index] || 0)) {
      return (a[index] || 0) - (b[index] || 0);
    }
  }
  return 0;
}

function setUpdateBadgeStatus(missedUpdatesCount) {
  if (!statusIndicator) return;
  statusIndicator.className = "status-indicator";
  if (missedUpdatesCount === 0) {
    statusIndicator.classList.add("status-green");
    statusIndicator.textContent = "✓";
    statusIndicator.title = "SYSTEM STATUS // UP TO DATE";
  } else if (missedUpdatesCount === 1) {
    statusIndicator.classList.add("status-yellow");
    statusIndicator.textContent = "!";
    statusIndicator.title = "UPDATE AVAILABLE // 1 BUILD BEHIND";
  } else {
    statusIndicator.classList.add("status-red");
    statusIndicator.textContent = "✕";
    statusIndicator.title = `OUTDATED // ${missedUpdatesCount} BUILDS BEHIND`;
  }
}

function checkVersionStatus() {
  const lastKnownVersion = localStorage.getItem("tbjt_last_run_version");
  if (lastKnownVersion && compareVersions(lastKnownVersion, CURRENT_VERSION) !== 0) {
    shouldShowLogAfterIntro = true;
  }
  localStorage.setItem("tbjt_last_run_version", CURRENT_VERSION);
}

function triggerPostIntroLog() {
  if (!shouldShowLogAfterIntro) return;
  shouldShowLogAfterIntro = false;
  window.setTimeout(() => {
    if (updateLogModal) updateLogModal.classList.add("active");
  }, 500);
}

async function checkGitHubReleases() {
  if (!navigator.onLine) return;
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases`);
    if (!response.ok) return;
    const releases = await response.json();
    const newerReleases = releases.filter(
      (release) => !release.draft && !release.prerelease && compareVersions(release.tag_name, CURRENT_VERSION) > 0
    );
    setUpdateBadgeStatus(newerReleases.length);
  } catch (error) {
    console.warn("GitHub release check was not available:", error);
  }
}

function handleUpdateStatus(data) {
  if (data.status === "available" || data.status === "downloading" || data.status === "ready") {
    setUpdateBadgeStatus(1);
    if (data.status === "ready") {
      window.setTimeout(openUpdateLog, 500);
    }
  } else if (data.status === "up-to-date") {
    setUpdateBadgeStatus(0);
  }
}

if (isDesktopApp && window.desktopAPI.onUpdateStatus) {
  window.desktopAPI.onUpdateStatus(handleUpdateStatus);
}

function hidePauseButton() {
  btnPauseTrigger.classList.remove("show-btn");
}

function showPauseButton() {
  btnPauseTrigger.classList.add("show-btn");
}

function setGraphicsProfile(profile) {
  const selectedProfile = profile === "performance" ? "performance" : "cinematic";
  gameSettings.graphics = selectedProfile;
  gfxButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.perf === selectedProfile);
  });
  document.body.classList.toggle("perf-mode", selectedProfile === "performance");
  saveSettings();
}

function loadSettings() {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      gameSettings = {
        ...gameSettings,
        volume: Number.isFinite(Number(parsed.volume)) ? Math.max(0, Math.min(100, Number(parsed.volume))) : gameSettings.volume,
        muted: Boolean(parsed.muted),
        subtitles: parsed.subtitles !== undefined ? Boolean(parsed.subtitles) : true,
        graphics: parsed.graphics === "performance" ? "performance" : "cinematic",
        audioProfile: parsed.audioProfile === "mono" ? "mono" : "atmos",
        displayMode: ["fullscreen", "borderless", "windowed"].includes(parsed.displayMode)
          ? parsed.displayMode
          : "fullscreen"
      };
    } catch (error) {
      localStorage.removeItem(SETTINGS_KEY);
    }
  }

  volumeSlider.value = String(gameSettings.volume);
  volumeValDisplay.textContent = `${gameSettings.volume}%`;
  muteToggle.checked = gameSettings.muted;
  if (subtitlesToggle) subtitlesToggle.checked = gameSettings.subtitles;
  player.volume = gameSettings.volume / 100;
  player.muted = gameSettings.muted;
  setGraphicsProfile(gameSettings.graphics);
  setAudioProfile(gameSettings.audioProfile);
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(gameSettings));
}

function applyDesktopDisplayMode(mode) {
  const selectedMode = ["fullscreen", "borderless", "windowed"].includes(mode) ? mode : "fullscreen";
  gameSettings.displayMode = selectedMode;

  displayButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === selectedMode);
  });

  if (isDesktopApp) {
    window.desktopAPI.setDisplayMode(selectedMode);
  }
  saveSettings();
}

function setupPlatformSettings() {
  if (isDesktopApp) {
    platformTag.textContent = "DESKTOP CLIENT // SYSTEM ACTIVE";
    desktopControls.style.display = "flex";
    webControls.style.display = "none";
    applyDesktopDisplayMode(gameSettings.displayMode);
  } else {
    platformTag.textContent = "WEB BROWSER // CLIENT";
    desktopControls.style.display = "none";
    webControls.style.display = "block";
  }
}

// ----------------- Mobile Landscape & Fullscreen Control -----------------
async function triggerMobileLandscapeFullscreen() {
  if (isDesktopApp) return;

  const docEl = document.documentElement;

  try {
    if (!document.fullscreenElement) {
      if (docEl.requestFullscreen) {
        await docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        await docEl.webkitRequestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        await docEl.msRequestFullscreen();
      }
    }
  } catch (err) {
    console.warn("Fullscreen request not allowed or cancelled:", err);
  }

  try {
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch (err) {
    console.warn("Screen orientation lock unavailable on this browser:", err);
  }
}

// ----------------- Web Audio Engine -----------------
let audioCtx = null;
let sourceNode = null;
let bassFilter = null;
let gainNode = null;
let splitterNode = null;
let mergerNode = null;
let isAudioInitialized = false;

function initAudioEngine() {
  if (isAudioInitialized) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  audioCtx = new AudioContext();
  sourceNode = audioCtx.createMediaElementSource(player);

  bassFilter = audioCtx.createBiquadFilter();
  bassFilter.type = "lowshelf";
  bassFilter.frequency.value = 160;
  bassFilter.gain.value = 4.5;

  gainNode = audioCtx.createGain();
  gainNode.gain.value = 1;

  splitterNode = audioCtx.createChannelSplitter(2);
  mergerNode = audioCtx.createChannelMerger(2);

  sourceNode.connect(bassFilter);
  bassFilter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  isAudioInitialized = true;
  setAudioProfile(gameSettings.audioProfile);
}

function setAudioProfile(mode) {
  const selectedMode = mode === "mono" ? "mono" : "atmos";
  gameSettings.audioProfile = selectedMode;

  audioProfileButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.audio === selectedMode);
  });

  if (!audioCtx || !bassFilter || !gainNode) {
    saveSettings();
    return;
  }

  try {
    bassFilter.disconnect();
    gainNode.disconnect();
    if (splitterNode) splitterNode.disconnect();
    if (mergerNode) mergerNode.disconnect();
  } catch (error) {
    console.warn("Audio graph reset failed:", error);
  }

  if (selectedMode === "mono") {
    bassFilter.connect(gainNode);
    gainNode.connect(splitterNode);
    splitterNode.connect(mergerNode, 0, 0);
    splitterNode.connect(mergerNode, 0, 1);
    splitterNode.connect(mergerNode, 1, 0);
    splitterNode.connect(mergerNode, 1, 1);
    mergerNode.connect(audioCtx.destination);
  } else {
    bassFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  }

  saveSettings();
}

function openSettings() {
  settingsMenu.classList.add("active");
  btnFullscreenToggle.textContent = document.fullscreenElement ? "DISABLE" : "ENABLE";
}

function closeSettings() {
  settingsMenu.classList.remove("active");
  saveSettings();
}

const psIcons = {
  stone: { symbol: "◈", class: "ps-stone" },
  lantern: { symbol: "✦", class: "ps-lantern" },
  silence: { symbol: "—", class: "ps-silence" }
};

let choiceHistory = [];

const personalityProfiles = {
  "stone-stone-stone": {
    id: "TYPE 01",
    title: "THE UNYIELDING PROMETHEUS",
    traits: ["Radical", "Absolute truth", "Confrontational"],
    desc: "You do not believe in compromise. You weigh the world in numbers and bare facts, even if everyone burns beneath them. You reject silence and softening the truth, preferring to be hated for honesty rather than loved for ignorance."
  },
  "stone-stone-lantern": {
    id: "TYPE 02",
    title: "THE REFORMED CRITIC",
    traits: ["Strict", "Self-correcting", "Mature realist"],
    desc: "You begin as a merciless storm exposing every flaw, but soon realize that tearing down illusions alone cannot protect people. You become more than a harsh critic: you become a guide toward safety."
  },
  "stone-stone-silence": {
    id: "TYPE 03",
    title: "THE EXHAUSTED CASSANDRA",
    traits: ["Exhausted", "Disillusioned", "Bitterly withdrawn"],
    desc: "You shouted the truth again and again, and no one listened. The world's indifference drove you to abandon them and swallow your voice. Some communities, you learned, choose their own end."
  },
  "stone-silence-stone": {
    id: "TYPE 04",
    title: "THE CALCULATED STRIKER",
    traits: ["Tactical", "Unpredictable", "Alert"],
    desc: "You ignite the truth, retreat into the shadows, and watch the reaction before striking again. You are not reckless; you measure every move and speak only when your words will leave a lasting scar."
  },
  "stone-silence-lantern": {
    id: "TYPE 05",
    title: "THE WOUNDED SAVIOR",
    traits: ["Cautious", "Deeply compassionate", "Mature"],
    desc: "The world's reaction wounded you into temporary retreat, but you never lost your humanity. You withdrew to heal, then returned quietly to save them without asking for recognition."
  },
  "stone-silence-silence": {
    id: "TYPE 06",
    title: "THE BROKEN ORACLE",
    traits: ["Broken", "Isolated", "Burned out"],
    desc: "You began believing that truth sets people free, but honesty cost your spirit too much. Every word became a wound until you buried your tongue and voice beneath the ice."
  },
  "stone-lantern-stone": {
    id: "TYPE 07",
    title: "THE PARADOXICAL REBEL",
    traits: ["Volatile", "Passionate", "Sharply honest"],
    desc: "You sway between mercy for humanity and fury at its blindness. You try to be warm, but cannot silence the truth when the moment demands a cry that cuts through apathy."
  },
  "stone-lantern-lantern": {
    id: "TYPE 08",
    title: "THE MARTYR BUILDER",
    traits: ["Builder", "Patient", "Nurturing"],
    desc: "After your first outburst, you learned that building is harder than destroying. You became a hidden hand that repairs the damage, carrying the weight of others' mistakes with philosophical patience."
  },
  "stone-lantern-silence": {
    id: "TYPE 09",
    title: "THE DISILLUSIONED GUARDIAN",
    traits: ["Resigned sage", "Detached", "Lonely"],
    desc: "You tried confrontation, then kindness and guidance, and finally saw the same result: ingratitude. You closed your door quietly, knowing you had given everything to those who refused salvation."
  },

  "lantern-stone-stone": {
    id: "TYPE 10",
    title: "THE PATIENT VOLCANO",
    traits: ["Patient until provoked", "Decisive", "Severe"],
    desc: "You begin endlessly tolerant and diplomatic, but when disorder goes too far, your patience erupts like a volcano. Mercy is not weakness; when withdrawn, its consequences are devastating."
  },
  "lantern-stone-lantern": {
    id: "TYPE 11",
    title: "THE CHESSMASTER",
    traits: ["Flexible", "Strategic", "Precise"],
    desc: "You balance gentleness and firmness with skill. You know when to offer comfort and when to shout a warning, protecting people from themselves with minimal loss."
  },
  "lantern-stone-silence": {
    id: "TYPE 12",
    title: "THE PRAGMATIC GHOST",
    traits: ["Practical", "Unflappable", "Self-contained"],
    desc: "You tried to repair things with kindness, confronted danger when necessary, and left calmly when the ship began to sink, certain you had fulfilled your moral duty."
  },
  "lantern-lantern-stone": {
    id: "TYPE 13",
    title: "THE CORNERED SHEPHERD",
    traits: ["Loyal", "Late courage", "Steadfast"],
    desc: "A patient shepherd who prefers peace and quiet protection, you become a fierce defender when the flock is cornered and danger draws near."
  },
  "lantern-lantern-lantern": {
    id: "TYPE 14",
    title: "THE EMBODIMENT OF GRACE",
    traits: ["Pure-hearted", "Selfless", "Warm flame"],
    desc: "You are the lantern that never dies in the frost. You choose forgiveness, repair, and sacrifice at every turn, trusting love as the only cure for a broken world."
  },
  "lantern-lantern-silence": {
    id: "TYPE 15",
    title: "THE QUIET SHADOW",
    traits: ["Hidden kindness", "Humble", "Distant"],
    desc: "You give your warmth without letting anyone see you. You prefer their survival to remain a quiet mystery, retreating satisfied that you saved at least one life."
  },
  "lantern-silence-stone": {
    id: "TYPE 16",
    title: "THE SHIELD IN THE DARK",
    traits: ["Cautious observer", "Decisive when needed", "Devoted"],
    desc: "You act with compassion, then watch from a careful distance. When disaster threatens everyone, you step from the shadows and place their safety above your own."
  },
  "lantern-silence-lantern": {
    id: "TYPE 17",
    title: "THE PERSISTENT HEALER",
    traits: ["Patient", "Adaptable", "Empathetic"],
    desc: "When kindness is met with rejection or suspicion, you withdraw without resentment, waiting for another moment to help in a way that protects their safety and dignity."
  },
  "lantern-silence-silence": {
    id: "TYPE 18",
    title: "THE SOLITARY MONK",
    traits: ["Ascetic", "Detached", "Serene"],
    desc: "You began seeking inner repair, then realized this world needs silence and stillness more than words. You chose inner peace and noble isolation over human conflict."
  },

  "silence-stone-stone": {
    id: "TYPE 19",
    title: "THE AWAKENED SLEEPER",
    traits: ["Transformed", "Courage after silence", "Sudden"],
    desc: "You began withdrawn to protect yourself, but shock shook away your fear and released one decisive cry of truth. Your first silence was not cowardice, but courage gathering pressure."
  },
  "silence-stone-lantern": {
    id: "TYPE 20",
    title: "THE AWAKENED REPAIRER",
    traits: ["Quick learner", "Brave", "Humanistic"],
    desc: "You overcame your first fear of cruelty and chose to help save what could be saved with wisdom and mercy."
  },
  "silence-stone-silence": {
    id: "TYPE 21",
    title: "THE FLASH IN THE STORM",
    traits: ["Hesitant", "Overcautious", "Unsteady"],
    desc: "You tried courage for a moment, then fear pulled you back into your shell. The struggle between conscience and survival keeps you in perpetual unease."
  },
  "silence-lantern-stone": {
    id: "TYPE 22",
    title: "THE RELUCTANT DEFENDER",
    traits: ["Responsible despite fear", "Realistic", "Resilient"],
    desc: "You did not want to intervene, but conscience cornered you step by step until you stood at the front line against the collapse."
  },
  "silence-lantern-lantern": {
    id: "TYPE 23",
    title: "THE GENTLE SHADOW",
    traits: ["Peaceful", "Secret benefactor", "Survivor"],
    desc: "You chose a quiet survival. When the chance came to help unseen, you gave everything you could and disappeared once more."
  },
  "silence-lantern-silence": {
    id: "TYPE 24",
    title: "THE SPECTATOR OF FATE",
    traits: ["Observer", "Passive empath", "Cautious"],
    desc: "You witness the world's tragedies with a wounded heart, reaching out carefully to alter the course before retreating to your safe corner."
  },
  "silence-silence-stone": {
    id: "TYPE 25",
    title: "THE FINAL REBELLION",
    traits: ["Late resister", "Rebel", "Explosive"],
    desc: "You endured in silence until the bow could bend no further. When danger peaked, you broke your silence with an irreversible final cry."
  },
  "silence-silence-lantern": {
    id: "TYPE 26",
    title: "THE SECRET BREADCRUMB",
    traits: ["Hidden", "Conscientious survivor", "Wise"],
    desc: "You chose to stay alive and unseen, but left a small flame in the darkness for anyone who still wanted to find safety."
  },
  "silence-silence-silence": {
    id: "TYPE 27",
    title: "THE ICE MONOLITH",
    traits: ["Absolute survival", "Completely withdrawn", "Fortified"],
    desc: "You chose absolute silence at every turn. Your inner world is a fortress untouched by human noise; you would rather live alone than offer your voice to a world that hates the honest."
  }
};

function getPersonalityResult(history) {
  const k1 = history[0] || "silence";
  const k2 = history[1] || "silence";
  const k3 = history[2] || "silence";
  const key = `${k1}-${k2}-${k3}`;

  return {
    keyDisplay: `${k1.toUpperCase()} // ${k2.toUpperCase()} // ${k3.toUpperCase()}`,
    data: personalityProfiles[key] || personalityProfiles["silence-silence-silence"]
  };
}

// 4. Multi-Tier Decision System (3 Interactive Choice Nodes)
const dbhDecisions = {
  cake_event: {
    prompt: "STRUCTURAL FRACTURE IMMINENT // THE CAKE",
    choices: [
      {
        tag: "CONFRONT [STONE]",
        text: "Expose the collapse.",
        type: "stone",
        nextNode: "journey_event"
      },
      {
        tag: "MERCY [LANTERN]",
        text: "Mend it quietly.",
        type: "lantern",
        nextNode: "journey_event"
      },
      {
        tag: "SILENCE [FROST]",
        text: "Fade into shadows.",
        type: "silence",
        nextNode: "journey_event"
      }
    ]
  },
  journey_event: {
    prompt: "MORAL STRAIN // ENTERING THE SANCTUARY",
    choices: [
      {
        tag: "HARDEN [STONE]",
        text: "Prepare the bitter blow.",
        type: "stone",
        nextNode: "hall_event"
      },
      {
        tag: "CARRY [LANTERN]",
        text: "Hold the fragile light.",
        type: "lantern",
        nextNode: "hall_event"
      },
      {
        tag: "SHRINK [SILENCE]",
        text: "Withdraw your warmth.",
        type: "silence",
        nextNode: "hall_event"
      }
    ]
  },
  hall_event: {
    prompt: "CEILING TIMBER COLLAPSE // THE GREAT HALL",
    choices: [
      {
        tag: "DEFIANCE [STONE]",
        text: "Scream the fall.",
        type: "stone",
        isFinal: true
      },
      {
        tag: "GUIDE [LANTERN]",
        text: "Lead them to light.",
        type: "lantern",
        isFinal: true
      },
      {
        tag: "ENDURE [SILENCE]",
        text: "Bury your voice.",
        type: "silence",
        isFinal: true
      }
    ]
  }
};

// ----------------- Save and load system -----------------
function saveProgressFrame(data) {
  const currentSave = {
    inProgress: true,
    isCompleted: false,
    scores: { ...state },
    sequenceName: data.sequenceName || null,
    frameIndex: data.frameIndex !== undefined ? data.frameIndex : 0,
    currentTime: data.currentTime !== undefined ? data.currentTime : 0,
    isAtDecision: data.isAtDecision || false,
    decisionKey: data.decisionKey || null,
    lastFrameBeforeDecision: data.lastFrameBeforeDecision || null,
    choiceHistory: [...choiceHistory]
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(currentSave));
  updateContinueButtonVisibility();
}

function getSavedGame() {
  const rawSave = localStorage.getItem(SAVE_KEY);
  if (!rawSave) return null;
  try {
    const saved = JSON.parse(rawSave);
    if (!saved || !saved.inProgress || saved.isCompleted) {
      localStorage.removeItem(SAVE_KEY);
      return null;
    }
    return saved;
  } catch (error) {
    localStorage.removeItem(SAVE_KEY);
    return null;
  }
}

function updateContinueButtonVisibility() {
  btnContinue.hidden = !getSavedGame();
}

function completeGameSession() {
  localStorage.removeItem(SAVE_KEY);
  updateContinueButtonVisibility();
}

function saveCurrentState() {
  if (dbhOverlay.classList.contains("active")) return;
  if (activeSequence && activeSequenceName) {
    saveProgressFrame({
      sequenceName: activeSequenceName,
      frameIndex: activeSequenceIndex,
      currentTime: player.currentTime,
      isAtDecision: false
    });
  }
}

// ----------------- Main menu and pause flow -----------------
function showMainMenu() {
  hidePauseButton();
  if (subtitleBox) subtitleBox.classList.remove("show");
  isEndingAnalysisActive = false;
  loadingScreen.classList.remove("active");
  dbhOverlay.classList.remove("active");
  pauseMenu.classList.remove("active");
  updateContinueButtonVisibility();
  mainMenu.classList.add("active");

  player.src = "videos/boot_03_menu_background.mp4";
  player.loop = true;
  player.muted = true;
  player.play().catch(() => {
    window.addEventListener("click", () => player.play(), { once: true });
  });

  triggerPostIntroLog();
}

function togglePauseGame() {
  if (mainMenu.classList.contains("active") || loadingScreen.classList.contains("active")) {
    return;
  }

  isGamePaused = !isGamePaused;

  if (isGamePaused) {
    let targetIndex = activeSequenceIndex;
    if (player.duration && (player.duration - player.currentTime <= 1.0 || player.currentTime / player.duration > 0.9)) {
      targetIndex = activeSequenceIndex + 1;
    }

    if (activeSequence && !dbhOverlay.classList.contains("active")) {
      saveProgressFrame({
        sequenceName: activeSequenceName,
        frameIndex: Math.min(targetIndex, activeSequence.length - 1),
        isAtDecision: false
      });
    }

    player.pause();
    pauseMenu.classList.add("active");
    if (timerBar && timerBar.classList.contains("running")) {
      timerBar.style.animationPlayState = "paused";
    }
  } else {
    pauseMenu.classList.remove("active");
    if (timerBar && timerBar.classList.contains("running")) {
      timerBar.style.animationPlayState = "running";
    }
    if (!dbhOverlay.classList.contains("active")) {
      player.play().catch((e) => console.warn(e));
    }
  }
}

btnPauseTrigger.addEventListener("click", togglePauseGame);
btnPauseResume.addEventListener("click", togglePauseGame);
btnPauseSettings.addEventListener("click", openSettings);
btnPauseQuit.addEventListener("click", () => {
  isGamePaused = false;
  pauseMenu.classList.remove("active");
  if (timerBar) {
    timerBar.classList.remove("running");
    timerBar.style.animationPlayState = "running";
  }
  showMainMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && settingsMenu.classList.contains("active")) {
    closeSettings();
    return;
  }
  if (e.key === "Escape" && creditsMenu.classList.contains("active")) {
    closeCredits();
    return;
  }
  if (e.key === "Escape" && updateLogModal.classList.contains("active")) {
    closeUpdateLog();
    return;
  }
  if (e.key === "Escape" && quitConfirmModal.classList.contains("active")) {
    quitConfirmModal.classList.remove("active");
    return;
  }

  if (e.key !== "Escape" && e.code !== "Escape") return;

  if (
    isIntroActive ||
    isEndingAnalysisActive ||
    mainMenu.classList.contains("active") ||
    loadingScreen.classList.contains("active")
  ) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  e.preventDefault();
  togglePauseGame();
});

volumeSlider.addEventListener("input", (event) => {
  gameSettings.volume = Number(event.target.value);
  volumeValDisplay.textContent = `${gameSettings.volume}%`;
  player.volume = gameSettings.volume / 100;
  if (gameSettings.volume > 0 && muteToggle.checked) {
    muteToggle.checked = false;
    gameSettings.muted = false;
    player.muted = false;
  }
  saveSettings();
});

muteToggle.addEventListener("change", (event) => {
  gameSettings.muted = event.target.checked;
  player.muted = gameSettings.muted;
  saveSettings();
});

if (subtitlesToggle) {
  subtitlesToggle.addEventListener("change", (event) => {
    gameSettings.subtitles = event.target.checked;
    if (!gameSettings.subtitles && subtitleBox) {
      subtitleBox.classList.remove("show");
    }
    saveSettings();
  });
}

btnFullscreenToggle.addEventListener("click", async () => {
  if (isDesktopApp) return;
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
    btnFullscreenToggle.textContent = document.fullscreenElement ? "DISABLE" : "ENABLE";
  } catch (error) {
    console.warn("Fullscreen change was not available:", error);
  }
});

document.addEventListener("fullscreenchange", () => {
  btnFullscreenToggle.textContent = document.fullscreenElement ? "DISABLE" : "ENABLE";
});

btnSettingsClose.addEventListener("click", closeSettings);

function openCredits() {
  creditsMenu.classList.add("active");
}
function closeCredits() {
  creditsMenu.classList.remove("active");
}
btnCredits.addEventListener("click", openCredits);
btnCreditsClose.addEventListener("click", closeCredits);

function openUpdateLog() {
  updateLogModal.classList.add("active");
}
function closeUpdateLog() {
  updateLogModal.classList.remove("active");
}

if (quitTriggerBtn) {
  quitTriggerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    quitConfirmModal.classList.add("active");
  });
}

btnQuitCancel.addEventListener("click", () => {
  quitConfirmModal.classList.remove("active");
});

btnQuitConfirm.addEventListener("click", () => {
  quitConfirmModal.classList.remove("active");
  saveCurrentState();

  if (isDesktopApp) {
    window.desktopAPI.quitApp();
    return;
  }

  window.close();
  window.setTimeout(() => {
    player.pause();
    mainMenu.classList.remove("active");
    settingsMenu.classList.remove("active");
    creditsMenu.classList.remove("active");
    updateLogModal.classList.remove("active");
    webShutdownScreen.classList.add("active");
  }, 100);
});

btnVersionLog.addEventListener("click", openUpdateLog);
btnVersionLog.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openUpdateLog();
  }
});
btnUpdateLogClose.addEventListener("click", closeUpdateLog);
btnRebootSession.addEventListener("click", () => {
  webShutdownScreen.classList.remove("active");
  showMainMenu();
});

gfxButtons.forEach((button) => {
  button.addEventListener("click", () => setGraphicsProfile(button.dataset.perf));
});

audioProfileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    setAudioProfile(button.dataset.audio);
  });
});

window.addEventListener(
  "pointerdown",
  () => {
    initAudioEngine();
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  },
  { once: true }
);

// ----------------- Video Sequence Playback & Subtitle Hook -----------------
function playBootSequence() {
  loadingScreen.classList.remove("active");
  hidePauseButton();

  if (bootIndex < bootSequence.length) {
    player.loop = false;
    player.src = bootSequence[bootIndex];
    bootIndex++;
    player.play().catch(() => {
      player.muted = true;
      player.play().catch((e) => console.error(e));
    });
    player.onended = () => playBootSequence();
  } else {
    player.onended = null;
    showMainMenu();
  }
}

function playSequence(sequenceName, onComplete, startFrameIndex = 0) {
  const sequence = videoSequences[sequenceName];
  if (!sequence || sequence.length === 0) {
    if (onComplete) onComplete();
    return;
  }

  player.loop = false;
  activeSequence = sequence;
  activeSequenceName = sequenceName;
  activeSequenceIndex = Math.max(0, Math.min(startFrameIndex, sequence.length - 1));

  player.onended = () => {
    activeSequenceIndex += 1;
    if (activeSequenceIndex < activeSequence.length) {
      loadAndPlaySequenceClip(sequenceName, onComplete);
    } else {
      activeSequence = null;
      activeSequenceName = null;
      player.onended = null;
      if (subtitleBox) subtitleBox.classList.remove("show");
      if (onComplete) onComplete();
    }
  };

  loadAndPlaySequenceClip(sequenceName, onComplete);
}

function loadAndPlaySequenceClip(sequenceName, onComplete) {
  if (subtitleBox) subtitleBox.classList.remove("show");

  if (!sequenceName.startsWith("ending_")) {
    saveProgressFrame({
      sequenceName: sequenceName,
      frameIndex: activeSequenceIndex,
      isAtDecision: false
    });
  }

  const source = activeSequence[activeSequenceIndex];
  player.src = source;
  player.currentTime = 0;
  player.play().catch((error) => {
    console.warn(`Autoplay audio issue, playing muted:`, error);
    player.muted = true;
    player.play().catch((err) => console.error("Error playing:", err));
  });
}

// ----------------- Real-time Subtitles Sync -----------------
player.addEventListener("timeupdate", () => {
  if (!gameSettings.subtitles || !activeSequence || !activeSequenceName || !subtitleBox) {
    if (subtitleBox) subtitleBox.classList.remove("show");
    return;
  }

  const currentSrc = activeSequence[activeSequenceIndex] || "";
  const filename = currentSrc.split("/").pop();
  const cues = subtitlesData[filename];

  if (!cues || cues.length === 0) {
    subtitleBox.classList.remove("show");
    return;
  }

  const currentTime = player.currentTime;
  const currentCue = cues.find((c) => currentTime >= c.start && currentTime <= c.end);

  if (currentCue) {
    subtitleBox.innerHTML = currentCue.text;
    subtitleBox.classList.add("show");
  } else {
    subtitleBox.classList.remove("show");
  }
});

// ----------------- Decision HUD Nodes -----------------
function displayDBHChoice(nodeKey, previousSequenceName = null) {
  const nodeData = dbhDecisions[nodeKey];
  if (!nodeData) return;

  if (subtitleBox) subtitleBox.classList.remove("show");

  if (nodeKey === "cake_event") {
    isIntroActive = false;
  }

  let lastClip = null;
  if (previousSequenceName && videoSequences[previousSequenceName]) {
    const list = videoSequences[previousSequenceName];
    lastClip = list[list.length - 1];
  }

  saveProgressFrame({
    isAtDecision: true,
    decisionKey: nodeKey,
    sequenceName: previousSequenceName,
    frameIndex: previousSequenceName && videoSequences[previousSequenceName]
      ? videoSequences[previousSequenceName].length - 1
      : 0,
    currentTime: 0,
    lastFrameBeforeDecision: lastClip
  });

  hudPrompt.textContent = nodeData.prompt;
  nodesContainer.replaceChildren();

  if (timerBar) {
    timerBar.classList.remove("running");
    timerBar.style.animationPlayState = "running";
    void timerBar.offsetWidth;
    timerBar.classList.add("running");
  }

  nodeData.choices.forEach((choice) => {
    const card = document.createElement("button");
    card.className = "dbh-choice-node";
    card.type = "button";

    const iconData = psIcons[choice.type] || { symbol: "✖", class: "ps-cross" };
    const btnIcon = document.createElement("div");
    btnIcon.className = `ps-icon ${iconData.class}`;
    btnIcon.textContent = iconData.symbol;

    const textWrapper = document.createElement("div");
    textWrapper.className = "node-desc-wrapper";

    const tag = document.createElement("span");
    tag.className = "node-action-type";
    tag.textContent = choice.tag;

    const description = document.createElement("span");
    description.className = "node-desc";
    description.textContent = choice.text;

    textWrapper.append(tag, description);
    card.append(btnIcon, textWrapper);

    card.addEventListener("click", () => {
      dbhOverlay.classList.remove("active");
      state[choice.type] += 1;
      choiceHistory.push(choice.type);
      player.muted = false;

      let nextSeqKey;
      if (nodeKey === "cake_event") {
        nextSeqKey = `scene1_${choice.type}`;
      } else if (nodeKey === "journey_event") {
        nextSeqKey = `scene2_${choice.type}`;
      } else {
        nextSeqKey = `scene3_${choice.type}`;
      }

      saveProgressFrame({
        sequenceName: nextSeqKey,
        frameIndex: 0,
        isAtDecision: false
      });

      playSequence(nextSeqKey, () => {
        if (choice.isFinal) {
          resolveDBHEnding();
        } else {
          displayDBHChoice(choice.nextNode, nextSeqKey);
        }
      });
    });

    nodesContainer.appendChild(card);
  });

  dbhOverlay.classList.add("active");
}

function resolveDBHEnding() {
  isEndingAnalysisActive = false;

  let endingType = "stone";
  if (state.lantern >= 2 || (state.lantern >= 1 && state.lantern >= state.stone)) {
    endingType = "lantern";
  } else if (state.silence >= 2) {
    endingType = "silence";
  }

  playSequence(`ending_${endingType}`, () => {
    isEndingAnalysisActive = true;
    completeGameSession();
    hidePauseButton();

    const personality = getPersonalityResult(choiceHistory);
    hudPrompt.textContent = "TIMELINE TERMINATED // ANALYSIS COMPLETE";
    nodesContainer.replaceChildren();

    if (timerBar) timerBar.classList.remove("running");

    const card = document.createElement("div");
    card.className = "personality-card";
    card.innerHTML = `
      <div class="matrix-header">
        <div>
          <span class="matrix-tag">PSYCHOLOGICAL MATRIX EVALUATION</span>
          <h3 class="matrix-title">${personality.data.id}: ${personality.data.title}</h3>
        </div>
        <div class="matrix-path">${personality.keyDisplay}</div>
      </div>
      <p class="matrix-desc">${personality.data.desc}</p>
      <div class="matrix-traits">
        ${personality.data.traits.map((trait) => `<span class="trait-badge">${trait}</span>`).join("")}
      </div>
    `;

    const returnButton = document.createElement("button");
    returnButton.className = "dbh-choice-node";
    returnButton.type = "button";

    const btnIcon = document.createElement("div");
    btnIcon.className = "ps-icon ps-cross";
    btnIcon.textContent = "✖";

    const textWrapper = document.createElement("div");
    textWrapper.className = "node-desc-wrapper";

    const tag = document.createElement("span");
    tag.className = "node-action-type";
    tag.textContent = "MAIN MENU";

    const description = document.createElement("span");
    description.className = "node-desc";
    description.textContent = "Return to Title Screen";

    textWrapper.append(tag, description);
    returnButton.append(btnIcon, textWrapper);

    returnButton.addEventListener("click", () => {
      completeGameSession();
      choiceHistory = [];
      showMainMenu();
    });

    card.appendChild(returnButton);
    nodesContainer.appendChild(card);
    dbhOverlay.classList.add("active");
  });
}

// ----------------- Startup and Navigation Controls -----------------
window.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => playBootSequence(), 1000);
});

btnNewGame.addEventListener("click", () => {
  triggerMobileLandscapeFullscreen();
  choiceHistory = [];
  state.stone = 0;
  state.lantern = 0;
  state.silence = 0;
  isIntroActive = true;
  isEndingAnalysisActive = false;
  mainMenu.classList.remove("active");
  player.muted = false;
  showPauseButton();

  playSequence("intro", () => {
    displayDBHChoice("cake_event", "intro");
  });
});

btnContinue.addEventListener("click", () => {
  triggerMobileLandscapeFullscreen();
  const saved = getSavedGame();
  if (!saved) {
    updateContinueButtonVisibility();
    return;
  }

  state.stone = saved.scores.stone;
  state.lantern = saved.scores.lantern;
  state.silence = saved.scores.silence;
  choiceHistory = Array.isArray(saved.choiceHistory) ? [...saved.choiceHistory] : [];
  isIntroActive = !saved.isAtDecision && saved.sequenceName === "intro";
  isEndingAnalysisActive = false;
  mainMenu.classList.remove("active");
  player.muted = false;
  showPauseButton();

  if (saved.isAtDecision && saved.decisionKey) {
    const savedSequence = saved.sequenceName && videoSequences[saved.sequenceName];
    const savedFrameIndex = savedSequence
      ? Math.max(0, Math.min(Number(saved.frameIndex) || 0, savedSequence.length - 1))
      : 0;
    const savedFrameSource = savedSequence ? savedSequence[savedFrameIndex] : saved.lastFrameBeforeDecision;

    if (savedFrameSource) {
      activeSequence = savedSequence || null;
      activeSequenceName = saved.sequenceName || null;
      activeSequenceIndex = savedFrameIndex;
      player.loop = false;
      player.src = savedFrameSource;
      player.currentTime = 0;
      player.play().catch(() => {
        player.muted = true;
        player.play();
      });

      player.onended = () => {
        player.onended = null;
        displayDBHChoice(saved.decisionKey);
      };
    } else {
      displayDBHChoice(saved.decisionKey);
    }
    return;
  }

  if (saved.sequenceName && videoSequences[saved.sequenceName]) {
    playSequence(
      saved.sequenceName,
      () => {
        if (saved.sequenceName === "intro") {
          displayDBHChoice("cake_event", "intro");
        } else if (saved.sequenceName.startsWith("scene1_")) {
          displayDBHChoice("journey_event", saved.sequenceName);
        } else if (saved.sequenceName.startsWith("scene2_")) {
          displayDBHChoice("hall_event", saved.sequenceName);
        } else if (saved.sequenceName.startsWith("scene3_")) {
          resolveDBHEnding();
        }
      },
      saved.frameIndex
    );
  }
});

btnSettings.addEventListener("click", openSettings);

loadSettings();
checkVersionStatus();
checkGitHubReleases();
window.addEventListener("online", checkGitHubReleases);
displayButtons.forEach((button) => {
  button.addEventListener("click", () => applyDesktopDisplayMode(button.dataset.mode));
});
setupPlatformSettings();

// Fast-forward / Skip current frame
function skipCurrentFrame() {
  if (
    mainMenu.classList.contains("active") ||
    loadingScreen.classList.contains("active") ||
    pauseMenu.classList.contains("active") ||
    dbhOverlay.classList.contains("active") ||
    isGamePaused ||
    !activeSequence
  ) {
    return;
  }

  const isLastFrameInSequence = activeSequenceIndex >= activeSequence.length - 1;
  const isLeadingToChoice =
    activeSequenceName === "intro" ||
    (activeSequenceName &&
      (activeSequenceName.startsWith("scene1_") ||
        activeSequenceName.startsWith("scene2_") ||
        activeSequenceName.startsWith("scene3_")));
  const isStoryEnding = activeSequenceName && activeSequenceName.startsWith("ending_");

  if (isLastFrameInSequence && (isLeadingToChoice || isStoryEnding)) {
    return;
  }

  if (player && !player.paused && Number.isFinite(player.duration) && player.duration > 0) {
    player.currentTime = Math.max(0, player.duration - 0.05);
  }
}

window.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.key === " " || event.code === "ArrowRight") {
    event.preventDefault();
    skipCurrentFrame();
  }
});