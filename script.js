// Challenge #1
var numOfFriends = 4;
var numOfSandwiches = numOfFriends * 2;
console.log("numOfSandwiches", numOfSandwiches);

// Challenge #2
var name = "Tom";
var string = "Hello, " + name + " how are you doing today?";
console.log("string:", string);

// Challenge #3
var DNA = "GCAT";
var RNA = DNA.replace(/T/g, "U");
console.log("RNA:", RNA);

// Challenge #4
var animal = "AlliGATor";
if (animal.toUpperCase() === "ALLIGATOR") {
    console.log("small");
} else {
    console.log("wide");
}

// Challenge #5
var str = 'IBMWLOVEbmcatsbmw';
var myElement = document.getElementById('my-div');
myElement.innerHTML = '<h1>' + str.replace(/[BMWbmw]/g, " ") + '<h1>';

// console.log(
//     str.replace(/[BMWbmw]/g, " ")
// );