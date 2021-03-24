# Pre-work - *Memory Game*

**Light and Sound** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Wilson Cho**

Time spent: **4** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/8e4ea2d6-de19-4fb7-bbb0-9ca0dc8155d1%2Fgif2.gif?v=1616612195487)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/jsref/met_win_settimeout.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[One challenge that I encountered while creating the submission would be the placement of the set interval and clear interval in order to create a timer for the player. It was tough deciding where exactly in the program
to place the set interval such that the timer would reset upon the player interaction as well as when the program was done displaying the pattern. One issue that happened while trying to implement this was having the 
text element seemingly update multiple times causing the timer to go down 2-3 times each interval instead of a single time. I realized that this was due to having multiple instances of the setinterval being created instead
of using a single one that was instantiated at the start of the program.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I still have alot to learn about web development but some questions I would have would be mainly about the implementation of other aspects that were not covered in this project. For instance, connecting the html and script
files to a database or server is something that I would be interested in learning. Additionally, creating a website that implemented other outside apis or features such as youtube videos or perhaps a google earth aspect 
would be interesting. An additional question I have about web development would be more aimed towards the CSS side of things, in particular what makes a website appealing to the user. I would like to learn about the 
fundamentals to a good looking website such as color design and the placement of the different pieces div's and such.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project I would most likely flesh out the rules of the game in order to add more game modes or rules to make the gameplay more interactive. For example, adding multiplier 
compatibility would be exciting as it would add a new dynamic to the game as the player is pitted against another player to see who can replicate the pattern best. Additionally, another game mode could consist of one
player creating the pattern while the other player attempts to copy it. If possible, we could also implement more players slots, allowing for multiple players to attempt to copy one a pattern and see who could get the farthest.
In addition to the gameplay elements, I would also flesh out the graphics and the html of the game to create a better overall experience. 



## License

    Copyright [Wilson Cho]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.