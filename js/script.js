// 1- permettere di inserire nome e cognome
const buttonGenera = document.getElementById("genera");

buttonGenera.addEventListener('click' , function(){
    let nome_cognome = document.getElementById("fname").value;
    console.log(nome_cognome);

    let chilometri = document.getElementById("km").value;

    let prezzo = 0.21 * chilometri;

    let eta = document.getElementById("eta").value;

    if(eta == "minorenne"){
        let sconto = prezzo * 0.2
        prezzo = prezzo - sconto
        console.log(`Il prezzo finale del biglietto é ${prezzo} $`)
    }

    else if(eta == "over"){
        let sconto = prezzo * 0.4
        prezzo = prezzo - sconto
        console.log(`Il prezzo finale del biglietto é ${prezzo} $`)
    }

    else{
        prezzo = prezzo
        console.log(`Il prezzo finale del biglietto é ${prezzo} $`)
    }
});

// Annulla button
function Refresh(){
    window.parent.location = window.parent.location.href;
}
