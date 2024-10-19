/* 
const age = Number(prompt("Kolik ti je let?"))
const userName = prompt("Jak se jmenuješ?")

document.body.innerHTML = `<p>${userName} ${surName}, age: ${age}</p>`;
document.body.innerHTML += '<p>' + userName + ' ' + surName + ', age: ' + age + '</p>';
*/

/*
const nazev = "Kniha 1"
const autor = "Vendula Konecna"
const cena = 450
const naSklade = true

const kniha = { 
    nazev: "Kniha 1",
    autor: "Vendula Konecna",
    cena: 450,
    naSklade: true,
}
document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"
*/

/*
const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const nazev2 = "Kniha 1"
const autor2 = "Michal Kucera"
const cena2 = 450
const naSklade2 = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"
*/

/*
const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const nazev2 = "Kniha 1"
const autor2 = "Michal Kucera"
const cena2 = 450
const naSklade2 = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

kniha.autor = "Jana"
kniha.jazyk = "cestina"

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>" 
*/


/* Výplata jako stránka
1. Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
const hodinovaSazba = Number(prompt("Jaká je Vaše hodinová mzda?"))
const mesicniMzda = hodinovaSazba * 8 * 21
document.body.innerHTML = `<p>Vaše měsíční mzda je: ${mesicniMzda} Kč.`
*/

/* 
2. Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi. 

const hodinovaSazba = Number(prompt("Jaká je Vaše hodinová sazba?"))
const pocetHodin = Number(prompt("Kolik hodin denně pracujete?"))
const pocetDni = Number(prompt("Kolik dní měsíčně pracujete?"))

document.body.innerHTML += `<p>Vaše výplata je ${hodinovaSazba * pocetHodin * pocetDni} Kč.</p>`
*/


/* 
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
Změnte stav inzerátu z 'free' na 'taken'.

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

document.body.innerHTML += `<p>Dispozice bytu je: ${apartment.disposition}</p>`
document.body.innerHTML += `<p>Čistý nájem bez poplatků je: ${apartment.price.rent}</p>`
document.body.innerHTML += `<p>Výměra bytu je: ${apartment.area.floorage} ${apartment.area.units}</p>`

const city = apartment.city
const district = apartment.district
document.body.innerHTML += `<p>Město: ${city} městská část: ${district}`

apartment.status = "taken"
document.body.innerHTML += `<p>Stav inzerátu: ${apartment.status} </p>`
*/


/*
Knihovna
V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.` 

const kniha1 = {
  nazev: {
    cesky: "1984",
    originalNazev: "Nighteen-eightyfour",
    },
  autor: "George Orwell",
  vydani: {
    nakladatel: "Leda",
    rokVydani: 2021,
    pocetStran: 344,
    vazba: "pevná",
  }
}

const kniha2 = {
  nazev: {
    cesky: "Stehlík",
    originalNazev: "The Goldfinch",
  },
  autor: "Donna Tartt",
  vydani: {
    nakladatel: "Argo",
    rokVydani: 2015,
    pocetStran: 750,
    vazba: "pevná s přebalem",
  } 
}
*/

/* 
Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{ name: 'Květoslav Voňavý',
  age: 67,}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
*/

 const userName = prompt('Your full name: ');
 const age = Number(prompt('Your age: '));
 const person = {
    name: userName,
    age: age,
    language: window.navigator.language,
};
document.body.innerHTML = `<p>Jméno a přijmení: ${person.name}</p><p>Věk: ${person.age}</p><p>Jazyk: ${person.language}</p><p>Byli jste zaregistrováni na očkování.</p>`;

