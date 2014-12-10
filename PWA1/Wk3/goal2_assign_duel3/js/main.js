/**
 * Name: Sarah Cushing
 * Date: December 10, 2014
 * Duel Fight Game

 Assignment 2
 Part 2/3 of series
*/

// self-executing function
(function(){ //starts the function automatically

    console.log("FIGHT!!!"); // write "FIGHT!!!" to the console

    var playerOneTxt = document.getElementById("mario").querySelector("p");
    console.log(playerOneTxt);
    var playerTwoTxt = document.getElementById("yoshi").querySelector("p");
    console.log(playerTwoTxt);
    var roundTxt = document.querySelector("h5");
    console.log("roundTxt = " + roundTxt);
    var fightBtn = document.getElementById("fight_btn");
    console.log(fightBtn);

    fightBtn.addEventListener("click", fight, false);

    //player name
    var playerOne = ["Mario", 20, 100]; // create variable playerOne, define it as an array with the player name, damage and health
    var playerTwo = ["Yoshi", 20, 100];// create variable playerTwo, define it as an array with the player name, damage and health

    //initiate round
    var round=0; // declare variable for round number and define it as 0

    function fight(){ // declare fight function
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]); // create "start" alert, concatenate strings that show player one and player two's starting health
        for (var i = 0; i < 10; i++) // create for loop: create variable i, check if i is less than 10 (maximum 10 rounds), then increment i by one
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5; // create variable to store the calculation of half of player 1's health
            var minDamage2 = playerTwo[1] * .5; // create variable to store the calculation of half of player 2's health
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1); // create variable to store the random number which is the amount of damage to player 1
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2); // create variable to store the random number which is the amount of damage to player 2

            //inflict damage
            playerOne[2]-=f1; // subtract amount of damage from player 1's health
            playerTwo[2]-=f2; // subtract amount of damage from player 2's health

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]); // write the results of the damage to the console

            //check for victor
            var result = winnerCheck(); // store the value of the function winnerCheck in the variable "result"
            console.log(result); // write the value stored in "result" to the console
            if (result==="no winner") // check if value stored in "result" is "no winner"
            {
                round++; // if so, increment round
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]); // then create an alert box showing each player's health and the round number

            } else{ // otherwise...
                alert(result); // create an alert box with the value stored in "result"
                break; // jump out of the loop
            };

          };
    };

    function winnerCheck(){ // declare function winnerCheck (see if there is a winner yet)
        var result="no winner"; // create variable "result" and define it as "no winner"
        if (playerOne[2]<1 && playerTwo[2]<1) // check if player 1's health is less than 1 AND if player 2's health is less than one
        {
            result = "You Both Die"; // if both player's health is less than 1, they both die
        } else if(playerOne[2]<1){ // otherwise, if player 1's health is less than 1...
            result =playerTwo[0]+" WINS!!!" // player 2 wins
        } else if (playerTwo[2]<1) // otherwise, if player 2's health is less than 1...
        {
            result = playerOne[0]+" WINS!!!" // player 1 wins
        };
       return result; // return the value stored in "result"
    };

    /*******  The program gets started below *******/
    fight(); // calls the function to start the program

})();