# Tomagotchi
A simple Tomagotchi like game using the lifecycle of a frog

## Game Link
<Insert game URL>

## Description
This game was made as an exploration into using objects to structure overall data / or state of a game. The object would then be manipulated through functional programming to determine different outcomes along the games path. 

## Wireframe
Wiframe/mockup was done through figma
![the tadpole screen](url("assets/Egg-frame.png"))

## User Story
The user is greeted with a welcome screen containing a box saying “Welcome to the pond!”. Underneath the greeting is an input where the user will input their frog’s name with a submit button next to it. The welcome screen itself is an opaque black background and the box with the message & input.

After submitting the name, the user will see the egg screen appear. It has a single temperature gauge bar up top. This bar is a timer bar that will deplete 10% every second (lasting 10 seconds). There is a button on the bottom, that will restore the button 10% with every click. The button is indicated to the corresponding progress bar with the same title as the bar.
The timer(s) dropping is the start of the game/level. If any of the bars drop to zero then the game is over!
The game itself has no end, you could play it forever if you really wanted to. 
After 30 seconds, the Egg will turn into a tadpole and another bar (for food) and button (feed <name>) will appear. After 60 seconds the tadpole will turn into a froglet, adding another progress bar (clear water) and button (clean water). 
This progression will continue into the last level, frog, which will appear after 2 minutes of froglet. This also adds one last progress bar and button for Exercise. 
In the chance that any of the progress bars reach zero… the game is over. If this is to happen, a picture of grogu(baby Yoda) eating a frog will appear over the main image, the buttons underneath will disappear, and the text “Oh no!” will appear. To play the game again, refresh the browser.

