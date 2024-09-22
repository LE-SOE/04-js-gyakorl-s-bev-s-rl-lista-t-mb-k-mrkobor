let db = 4
const termekek = ['Tej',  'Vaj',  'Kenyér',  'Sajt']

    function reset() {
console.log(termekek)
console.log(termekek[2])
let bevlista = document.getElementById("bevlista")
    for(termek of termekek) [
    console.log(termek)
    ,bevlista.innerHTML += `<li>${termek}</li>`
    ]
document.getElementById("darab").innerHTML = termekek.length = db


  
    }

    function hozzaad() {
    let cuccNeve = document.getElementById("cucc").value
    let bLista = document.getElementById("bevlista")
    bLista.innerHTML += `<li>${cuccNeve}</li>`
    db += 1

    document.getElementById("darab").innerHTML = db

    console.log("darab"),db

    }
