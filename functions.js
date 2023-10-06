// Functions

// Opgave 5.1
function myFunction() {
    console.log("Hello World")
}
myFunction();


// Opgave 5.2
function sumToTal(a, b) {
    return a + b;
}
console.log(sumToTal(3, 18));


// Opgave 5.3
function trueFalse(input) {
    if (input.toLowerCase() === "ja") {
        return true;
    } else {
        return false;
    }
}
console.log(trueFalse("Ja"));


// Opgave 5.4
const password = "aBcDeF"
function passwordCheck(pswd) {
    if (pswd === password) {
        return true;
    } else {
        return false;
    }
}
console.log(passwordCheck(password));


// Opgave 5.5
const username = "Mags"
function usernameCheck(user) {
    if (user.toLowerCase() === username.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(usernameCheck(username));