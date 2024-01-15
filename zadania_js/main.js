

/*******************/
/* ee09_2019_06_02 */
/*******************/
function obliczPaliwo() {
    const rodzajPaliwa = +document.getElementById("rodzajPaliwa").value
    const iloscLitrow = +document.getElementById("iloscLitrow").value
    const wynik = document.getElementById("wynik_13")
    let cena = 0;
    if (rodzajPaliwa == 1) {
        cena = 4
    }
    if (rodzajPaliwa == 2) {
        cena = 3.5
    }
    wynik.innerHTML = "koszt paliwa: " + cena * iloscLitrow + " zł"
}

/*******************/
/* ee09_2019_06_04 */
/*******************/
function kalkulator(operator) {
    const a = +document.getElementById("liczbaA").value
    const b = +document.getElementById("liczbaB").value
    const wynik = document.getElementById("wynik_14")
    switch (operator) {
        case '+':
            wynik.innerHTML = "Wynik: " + (a + b)
            break
        case '-':
            wynik.innerHTML = "Wynik: " + (a - b)
            break
        case '*':
            wynik.innerHTML = "Wynik: " + (a * b)
            break
        case '/':
            wynik.innerHTML = "Wynik: " + (a / b)
            break
        case '**':
            wynik.innerHTML = "Wynik: " + (a ** b)
            break
    }
}

/* Osobne funkcje dla każdego operatora *
function dodawanie() {
    const a = +document.getElementById("liczbaA").value
    const b = +document.getElementById("liczbaB").value
    const wynik = document.getElementById("wynik")
    wynik.innerHTML = "Wynik: " + (a + b)
}
 
function odejmowanie() {
    const a = +document.getElementById("liczbaA").value
    const b = +document.getElementById("liczbaB").value
    const wynik = document.getElementById("wynik")
    wynik.innerHTML = "Wynik: " + (a - b)
}
 
function mnozenie() {
    const a = +document.getElementById("liczbaA").value
    const b = +document.getElementById("liczbaB").value
    const wynik = document.getElementById("wynik")
    wynik.innerHTML = "Wynik: " + (a * b)
}
 
function dzielenie() {
    const a = +document.getElementById("liczbaA").value
    const b = +document.getElementById("liczbaB").value
    const wynik = document.getElementById("wynik")
    wynik.innerHTML = "Wynik: " + (a / b)
}
 
function potegowanie() {
    const a = +document.getElementById("liczbaA").value
    const b = +document.getElementById("liczbaB").value
    const wynik = document.getElementById("wynik")
    wynik.innerHTML = "Wynik: " + (a ** b)
}
//*/

/*******************/
/* ee09_2019_06_05 */
/*******************/
function generujCiag() {
    let a = +document.getElementById("pierwszyWyraz").value
    const r = +document.getElementById("roznicaCiagu").value
    let n = +document.getElementById("liczbaWyrazow").value
    const wynik = document.getElementById("wynik_15")
    wynik.innerHTML = "Ciąg arytmetyczny zawiera wyrazy: "
    let tekst = "Ciąg arytmetyczny zawiera wyrazy: "
    while (n) {
        tekst += a + ", "
        a += r
        n--
    }
    wynik.innerHTML = tekst
}

/*******************/
/* ee09_2020_01_02 */
/*******************/
function obliczPaliwo2() {
    const dystansKM = +document.getElementById("dystansKM").value
    const spalanie = +document.getElementById("spalanie").value
    const wynik = document.getElementById("wynik_16")
    const paliwo = spalanie / 100 * dystansKM
    wynik.innerHTML = "Potrzebujesz: " + Math.round(paliwo) + " litrów paliwa";
}

/*******************/
/* ee09_2020_06_04 */
/*******************/
function cenaWizyty() {
    const piling = document.getElementById("piling").checked
    const maska = document.getElementById("maska").checked
    const masaz = document.getElementById("masaz").checked
    const regulacja = document.getElementById("regulacjaBrwi").checked
    const wynik = document.getElementById("wynik_17")
    let cena = 0
    if (piling) {
        cena += 45
    }
    if (maska) {
        cena += 30
    }
    if (masaz) {
        cena += 20
    }
    if (regulacja) {
        cena += 5
    }
    wynik.innerHTML = "Cena zabiegów: " + cena
}

/*******************/
/* ee09_2020_06_05 */
/*******************/
function cenaStrzyzenia() {
    const krotkie = document.getElementById("krotkie").checked
    const srednie = document.getElementById("srednie").checked
    const poldlugie = document.getElementById("poldlugie").checked
    const dlugie = document.getElementById("dlugie").checked
    const wynik = document.getElementById("wynik_18")
    let cena = 0
    if (krotkie) {
        cena = 25
    }
    if (srednie) {
        cena = 30
    }
    if (poldlugie) {
        cena = 40
    }
    if (dlugie) {
        cena = 50
    }
    wynik.innerHTML = "Cena strzyżenia: " + cena
}

/*******************/
/* ee09_2022_01_06 */
/*******************/
function changeBg(kolor) {
    const prawy = document.getElementById('prawy19')
    prawy.style.backgroundColor = kolor
}

function fontColor(kolor) {
    const prawy = document.getElementById('prawy19')
    prawy.style.color = kolor
}

function fontSizing(size) {
    const prawy = document.getElementById('prawy19')
    prawy.style.fontSize = size + "%"
}

function ramka() {
    const obraz = document.getElementById("gibraltar")
    const borderCheck = document.getElementById("borderCheck").checked
    if (borderCheck) {
        obraz.style.border = "1px solid white"
    } else {
        obraz.style.border = "none"
    }
}
function punktor(typ) {
    const lista = document.getElementById("lista");
    lista.style.listStyleType = typ;
}

/*******************/
/* ee09_2022_01_07 */
/*******************/
function zamianaImg(img) {
    const obraz = document.getElementById('lanzarotte')
    obraz.src = "img/" + img
}

/* Wersja nr 1 */
let zmiana = 0
function iconChange() {
    zmiana++
    const polub = document.getElementById("icon")
    if (zmiana % 2 == 0) {
        polub.src = "img/icon-off.png"
    } else {
        polub.src = "img/icon-on.png"
    }
}
//*/

/* Wersja nr 2 *
let flag = false
function iconChange() {
    flag = !flag
    const polub = document.getElementById("icon")
    if (flag) {
        polub.src = "img/icon-on.png"
    } else {
        polub.src = "img/icon-off.png"
    }
}
//*/

/*******************/
/* ee09_2022_06_02 */
/*******************/
function paleta() {
    const h = +document.getElementById('wartoscH').value
    const d1 = document.getElementById('d1')
    const d2 = document.getElementById('d2')
    const d3 = document.getElementById('d3')
    const d4 = document.getElementById('d4')
    const d5 = document.getElementById('d5')

    d1.style = 'background-color: hsl(' + h + ', 100%, 50%)'
    d2.style = 'background-color: hsl(' + h + ', 80%, 50%)'
    d3.style = 'background-color: hsl(' + h + ', 60%, 50%)'
    d4.style = 'background-color: hsl(' + h + ', 40%, 50%)'
    d5.style = 'background-color: hsl(' + h + ', 20%, 50%)'
}

/*******************/
/* ee09_2022_06_04 */
/*******************/
/* Wersja nr 1 *
const iloscProduktow = document.querySelectorAll('.ilosc')
const nazwaProduktow = document.querySelectorAll('.produkt')
const aktualizujPrzycisk = document.querySelectorAll('.aktualizuj')
const zamowPrzycisk = document.querySelectorAll('.zamow')
let idZamowienia = 0

function sprawdz() {
    iloscProduktow.forEach((produkt) => {
        if (produkt.innerHTML == 0) {
            produkt.style = 'background-color: red;'
        }
        if (produkt.innerHTML >= 1 && produkt.innerHTML <= 5) {
            produkt.style = 'background-color: yellow;'
        }
        if (produkt.innerHTML > 5) {
            produkt.style = 'background-color: Honeydew;'
        }
    })
}

aktualizujPrzycisk.forEach((przycisk, i) => {
    przycisk.addEventListener('click', () => {
        const nowaIlosc = prompt('Podaj nową ilość:')
        iloscProduktow[i].innerHTML = nowaIlosc
        sprawdz()
    })
})

zamowPrzycisk.forEach((przycisk, i) => {
    przycisk.addEventListener('click', () => {
        alert('Zamówienie nr: ' + idZamowienia + ' Produkt: ' + nazwaProduktow[i].innerHTML)
        idZamowienia++
    })
})
sprawdz()
//*/

/* Wersja nr 2 */
function sprawdz2() {
    const produkty = ['p1', 'p2', 'p3', 'p4']
    for (let i = 0; i < produkty.length; i++) {
        const ilosc = document.getElementById(produkty[i]).innerHTML
        const produkt = document.getElementById(produkty[i])
        if (ilosc == 0) {
            produkt.style = 'background-color: red;'
        }
        if (ilosc >= 1 && ilosc <= 5) {
            produkt.style = 'background-color: yellow;'
        }
        if (ilosc > 5) {
            produkt.style = 'background-color: Honeydew;'
        }
    }
}

function aktualizuj(produktID) {
    const produkt = document.getElementById(produktID)
    const nowaIlosc = prompt('Podaj nową ilość:')
    produkt.innerHTML = nowaIlosc
    sprawdz2()
}

let idZamowienia = 0
function zamow(nazwaProduktu) {
    alert('Zamówienie nr: ' + idZamowienia + ' Produkt: ' + nazwaProduktu)
    idZamowienia++
}
sprawdz2()

/********************/
/* inf03_2022_06_02 */
/********************/
function obliczPaliwo3() {
    const rodzajPaliwa = +document.getElementById("rodzajPaliwa3").value
    const iloscLitrow = +document.getElementById("iloscLitrow3").value
    const wynik = document.getElementById("wynik_23")
    let cena = 0
    if (rodzajPaliwa == 1) {
        cena = 4
    }
    if (rodzajPaliwa == 2) {
        cena = 3.5
    }
    wynik.innerHTML = "koszt paliwa: " + cena * iloscLitrow + " zł"
}