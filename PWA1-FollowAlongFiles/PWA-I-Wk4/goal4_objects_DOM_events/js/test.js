/*
 Site scripts
 */

// Active Menu Item
var fileLoc = window.location.href;
console.log("file: " + fileLoc);
var pathname = fileLoc.substring(fileLoc.lastIndexOf('/'));
console.log("pathname: " + pathname);

var anchor = document.querySelectorAll("nav ul li a, #mini-nav ul li a");
for (var i = 0, max = anchor.length; i < max; i++){
    console.log("each " + anchor[i].getAttribute("href"));
    if(pathname == anchor[i].getAttribute("href").substring(anchor[i].lastIndexOf('/'))){
        anchor[i].setAttribute("class", "active");
        console.log("match: " + anchor[i]);
    }else{console.log("nope");}
}/**
 * Created by sarahcushing on 12/13/14.
 */
