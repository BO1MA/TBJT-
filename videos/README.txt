Replace the ten placeholder MP4 files in this folder with your actual clips:

intro.mp4
new_game_intro.mp4
scene1_stone.mp4
scene1_lantern.mp4
scene1_silence.mp4
scene2_stone.mp4
scene2_lantern.mp4
scene2_silence.mp4
ending_stone.mp4
ending_lantern.mp4
ending_silence.mp4

The opening intro sequence is played in this order when the game is opened:

intro_00_elian_awakening.mp4
intro_01_childhood_curse.mp4
intro_02_village_outcast.mp4
intro_03_cake_unveiling.mp4
intro_04_cake_crack_decision.mp4

intro_04_cake_crack_decision.mp4 ends on the cake-crack moment before the
player's first decision.

intro.mp4 is an older single-clip fallback and is no longer used by the intro
sequence.
new_game_intro.mp4 is the story setup shown after selecting NEW GAME, before
the first decision. It is currently a temporary copy of intro.mp4 so the
complete flow can be tested immediately.

The JavaScript now uses named sequences. To turn any branch into a multi-clip
sequence, add more filenames to its array in script.js while keeping the clips
in this folder.

The project does not include generated or copyrighted video assets. Replace
these files with valid MP4 clips while keeping their exact filenames.
