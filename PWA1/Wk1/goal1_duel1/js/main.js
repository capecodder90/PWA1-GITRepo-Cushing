/**
 * Name: Sarah Cushing
 * Date: 11/29/14
 * Duel Fight Game - FINISHED

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){ //starts the function automatically

    console.log("FIGHT!!!"); // write "FIGHT!!!" to the console

    //player name
    var playerOneName = "Mario"; // declare variable for player 1 name and define it as Mario
    var playerTwoName = "Yoshi"; // declare variable for player 2 name and define it as Yoshi

    //player damage
    var player1Damage = 20; // declare variable for player 1 damage and define it as 20
    var player2Damage = 20; // declare variable for player 2 damage and define it as 20

    //player health
    var playerOneHealth = 100; // declare variable for player 1 health and define it as 100
    var playerTwoHealth = 100; // declare variable for player 2 health and define it as 100

    //initiate round
    var round=0; // declare variable for round number and define it as 0

    function fight(){ // declare fight function
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // create "start" alert, concatenate strings that show player one and player two's starting health
        for (var i = 0; i < 10; i++) // create for loop: create variable i, check if i is less than 10 (maximum 10 rounds), then increment i by one
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // create variable to store the calculation of half of player 1's health
            var minDamage2 = player2Damage * .5; // create variable to store the calculation of half of player 2's health
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // create variable to store the random number which is the amount of damage to player 1
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // create variable to store the random number which is the amount of damage to player 2

            //inflict damage
            playerOneHealth-=f1; // subtract amount of damage from player 1's health
            playerTwoHealth-=f2; // subtract amount of damage from player 2's health

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); // write the results of the damage to the console

            //check for victor
            var result = winnerCheck(); // store the value of the function winnerCheck in the variable "result"
            console.log(result); // write the value stored in "result" to the console
            if (result==="no winner") // check if value stored in "result" is "no winner"
            {
                round++; // if so, increment round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // then create an alert box showing each player's health and the round number

            } else{ // otherwise...
                alert(result); // create an alert box with the value stored in "result"
                break; // jump out of the loop
            };

          };
    };

    function winnerCheck(){ // declare function winnerCheck (see if there is a winner yet)
        var result="no winner"; // create variable "result" and define it as "no winner"
        if (playerOneHealth<1 && playerTwoHealth<1) // check if player 1's health is less than 1 AND if player 2's health is less than one
        {
            result = "You Both Die"; // if both player's health is less than 1, they both die
        } else if(playerOneHealth<1){ // otherwise, if player 1's health is less than 1...
            result =playerTwoName+" WINS!!!" // player 2 wins
        } else if (playerTwoHealth<1) // otherwise, if player 2's health is less than 1...
        {
            result = playerOneName+" WINS!!!" // player 1 wins
        };
       return result; // return the value stored in "result"
    };

    /*******  The program gets started below *******/
    fight(); // calls the function to start the program

})();