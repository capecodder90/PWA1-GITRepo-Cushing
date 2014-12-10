/**
 * Name: Sarah Cushing
 * Date: December 10, 2014
 * Duel Fight Game

 Assignment 3
 Part 3/3 of series
*/

// self-executing function
(function(){ //starts the function automatically

    console.log("FIGHT!!!"); // write "FIGHT!!!" to the console

    var playerOneTxt = document.getElementById("mario").querySelector("p"); // assign #mario p element to playerOneTxt
    var playerTwoTxt = document.getElementById("yoshi").querySelector("p"); // assign #yoshi p element to playerTwoTxt
    var roundTxt = document.querySelector("h5"); // assign h5 element to roundTxt
    var fightBtn = document.getElementById("fight_btn"); // assign fight_btn element to fightBtn

    fightBtn.addEventListener("click", fight, false); // add event lister on click to fightBtn

    // setup player object arrays with names, damages, and healths
    var players = [
        {
            name: "Mario", // name key with Mario
            damage: 20, // damage key with 20
            health: 100 // health key with 100
        },
        {
            name: "Yoshi", // name key with Yoshi
            damage: 20, // damage key with 20
            health: 100 // health key with 100
        }];


    //initiate round
    var round=1; // declare variable for round number and define it as 1

    roundTxt.innerHTML = "Click FIGHT BUTTON to Start!"; // add text to to roundTxt h5 element
    playerOneTxt.innerHTML = players[0].name + ":  " + players[0].health; // add player one's name and health to playerOneTxt p element
    playerTwoTxt.innerHTML = players[1].name + ":  " + players[1].health; // add player two's name and health to playerTwoTxt p element

    function fight(){ // declare fight function

        playerOneTxt.innerHTML = players[0].name + ":  " + players[0].health; // update player one's name and health to playerOneTxt p element
        playerTwoTxt.innerHTML = players[1].name + ":  " + players[1].health; // update player two's name and health to playerTwoTxt p element

        var p1 = Math.floor(Math.random() * players[0].damage + players[0].damage *.5); // calculate damage to player one
        var p2 = Math.floor(Math.random() * players[1].damage + players[1].damage *.5); // calculate damage to player two

        players[0].health -= p1; // subtract damage from player one's health
        players[1].health -= p2; // subtract damage from player two's health

        var result = winnerCheck(); // declare result, call winnerCheck
        roundTxt.innerHTML = "Round " + round + " Results: " + result; // update roundTxt h5 element with the round and the results
        round++; // increment the round

        if(result === "No winner yet."){ // if there is no winner yet...
            playerOneTxt.innerHTML = players[0].name + ":  " + players[0].health; // update player one's name and health to playerOneTxt p element
            playerTwoTxt.innerHTML = players[1].name + ":  " + players[1].health; // update player one's name and health to playerOneTxt p element
        }else{ // otherwise...
            fightBtn.removeEventListener("click", fight, false); // remove the on click event listener on the fight button
        }

    };

    function winnerCheck(){ // declare function winnerCheck (see if there is a winner yet)
        var result="No winner yet."; // create variable "result" and define it as "no winner"
        if (players[0].health<1 && players[1].health<1) // check if player 1's health is less than 1 AND if player 2's health is less than one
        {
            result = "You Both Die - Game Over!"; // if both  player's health is less than 1, they both die
            playerOneTxt.innerHTML = "Poor " + players[0].name + " :("; // update player one's status to playerOneTxt p element
            playerTwoTxt.innerHTML = "Poor " + players[1].name + " :("; // update player one's status to playerOneTxt p element
        } else if(players[0].health<1){ // otherwise, if player 1's health is less than 1...
            result = players[1].name + " WINS!!!" // player 2 wins
            playerOneTxt.innerHTML = "Poor " + players[0].name + " :("; // update player one's status to playerOneTxt p element
            playerTwoTxt.innerHTML = "Yay " + players[1].name + " :)"; // update player one's status to playerOneTxt p element
        } else if (players[1].health<1) // otherwise, if player 2's health is less than 1...
        {
            result = players[0].name + " WINS!!!" // player 1 wins
            playerOneTxt.innerHTML = "Yay " + players[0].name + " :)"; // update player one's status to playerOneTxt p element
            playerTwoTxt.innerHTML = "Poor " + players[1].name + " :("; // update player one's status to playerOneTxt p element
        };
       return result; // return the value stored in "result"
    };

})();