// Array Loops
/*
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
*/

// Opgave 6.7
let talrække8 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
function varians(talrækkeListe) {
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

varians(talrække8);