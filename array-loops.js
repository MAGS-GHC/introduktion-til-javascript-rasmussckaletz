// Array Loops

// Opgave 6.1
let talrække = [0, 12, 0, 22, 300, 4, 5];
let sum = 0;
for (let i = 0; i < talrække.length; i++) {
    sum += talrække[i];
}
console.log(sum)


// Opgave 6.2
let talrække2 = [0, 12, 0, 22, 300, 4, 5];
talrække2.forEach((tal) => {
    console.log(tal);
})


// Opgave 6.3
let talrække3 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let talrække4 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];
function talIndex (talrækkeNummer){
    for (let index in talrækkeNummer){
        let højesteTalTalrække = Math.max(...talrækkeNummer);
        let højesteTalIndexTalrække = talrækkeNummer.indexOf(Math.max(...talrækkeNummer));
        if (talrækkeNummer.length === Number(index)+1) {
            console.log(`Højeste tal: ${højesteTalTalrække} Index: ${højesteTalIndexTalrække}`);
        }
    }
}
talIndex(talrække3); talIndex(talrække4);


// Opgave 6.4
let talrække5 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let antalAf12Taller = 0;
for (let index in talrække5) {
    if (talrække5[index] === 12) {
        antalAf12Taller++;
    }
    if (talrække5.length === Number(index)+1) {
        console.log(`Antal: ${antalAf12Taller}`);
    }
}


// Opgave 6.5
let talrække6 = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12];
let antalPositiveTal = 0;
for (let index in talrække6) {
    if (talrække6[index] > 0) {
        antalPositiveTal++;
    }
    if (talrække6.length === Number(index)+1) {
        console.log(`Antal: ${antalPositiveTal}`);
    }
}


// Opgave 6.6
let talrække7 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
function gennemsnit(talrækkeListe){
    let talrækkeSum = 0;
    for (let index in talrækkeListe) {
        talrækkeSum += talrækkeListe[index];
        if (talrækkeListe.length === Number(index)+1) {
            let talrække7Gennemsnit = talrækkeSum / talrækkeListe.length
            console.log(talrække7Gennemsnit);
        }
    }
}
gennemsnit(talrække7);


// Opgave 6.7
let talrække8 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
function variansUdregner(talrækkeListe) {
    let talrækkeSum = 0;
    let talrække8Gennemsnit = 0;
    for (let index in talrækkeListe) { // tjekker alle tal i talrækken
        talrækkeSum += talrækkeListe[index]; // lægger tal i talrækkeSum variablen
        if (talrækkeListe.length === Number(index)+1) { // tjekker om vi er ved slutningen af arrayen
            talrække8Gennemsnit = talrækkeSum / talrækkeListe.length; // finder gennemsnit
            console.log("Gennemsnit: " + talrække8Gennemsnit);
        }
    }

    let talrække8Varians = 0;
    for (let index in talrækkeListe) { // tjekker alle tal i talrækken
        let mellemRegningVariabel = (talrækkeListe[index] - talrække8Gennemsnit) ** 2 // laver en mellemregning på varians. vi tager tallet tilsvarende til indexet, 
        //                                                                            minusser det med gennemsnittet og ganger det med sig selv. dette gør vi for alle tal i talrækken.
        
        talrække8Varians += mellemRegningVariabel; // lægger resultatet af mellemregningen oven i vores talrække8Varians variabel
    }
    talrække8Varians = talrække8Varians / talrækkeListe.length; // dividerer talrække8Varians med talrækkens længde for at få den endelige varians, facit
    console.log("Varians: " + talrække8Varians);
}

variansUdregner(talrække8);


// Opgave 6.8
const person1 = {
    firstName: "Anders",
    lastName: "Andersen",
    age: 29,
    eyeColor: "grøn"
};
const person2 = {
    firstName: "Mads",
    lastName: "Madsen",
    age: 32,
    eyeColor: "blå"
};
const person3 = {
    firstName: "Hans",
    lastName: "Hansen",
    age: 55,
    eyeColor: "røde"
};

function personChecker(person) {
    const accepteredeØjenfarver = ["blå", "grøn", "røde"];
    if (person.age > 30 && accepteredeØjenfarver.includes(person.eyeColor)) {
        console.log(person.firstName, person.lastName);
        console.log(`Alder: ${person.age}`);
        console.log(`Øjenfarve: ${person.eyeColor}`);
    } 
}
personChecker(person1)


// Opgave 6.9
function stjernePattern(linjer) {

    let linjerDeltITo = Math.ceil(linjer / 2);
    
    let stjernerStart = "";
    for (let i = 1; i <= linjerDeltITo; i++) {
        stjernerStart += "*";
        console.log(stjernerStart);
    }
    
    if (linjer % 2 === 0) {
        console.log(stjernerStart)
    }

    for (let i = linjerDeltITo - 1; i >= 1; i--) {
        stjernerStart = stjernerStart.slice(0, stjernerStart.length - 1);
        console.log(stjernerStart);
    }
    

}

let antalLinjer = 6;
stjernePattern(antalLinjer)


// Opgave 6.10
const object = {
    array1: [2, 3, 19, 2, -1, -9, 10, 33],
    array2: [3, 57, -8, 2, -21, -10, 11, 32],
    array3: [100, -100, 200, -200, 10]
};

function objectArraysBeregninger(objectMedArrays) {
    let arrayMedHøjesteGennemsnit = 0;
    let hvilkenArrayMedHøjesteSnit = "";
    let arrayMedLavesteVarians = Infinity;
    let hvilkenArrayMedLavesteVarians = "";

    for (let [key, value] of Object.entries(objectMedArrays)) {
        let arraySum = value.reduce((accumulator, nuværendeVærdi) => accumulator + nuværendeVærdi);
        let arraySnit = arraySum / value.length;
        console.log(`\n${key} gennemsnit: ${arraySnit}`);

        let varians = 0;

        for (let index in value) {
            varians += (value[index] - arraySnit) ** 2;
        }

        varians /= value.length;
        console.log(`${key} varians: ${varians}\n`);

        if (arraySnit > arrayMedHøjesteGennemsnit) {
            arrayMedHøjesteGennemsnit = arraySnit;
            hvilkenArrayMedHøjesteSnit = key;
        }

        if (varians < arrayMedLavesteVarians) {
            arrayMedLavesteVarians = varians;
            hvilkenArrayMedLavesteVarians = key;
        }
    }
    console.log("\n----------------------");
    console.log(`${hvilkenArrayMedHøjesteSnit} har det højeste gennemsnit på ${arrayMedHøjesteGennemsnit}`);
    console.log(`${hvilkenArrayMedLavesteVarians} har den laveste varians på ${arrayMedLavesteVarians}`);
}

objectArraysBeregninger(object);