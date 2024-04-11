// Write a function
var startMyDay = function () {
    return "Time for coffee and a shower!"
};

console.log(startMyDay())


// Write a function with 1 Parameter
var favoriteCookie = function (cookie) {
    console.log(`My favorite cookie is ${cookie}.`);
};

favoriteCookie("macadamia nut cookie");


// Write a function with 2 Parameters
var introduce = function (name, occupation) {
    console.log(`Hello ${name}, being a ${occupation} must be really cool!`);
};
introduce("Lizzette", "Web developer");
introduce("Devlyn", "Marine scientist");


// Create a function to Capture Input
var hydrationFeedback = function () {
    var numGlasses = Number(prompt("How many glasses of water did you have today?")
    );
    if (numGlasses >= 8) {
        console.log("Yes your hydrated! keep it up.");
    } else if (numGlasses < 8) {
        console.log("Not bad, not bad. Let’s try for a bit more tomorrow!");
    }
};

hydrationFeedback();