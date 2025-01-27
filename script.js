//?     Snack 1
//-     Creare un array di oggetti:
//-         •  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//-         •  Stampare a schermo la bici con peso minore.

const biciclette = [

    { nome: "Bianchi Sprint", peso: 7.2 },
    { nome: "Pinarello Dogma", peso: 6.8 },
    { nome: "Specialized Allez", peso: 7.5 },
    { nome: "Cannondale SuperSix", peso: 7.0 },
    { nome: "Trek Emonda", peso: 6.9 }

];

let biciPesoMinore = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {

    if (biciclette[i].peso < biciPesoMinore.peso) {
        biciPesoMinore = biciclette[i];
    }

}

console.log(`La bici che pesa di meno è la ${biciPesoMinore.nome} con un peso di ${biciPesoMinore.peso}.`);
















//?     Snack2
//-     1.  Creare un array di oggetti di squadre di calcio.
//-      2.  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//-       3.  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//-        4.  Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//-         5.  Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.