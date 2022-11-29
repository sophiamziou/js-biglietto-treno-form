// 1- permettere di inserire nome e cognome
const buttonGenera = document.getElementById("genera");

buttonGenera.addEventListener('click' , function(){
    let nome_cognome = document.getElementById("fname").value;

    let chilometri = document.getElementById("km").value;

    let prezzo = 0.21 * chilometri;
    
    let offerta;

    let eta = document.getElementById("eta").value;

    if(eta == "minorenne"){
        let sconto = prezzo * 0.2
        prezzo = prezzo - sconto
        offerta = "Biglietto ridotto under 18"
    }

    else if(eta == "over"){
        let sconto = prezzo * 0.4
        prezzo = prezzo - sconto
        offerta = "Biglietto ridotto over 65"
    }

    else{
        prezzo = prezzo
        offerta = "Biglietto standard"
    }

    document.getElementById('nome').innerText = nome_cognome;
    document.getElementById('offerta').innerText = offerta;
    document.getElementById('carrozza').innerText = "5";
    document.getElementById('cod').innerText = "92911";
    document.getElementById('prezzo_finale').innerText =  `${prezzo.toFixed(2)} $`
});

// Annulla button
function Refresh(){
    window.parent.location = window.parent.location.href;
}
