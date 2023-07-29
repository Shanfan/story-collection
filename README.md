# Notes on Avocado Story

## Date: July 29, 2023

There are several ways to use 'scroll' eventListener to control animation:

1. Use a JS library such as jQuery that has many built in transition with refined contorl
    This method is the easiest (also something I did many times in the past), but this adds unnecessary dependency on an external library, when my needs are quite basic. Given that there are so many JS library out there, each getting very sophisticated for their goal, I think I should stick to plain JS library.

2. Use CSS classes to define diferent states of an element, define `transition: all 0.5s ease-in-out`, then use JS eventListener to add or remove classes
    It's straightfoward for simple fade-in and fade-out state change, but if I want more granular control with the scroll position, then it's too crude.

3. Define @keyframe animations in CSS, pause the CSS animation, and then use the scroll position as a sliding controller.
    See [example here](https://codepen.io/chriscoyier/pen/NWxpJVx).
    2 and 3 are mutually exclusive because JS can not manipulate a CSS style when that style is defined by the element's class.

4. Completely rely on JS for animation - Then it means I'll have to write out many interpolation and easing functions make the transition smooth.

Over the past two days, I've been going back and forth between 2 and 3, and explored 4 at theoretical level. In the end I think should stick to 3.  

------------
Once I finished the title section animation, I feel I have to refactor the code: the might make more sense to delayer the structure... 


## Date: July 28, 2023

Mainly debating whether to use Flex, `margin: 0 auto`, or  `absolute` position to layout the page... Sigh.

# Notes on Thai Floral and Fauna
Date: June 29, 2023

Thoughts on how to go about this:  
[x] first, build a pale blue gradient background to represent the sky background  
[x] place all the other layers in their respective position, without any scrolling effect
[x] test: shift the tree trunk layer a little as you scroll
[x] finish the scroll animation shift
[] Write an intro text for this visual essay
[] Add intro HTML
[] Write an outro for this visual essay
[] Add outro HTML
[] Write up annotation text
[] Add "click me" hot spot to items with annotations
[] Animate the annotation text

[] Bonus: make a simple mode of two elements scrolling against each other; observe how the speed offset interact with the `container.scrollTop`.

[] Bobus: mobile optimization