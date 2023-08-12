# Story Script

## Design Summary

The general script of a _Motion Comic_ follows this scruture: **Chapter > Scene > Panel > Layer**.

**🪄 Chapter**  
Chapters take up an entire HTML. We move on to the next chapter by navigating to a different HTML.  

**🪄 Scene**  
Scenes are the `<section></section>` within the HTML. A Scene typically occupies the viewport of the browswer.

**🪄 Panel**  
Panels correspond to a typical comic panel, which includes speech bubbles and narrations.

In the browser, most likely one panel takes up one scene, but in some cases when you need to show a conseductive action panels, they may appear inside one scene.

These panels could go side by side, row by row, or they could fade in and out one after another.

**🪄 Layer**  
Layers are nested inside a panel. At its bare minimum, we want to separate the speech, the narrations and the onomatopoeia from the image layer.

In some more magnificent scenes, we'd even want to separate one image into multiple layers, so that we can create the illusion of depth.

Some layers could contain visual effects such as sparkles and confetti, likely made inside `<canvas></canvas>`

## Table of Content:

* [Chapter 0. Title](#chapter-0-title)
    * [Scene 00](#ch0_sn00_pn00) 

* [Chapter 1. The clash](#chapter-1-the-clash)
    * [Scene 00](#ch1_sn00_pn00)
    * [Scene 01 (5 panels)](#ch1_sn01_pn0004)
    * [Scene 02](#ch1_sn02_pn00)
    * [Scene 03 (5 panels)](#ch1_sn03_pn0004)
    * [Scene 04 (3 panels)](#ch1_sn04_pn0002)
    * [Scene 05](#ch1_sn05_pn00)
    * [Scene 06](#ch1_sn06_pn00)
    * [Scene 07 (3 panels)](#ch1_sn07_pn0002)

* [Chapter 2. The summer shuffle](#chapter-2-the-summer-shuffle)
    * [Scene 00 (2 panels)](#ch2_sn00_pn0001)
    * [Scene 01 (3 panels)](#ch2_sn01_pn0002)
    * [Scene 02 (9 panels, needs music)](#ch2_sn02_pn0008)
    * [Scene 03 (animation design)](#ch2_sn03_pn00)
    * [Scene 04](#ch2_sn04_pn00)
    * [Scene 05](#ch2_sn05_pn00)
    * [Scene 06](#ch2_sn06_pn00)

* [Chapter 3. The autumn foliage](#chapter-3-the-autumn-foliage)
    * [Scene 00 (2 panels)](#ch3_sn00_pn0001)
    * [Scene 01 (6 panels)](#ch3_sn01_pn0005)
    * [Scene 02](#ch3_sn02_pn00)
    * [Scene 03](#ch3_sn03_pn00)
    * [Scene 04](#ch3_sn04_pn00)
    * [Scene 05](#ch3_sn05_pn00)

* [Chapter 4: The September Issue](#chapter-4-the-september-issue)
    * [Scene 00 (3 panels)](#ch4_sn00_pn0002)
    * [Scene 01](#ch4_sn01_pn00)
    * [Scene 02](#ch4_sn02_pn00)
    * [Scene 03 (7 panels)](#ch4_sn03_pn0006)
    * [Scene 04](#ch4_sn04_pn00)
    * [Scene 05 (2 panels)](#ch4_sn05_pn0001)

* [Chapter 5: The end of a season](#chapter-5-the-end-of-a-season)

## Chapter 0. Title

### ch0_sn00_pn00

Above the fold  

**Layers**  
Cover image, including 3 layers: 

* Title: The Story of the Snail and the Cricket
* front: Snail on a leaf  
* middle: cricket dangling on ear of the grass  
* far: more grass

Below the fold  

**Links to**
* Read from the beggining | About this story
* Ch1: The clash
* Ch2: The summer shuffle
* Ch3: The autumn foliage
* Ch4: The September Issue
* Ch5: The end of a season

## Chapter 1. The clash

### ch1_sn00_pn00

**Narration:**
... (see storyboard document)

### ch1_sn01_pn00...04

**Panel Group**

1. Snail blows out the candle
1. Snail goes to sleep
1. "BOOM!" **Special Effect** 
    "What?"
1. "... ..." 
1. Snail falls back to his pillow

### ch1_sn02_pn00
It's the morning now. The sun has risen.

### ch1_sn03_pn00...04

**Panel Group**

1. Snail wakes up
1. Water pours into a kettle
1. Snail enjoys his morning tea
1. "BANG!!" Snail's home was shaken **Special Effect**
1. "What the...!" Snail looks out

### ch1_sn04_pn00...02

**Panel Group**

1. Snail heads out
2. Snail looks up
3. Snail looks down

### ch1_sn05_pn00...01
1. S: "Excuse you?"  
1. C: "Oh! Hi, buddy!"

### ch1_sn06_pn00
C: "I'm sorry. Did I disturb you?"
S: "VERY MUCH!"

S: "Hopping. Stomping. Springing from place to place... Do you not shuffle? Do you not attend your household?"

C: "Um. FWIW, I don't have a household. Yours is amazing, btw. I wish I had one like that."

### ch1_sn07_pn00...02

**Panel Group**

1. S: "Let's talk about shuffle then."
2. C: "Sure! I love gymnastics! But we rand out space in this page! We'll have to go to the next page."
3. "Next page it is! (Click me)"

## Chapter 2. The summer shuffle

### ch2_sn00_pn00...01

**Panel Group**

1. Snail demo'ng what shuffle looks like. Needs fanfare music and stars  

    S: So, shuffling is a very stealth dance move. Once you get into the groove, no one sees your motion, yet you're moving...

    S: The key is the double slide. Look at my feet. No move, see?

2. Cricket clapping

    C: Whoa! Right! I see no move. I don't even see any foot!"

### ch2_sn01_pn00...02

**Panel Group**

1. Cricket chirps  
    S: Now you try.
    C: Like so?

2. Snail giggles
    C: Did you just make that sound?
    S: Uh oh. Sorry.

3. Nice!
    S: No, don't be! I like it!
    C: You do?

### ch2_sn02_pn00...08

**Needs Design** 

- [ ] Needs to figure out best way to represent this scene; may not need 9 panels to tell the story; will surelly need some animation

- [ ] I might want to compose a lofi tune!

C: It's my way of shuffling then!

C: I shuffle my wings, and then rub my legs against them...

C: Then we got music!

### ch2_sn03_pn00 

**Needs Design** 

- [ ] Canvas animation of fancy party scene with the music

### ch2_sn04_pn00
Then we have a party

### ch2_sn05_pn00
Night sky.

### ch2_sn06_pn00
What a wonderful night.

## Chapter 3. The autumn foliage

### ch3_sn00_pn00...01

A girl walking through the trail

**Panel Group**
1. footsteps
1. snapping a photo

### ch3_sn01_pn00...05

**Panel Group**

1. S: Er...
2. C: What?  
3. S: Don't look now, but we're being photographed.  
    C: Umm...kay. Is she getting my good side?
4. S: I've told you hundred times, you are perfectly symmetrical.  
    C: Right, right. If you say so.  
    S: I do.
5. C: Well. It's a pity that this is the spot we are being recorded.
6. S: What do you mean?

### ch3_sn02_pn00

Mountain view, covered with red leaves.

C: You see, the forest is very veautiful today, with teh red and orange leaves... and yet we are on this spotty yellow plant. What's up with these spots anyway?

### ch3_sn03_pn00
S: I don't know. It's a comfy spot, though.
C: Come on, don't you see my point? Yellow isn't exactly your best color either.

### ch3_sn04_pn00
S: Um... it's taken me quite a while to get up here.
C: Ooh... Yeah. Sorry. This is fine.

### ch3_sn05_pn00
S: You can hop over to some more flattering foliage, though. You don't have to stay if you don't want to. I mean, don't let me hold you back.

C: No, it's okay. I'll stay.

## Chapter 4: The September Issue

### ch4_sn00_pn00...02
**Panel Group**
1. Time  
1. moves
1. fast.

### ch4_sn01_pn00

"Soon enough, it's the September Issue!"

### ch4_sn02_pn00

Shiiaa Crickeeta exclusive interview

### ch4_sn03_pn00...06
**Panel Group**
1. S: Hey, look! Is that your cousin?  
    C: That's right! She just released a new album.
1. S: Is it true?  
    C: What?
1. S: That you only live for 90 days?  
1. C: More or less.
1. S: And how old are you now?
1. C: Let me see. I was hatched on that day when...
1. C: Aww. Stop looking at me like that! It's not as bad as you think!

### ch4_sn04_pn00

C: Most of us don't even live to see the September Issue!  
C: See. My badass cousin was swallowed by a bluebird right after the photoshoot!  
C: Mind you that bird was part of the camera crew.  
Blue Jay burps, "Excuse me?"

### ch4_sn05_pn00...01

**Panel Group**
1. In the mean while... what was I doing?
2. When I was dragging my feet through the seasons, you've already lived your whole life!


## Chapter 5: The end of a season

### ch5_sn00_pn00

The autumn has grown old.

### ch5_sn01_pn00...02
**Panel Group**
1. walking
2. stopping
3. "Mom, look!"  
    "Ah, snails! They are huddling together to get through the winter."

### ch5_sn02_pn00...01
1. "Honey, let's leave them alone, okay? They'll wake up when it's warmer."
2. "But did you see? There's a dead cricket lying next to them."

### ch5_sn03_pn00
M: Do you think they know each other?
K: Yeah. They must have been friends.


