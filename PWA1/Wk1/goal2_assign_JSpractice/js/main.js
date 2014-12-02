/*
Name: Sarah Cushing
Date: December 2, 2014
Assignment: Goal 2 JS Practice
 */

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    // create function assigned to array
    var avgNumbers = function(arr){
        var sum = 0; // set sum equal to 0
        for(var i = 0, j = arr.length; i < j; i++){ // for each element in the array...
            sum += parseInt(arr[i]); // take the value stored in sum and add it to the value stored in each index of the array
        };
        var avg = sum / j; // take the value stored in sum and divide it by the number of elements in the array, store the result in avg
        return avg; // return avg
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5])); // call the function, pass the arguments, write the answer to the console

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        function fullName(firstname, lastname){ // create the function and give it parameters
            return firstname.concat(lastname); // return the concatenation of the arguments passed to the parameters
        };

    console.log(fullName('James', 'Bond')); // call the function, pass the arguments, write the answer to the console

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function" // create ipsum variable and assign it a string

        function wordCount(words){ // create the function and give it a parameter
            return words.split(" ").length; // split the string at the spaces and count how many mini-strings there are, return this number
        };

    console.log(wordCount(ipsum)); // call the function, pass the argument, write the answer to the console

    //--------------------------------------------------------
    console.log("4. sentence char count");

        function charCount(text){ // create the function, give it a parameter
            return text.length; // return the number of characters in the string
        };

    console.log(charCount(ipsum)); // call the function, pass the arguments, write the answer to the console

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        function vowelsInWord(word){ // create the function, give it a parameter
            return word.match(/a|e|i|o|u/gi).length; // return the length of each instance of any character that matches a, e, i, o, or u whether it be capitalized or not
        };

    console.log(vowelsInWord('JavaScript')); // call the function, pass the arguments, write the answer to the console

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        function findNum(arr, boo){ // create the function, give it two parameters
            var isEven = []; // declare an empty array for the even numbers
            var isOdd = []; // declare an empty array for the odd numbers
            if(boo === false || boo == null){ // if boo is false or null...
                for(var i = 0, j = arr.length; i < j; i++){ // for each element in the array...
                    if(arr[i] % 2 === 0){ // check if the remainder of that element is equal to 0
                        isEven.push(arr[i]); // if so, add that number to the array assigned to isEven
                    }else{ // if not...
                        isOdd.push(arr[i]); // add that number to the array assigned to isOdd
                    };
                };
                return isOdd; // return the array stored in isOdd
            }else{ // otherwise...
                return isEven; // return the array stored in isEven

            };
        };

    console.log(findNum([31,22,4,67,83,6,5,4])); // call the function, pass the arguments, write the answer to the console
    console.log(findNum([31,22,4,67,83,6,5,4], false)); // call the function, pass the arguments, write the answer to the console

})();