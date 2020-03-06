/* OPAKOVÁNÍ
let vek = prompt("Kolik ti je?");
console.log("Je ti " + vek + " let.");
alert("Díky za spolupráci.");

NOVÉ VĚCI: 
OBJEKTY - různé vlastnosti s různými datovými typy, přístup k objektům
POLE - stejný datový typ i informace, jde indexovat*/

let ja = {
    zena: true,
    vyska: 1.58,
    vek: 33,
    jmeno: "Jana",
    rodnePrijmeni: "Gerhartová",
    vdana: true,
    prijmeni: "Červeňák Gerhartová",
    bydliste: {
        mesto: "Brno",
        PSC: 60300,
        ulice: "Nejlepší ulice",
        čp: 123
    },
    zvirata: {
        morce: "Muffin",
        morce: "Piškot"
    }
};

let oblibeneZvire = {
    klasifikace: {
        kmen: "strunatci",
        rad: "hlodavci",
        trida: "savci",
        podtrida: "dikobrazočelistní",
        celed: "morčatovití",
        rod: "kapybara"
    },
    vahaMax: 80,
    vyskaMax: 0.64,
    delkaMax: 1.3,
    barva: "hnědá",
    vyskyt: "Jižní Amerika"
}

/* přístup k vlastnosti pomocí tečkové a závorkové konvence */
console.log(ja.bydliste.mesto);
console.log(oblibeneZvire["barva"]);
console.log(oblibeneZvire["klasifikace"]["rod"]);

/* přiřazení nové vlastnosti objektu a její vypsání, vlastně propojení dvou objektů */
ja.mazlicek = oblibeneZvire;
console.log("Moje oblíbené zvíře je " + ja.mazlicek.klasifikace.rod + ".");

/* odebrání vlastnosti z objektu */
delete ja.mazlicek;
console.log(ja.mazlicek);


/* PODMÍNKY - if, = vs. == vs. === vs. !==*/

/* let stari = prompt("Kolik ti je let?");
if (stari >= 18) {
    alert("Tobě klidně naliju.")
} else {
    alert("Mladej, dej si kofolu.")
} */


/*ŘETĚZENÍ PODMÍNEK u první podmínky musím dát buď == 0, nebo < 1, nebo === 0, ale to bych pak musela parsovat prompt, protože 3 rovnáse porovnávám i datový typ a prompt je vždy string */

/* let pocetKocek = prompt("Kolik máš doma koček?");
if (pocetKocek == 0) {
    alert("Chuďátko, máš alergii, ale kočku bys chtělo, co?")
} else if (pocetKocek < 3) {
    alert("Ty jsi ale kočkomil/ka.")
} else if (pocetKocek < 10) {
    alert("Možná, ale jen možná, to už trochu přeháníš, ne?")
} else {
    alert("Crazy cat lady!!!")
} */

/* LOGICKÉ OPERÁTORY &&, ||, ! 
mají prioritu 1. negace, 2. and, 3. or*/

let zvire = prompt("Jaké máš zvíře?");
let kafe = prompt("Máš rád/a kafe?");
let deskovky = prompt("Hraješ deskovky");

if ((kafe === "ano" || deskovky === "ano") && zvire === "morče") {
    console.log("Budeme kamarádi.")
} else {
    console.log("I tak budeme kamarádi.")
}

/* POLE */
let jmena = ["Marta","Jana","Hana","Dana","Anna"];
console.log(jmena[4]);

/* ÚKOL 


*/