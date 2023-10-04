// Console.log() - Printopgaver

// Opgave 1.1
console.log("Hello World");


// Opgave 1.2
console.log("Hello \nWorld");


// Opgave 1.3
console.log("*\n**\n***\n**\n*");


// Opgave 1.4
let x = "5"
console.log(typeof x);


// Opgave 1.5
console.log(10-5);
console.log(25/3);
console.log(25%3);
console.log(25%2);
console.log(3**2);


// Opgave 1.6
let tekst1 = "Hello "
let tekst2 = "World!"
console.log(tekst1 + tekst2);


// Opgave 1.7
let gf2Tekst = "GF2 Online"
console.log(gf2Tekst.length);


// Opgave 1.8
console.log(Math.random());


// Opgave 1.9
let number = 23

console.log(number); // viser tallet 23
console.log(number = "23"); // ændring fra int til string
console.log(number == "23"); // Bool - tjekker om "23" er lig med "23", viser true
console.log(number === "23"); // Identiske, viser true
console.log(number -= 23); // (23 - 23) = 0
console.log(number += 23); // giver 23, da det blev 0 fra forrige linje
console.log(number += "23"); // 23 + "23" = 2323, da en er int, en er string
console.log(number -= "46"); // 2323 - 46 = 2277
console.log(number != "23"); // Bool - viser true, da den tjekker om number ikke er lig med "23", hvilket er sandt
console.log(number **= 2); // 2277^2 (2277 x 2277) = 5184729