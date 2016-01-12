# CAPITAL, COUNTRY, CURRENCY - WDI Project 1

A classic German game adapted with the input category of currencies instead of river.

This game is a two-player game, in which the next round only starts once the player is ready. By pressing "Start next round", the game starts. 


## RULES

1. Press "Start next round" to start round
2. Enter values for the input boxes: capital city, country, and currency based on the random letter generated by the computer.
3. Once the values are entered, please click the submit button in order to allow the computer to check the values.
4. If the submit button is not clicked within the timeframe given (30 seconds), any input values entered will be lost and the score will be "0" for the round. 
5. The first letter for each of the input values given have to be capitalised e.g. London, United Kingdom.
6. The input value for currency has to be written with the full name of the currency e.g. Great British Pound, Brazilian Real, US Dollar. Other input values such as: Pounds, GBP, British Pounds, Yen, € will not be accepted. The currencies that can be entered must be in circulation.   


## HOW IT WORKS

1. By pressing "Start next round", the computer
  - loads a form with three input values for capital city, country and currency with a submit button
  - generates a random letter in the display and input boxes
  - activates the timer to count down from 30 to 0

2. The user has 30 seconds to input the values for capital city, country and currency based on the random letter generated by the computer

3. Once the user has entered a value for three, or two or one of the boxes, the user clicks the submit button to process the form. 

4. Upon submitting the form, the computer checks the input values against the three arrays which store data for capital cities, countries and currencies. If a match is found between the input value entered by the user and a capital city, or currency or country stored in the array, the score increments by 1 point. Should the user have 2 or 3 correct input values, his or her scores will increment by 2 and 3 points.

5. Once the form is submitted and the score is incremented, user has the option to continue to play as Player2 by pressing "Start next round". This loads a new page with a new form, timer and a new random letter. 

6. Each player plays up to 5 rounds. The user with the highest score wins unless there is a tie! Game is now over or press the "Start next round" to load a new round. 

![](./CapitalCountryCurrencyImg) 


## CODING APPROACH

```HTML 5, CSS, jQuery and JavaScript``` were used to create this game.
Animation was created using the ```Animate.css stylesheet```.
The ```Google Web Font 'Robot'``` has been used to style the game.


## PROBLEMS & CHALLENGES

The main challenge I faced building this game was to build the alternating players function, and the timer, along with developing the linkages from one function to the other. I am pleased that I tried and tested a number of solutions to get the timer ticking and resetting upon submission of the form. I also managed to ensure the flow of the game wasn't interrupted when a user did not hit the submit button within the given timeframe.  