// Arrays

// Opgave 4.1
let byer = ["Randers", "Viborg", "Aarhus", "København"];
console.log(byer[1]);


// Opgave 4.2
let byer2 = ["Randers", "Viborg", "Aarhus", "København"];
byer2.push("Skive")
console.log(byer2);


// Opgave 4.3
let talrække = [0, 1, 0, 3, 4, 5, 6];
talrække[2] = 2
console.log(talrække);


// Opgave 4.4
let talrække2 = [1, 2, 3, 4, 11, 55, 99, 100];
console.log(Math.max(...talrække2));


// Opgave 4.5
let talrække3 = [0, 12, 0, 22, 300, 4, 5]
talrække3.sort((a, b) => a - b)
console.log(talrække3);


// Opgave 4.6
talrække3.reverse()
console.log(talrække3);