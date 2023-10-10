# Random-Numbers-Dice
A project from the fall of my senior year of high school (2021-2022) that focused on the use of random numbers to roll a dice.

+ The main take aways from this project was how to use random numbers in JavaScript
    + For this code I used the statement random(1,7) to generate random numbers from 1 to 6
    + This could also be done with random(0,6)+1
+ Another goal of this project was to figure out how to draw the pips (dots) on a dice correctly based on the roll number
+ I did this in two ways
    + I used **a call to the eval function to create a call to fuctions called draw1, draw2, etc** that each took in an x and y value
        + eval ("draw" + this.size + "(" + this.x + "," + this.y + ")");
        + In each draw# function it would draw a white square and the correct number and arrangment of pips
    + The second way that I solved this problem was by creating a **3D array**
        + The first dimention indicated the **roll number** so dotColor[1-1] was a roll of 1, dotColor[2-1] was a roll of 2, etc
        + Each of these arrays held 7 arrays that would coorispond to the 7 posible **dot locations**
        + Each dot loaction corresponded to an array that held the **RGB value** for that dot loaction at that roll number
        + In this model every dot was draw every time, however some of the dots had a fill color that matched the dice background color to give the appearance of fewer dots
+ Finally, to make my project a bit more unique I had the dice roll after each click, and after three clicks the number of dice inceases then decreases
    + here is a version where you [manually click](https://editor.p5js.org/783170/full/J7q9KSfYC)
    + here is a version that is [automated](https://editor.p5js.org/783170/full/8zOdvpMXl)
