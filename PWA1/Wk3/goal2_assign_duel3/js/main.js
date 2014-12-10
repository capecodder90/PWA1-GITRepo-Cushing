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

    var players = [
        {
            name: "Mario",
            damage: 20,
            health: 100
        },
        {
            name: "Yoshi",
            damage: 20,
            health: 100
        }];

    //player name
   // var playerOne = ["Mario", 20, 100]; // create variable playerOne, define it as an array with the player name, damage and health
   // var playerTwo = ["Yoshi", 20, 100];// create variable playerTwo, define it as an array with the player name, damage and health

    //initiate round
    var round=1; // declare variable for round number and define it as 0

    roundTxt.innerHTML = "Click FIGHT BUTTON to Start!";
    playerOneTxt.innerHTML = players[0].name + ":  " + players[0].health;
    playerTwoTxt.innerHTML = players[1].name + ":  " + players[1].health;

    function fight(){ // declare fight function
        //alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]); // create "start" alert, concatenate strings that show player one and player two's starting health
        playerOneTxt.innerHTML = players[0].name + ":  " + players[0].health;
        playerTwoTxt.innerHTML = players[1].name + ":  " + players[1].health;

        var p1 = Math.floor(Math.random() * players[0].damage + players[0].damage *.5);
        var p2 = Math.floor(Math.random() * players[1].damage + players[1].damage *.5);

        players[0].health -= p1;
        players[1].health -= p2;
        console.log("Health: " + players[0].health + " " + players[1].health);

        var result = winnerCheck();
        //console.log(result);
        roundTxt.innerHTML = "Round " + round + " Results: " + result;
        round++;

        /*for (var i = 0; i < 10; i++) // create for loop: create variable i, check if i is less than 10 (maximum 10 rounds), then increment i by one
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

          };*/
    };

    function winnerCheck(){ // declare function winnerCheck (see if there is a winner yet)
        var result="No winner yet."; // create variable "result" and define it as "no winner"
        if (players[0].health<1 && players[1].health<1) // check if player 1's health is less than 1 AND if player 2's health is less than one
        {
            result = "You Both Die - Game Over!"; // if both player's health is less than 1, they both die
        } else if(players[0].health<1){ // otherwise, if player 1's health is less than 1...
            result =players[1].name + " WINS!!!" // player 2 wins
        } else if (players[1].health<1) // otherwise, if player 2's health is less than 1...
        {
            result = players[0].name + " WINS!!!" // player 1 wins
        };
       return result; // return the value stored in "result"
    };

    /*******  The program gets started below *******/
    fight(); // calls the function to start the program

})();