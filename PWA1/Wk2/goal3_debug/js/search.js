// Create privatized scope using a self-executing function
(function(){ // automatically starts the function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // creates three variables and defines them accordingly
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
    // fixed spelling of validate, changed comparison operator to assignment operator
	var validate = function(query){ // creates the validate variable, and stores the value of the function in it
		
		// Trim whitespace from start and end of search query
        // changed assignment operator to comparison operator
		while(query.charAt(0) === " "){ // check if the character at the 0 index of the search query is a space...
			query = query.substring(1, query.length); // remove the space
		};
		while(query.charAt(query.length-1) === "") { // check if the last character is a space...
            query = query.substring(0, query.length - 1); // remove the space
        };
		
		// Check search length, must have 3 characters
		if(query.length < 3){ // if the query length is less than 3 characters...
            // added closing "
			alert("Your search query is too small, try again."); // tell the user the query is too small
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); // put the cursor in the search box
			return;
		};
		
		search(query); // call the search function
	};
	
	// Finds search matches
    // added opening bracket
	var search = function(query){ // create the search variable and define it as the value of the function
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); // create queryArray variable, define it as the joined elements of an array with a space separator
		
		// array to store matched results from database.js
		var results = []; // create results variable, define it as an empty array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) { // create for loop to check if the length of the database array is less than 0, and if not increment it

            var dbTitleEnd = db[i].indexOf('|'); // each db[i] is a single video item, each title ends with a pipe "|"
            // corrected toLowerCase
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); // save a lowercase variable of the video title



            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { // loop through the user's search query words
                // corrected toLowerCase
                var qitem = queryArray[ii].toLowerCase(); // save a lowercase variable of the search keyword



                var compare = dbitem.indexOf(qitem); // is the keyword anywhere in the video title?
                if (compare !== -1) { // If a match is found, push full db[i] into results array
                    results.push(db[i]);
                };
            };
        };
		
		results.sort(); // sort the elements of the array in ascending alphabetical order
		
		// Check that matches were found, and run output functions
		if(results.length == 0){ // check if the length of the results is 0
			noMatch(); // then call noMatch function
		}else{ // otherwise...
			showMatches(results); // call the showMatches function
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ // create variable noMatch and define it as the value of the function
		var html = ''+ // create html, define it as the concatenated string
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html; // print the html string to the DOM
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ // create variable showMatches, define it as the value of the function
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', // create three variables
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
            // added var keyword
			var titleEnd = results[i].indexOf('|');
            // fixed camel case of subString
			title = results[i].substring(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
		// print the html string to the DOM
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() { // check for duplicate values
        var query = searchInput.value;
        validate(query); // call validate function with argument query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false; // return false
    }; // added closing bracket

})();