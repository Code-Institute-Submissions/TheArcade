# THE ARCADE

Milestone Project 2 - with Code Institute



## UX


## Features


### Existing Features


### Features Left to Implement

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Testing
**31 Jan:** Created the structure of the website. No relevant issues found during this process, I couldn't remember many things, but after a review of the first Milestone, w3school, Code Institute's online lessons, everything became very natural to use, and I felt much more confident than in the first Milestone. Created a simple header, a nav bar, a simple footer.

**01 Feb:** CSS issue. Nav bar showed 40px padding left that prevented the menu to be exacly in the center. Added padding: 0; to nav ul, in the CSS file, added justify-content: space-evenly; and removed margin: auto; the menu is exactly where I wanted now.

**04 Feb:** Fixed responsive design for both the header and the footer. The headers looks to be too big when the screen goes over the 576px. I will need to reduce the header size, but I need to create the game first, so that I can choose the correct size for the header, and have a good balance between the header and the body. I also fixed the burger menu, looks nicer now and more balanced with the screen size.

**04 Feb:** I created a structure for the memory games with 24 picture. I could see that actually 24 picture are too many, and take too much space in the webpage not offering a really nice UX, and would be hard to follow. After many test, I reduced to 20, but still the same result. I'm now happy with 16 pictures.

**05 Feb:** I could find an image to have the characters of game of thrones hidden, I'm using the House Stark Crest. I could cover all the 16 cards using a for loop. I found quite difficult to switch from the crest to the character without losing the original size of the table, this because they are two random images taken from the internet and with different size. I had to use different styles and make many tests in order to have it fixed. A work of good design creating the images from scratch surely would have avoided this issue.

**05 Feb:** Memory game shows a few bugs. If I click more times on the same card, it behaves as if it was a match. Besides, I can click and uncover more than two cards in a row if I click fast. These bugs need to be fixed.

**06 Feb:** Fixed the code. Now it's not possible to click on the same card twice, and it's not possible to click on three cards in a row.

**06 Feb:** I could find that my initial idea to create three games for the project is not possible considering the deadline. I will complete only the current game I'm currently working on. The name the Arcade must be changed to the game name "Memory". I will add more features to this game if I have enough time, to make it nicer.

**06 Feb:** The difference in terms of pixels between the House Stark Crest and the characters pictures was causing too many problems, the character pictuare was squared, but the crest was not. I used lightroom to make the crest squared, now it's much easier to have a balanced and better organised game table.

**09 Feb:** Still working on the score. The numbers could have been organised much better breaking them in single characters and reassembling them in single dedicated speaces, but for a matter of time I will leave them in this way, anyway it matches the purpose of the Milestone.

**09 Feb:** Score is showing partial result when the player wins, the player is supposed to see 'Well done' and the complete score when wins the game, but the system shows the score without tha last point. I removed the code from the setTimeout function and this solved the issue.

**09 Feb:** I just noticed that git commit doesn't accept special characters in the text, then I probably missed some commits, since they didn't go through.

**09 Feb:** Issue with the footer, it wasn't always at the bottom. Changing screen size, the footer left a wide empty space below. It took much research to fix this issue. I applied the struture of the page of an example of the course, and then I added display flex and flex direction to make it work with all the screens with a good look.

**09 Feb:** Checked that if you win the game and you are on the section well done, if you click on how to, the link doesn't work, it appears a page with a messy HTML. Fixed the issue.


## Deployment


## Credits
### Content
- Arvo Font was obtained from: https://fonts.googleapis.com/css?family=Arvo&display=swap
- Ubuntu Font was obtained from: https://fonts.googleapis.com/css?family=Ubuntu&display=swap
- Instructions in the section How to were obtained at: https://www.classicgamesandpuzzles.com/Memory.html

### Media
- Info about how to create a proper README.md was obtained from https://github.com/Code-Institute-Solutions/readme-template
- Basic writing and formatting syntax for the file README.md: https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#paragraphs
- I found inspiration for the logo used on this website: https://www.logomaker.com/
- The photos used in this site were obtained from https://www.hbo.com/game-of-thrones/cast-and-crew
- House Stark crest was obtained here: https://www.vippng.com/png/detail/242-2422088_game-of-thrones-house-stark-sigil-game-of.png

### Acknowledgements