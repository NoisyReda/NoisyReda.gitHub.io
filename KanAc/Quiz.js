var risposte;

function buttonLoad() {
    if (document.getElementById('cognome').value != "" && document.getElementById('nome').value && document.getElementById('nascita').value != "") {
        let punteggio = 0, errori = 0;
        if (document.getElementById('nascita').value.lenght > 2) errori++;
        if (document.getElementById('year').value.lenght > 4 && document.getElementById('year').value.lenght < 4) errori++;
        if (isNaN(document.getElementById('nascita').value)) errori++;
        if (isNaN(document.getElementById('year').value)) errori++;
        for (let i = 0; i < document.getElementById('cognome').value.lenght; i++) if (parseInt(document.getElementById('cognome').value.charAt(i)) > 91 || parseInt(document.getElementById('cognome').value.charAt(i)) < 65) errori++;
        for (let i = 0; i < document.getElementById('nome').value.lenght; i++) if (parseInt(document.getElementById('nome').value.charAt(i)) > 91 || parseInt(document.getElementById('nome').value.charAt(i)) < 65) errori++;
        if (errori > 0) errors();
        errori = 0;
        for (let i = 0; i < document.getElementById('ris1').value.lenght; i++) if (parseInt(document.getElementById('ris1').value.charAt(i)) > 91 || parseInt(document.getElementById('ris1').value.charAt(i)) < 65) errori++;
        if (document.getElementById('ris1').value != risposte[0]) errori++;
        if (errori == 1) document.getElementById('ris1').value = "Risposta corretta: SQL";
        else if (errori == 2) document.getElementById('ris1').value = "Errore è in minuscolo";
        else punteggio++;
        errori = 0;
        if (document.getElementById('booleana').selectedIndex.toString() == punteggio[1]) punteggio++;
        if (document.getElementById('dim').checked == true) punteggio++;
        if (document.getElementById('void').checked == true) punteggio++;
        if (document.getElementById('char').checked == true) punteggio++;
        if (document.getElementById('byte').value == risposte[5] || document.getElementById('byte').value == punteggio[6]) punteggio++;
        if (document.getElementById('ris1').value == "") document.getElementById('ris1').value = "Campo vuoto";
        if (document.getElementById('byte').value == "") document.getElementById('byte').value = "Campo vuoto";
        document.getElementById('score').value = punteggio;
        var e = document.getElementById("comboM");
        var value = e.options[e.selectedIndex].value;
        document.getElementById('ut').value = document.getElementById('cognome').value.substr(0, 3) + " " + document.getElementById('nome').value.substr(0, 3) + " " + value.substr(0, 3) + " " + document.getElementById('year').value.substr(0, 2);
        document.getElementById('puntUt').value = punteggio * 10;
    } else errors();
}

function load() {
    risposte = ["SQL", "1", "dinamiche", "void", "char", "byte", "BYTE"];
    document.getElementById('ut').value = "Utente con punteggio"
}

function errors() {
    document.getElementById('cognome').value = "Compila tutto";
    document.getElementById('nome').value = "Compila tutto";
    document.getElementById('nascita').value = "Compila tutto";
    document.getElementById('year').value = "Compila tutto";
    setTimeout(deleteAll, 3000);
}

function deleteAll() {
    document.getElementById('cognome').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('nascita').value = "";
    document.getElementById('year').value = "";
    document.getElementById('ris1').value = "";
    document.getElementById('byte').value = "";
    document.getElementById('score').value = "";
    document.getElementById('ut').value = "";
    document.getElementById('puntUt').value = "";
    document.getElementById('comboM').selectedIndex = 0;
    document.getElementById('booleana').selectedIndex = 0;
    document.getElementById('stat').checked = false;
    document.getElementById('dim').checked = false;
    document.getElementById('void').checked = false;
    document.getElementById('integer').checked = false;
    document.getElementById('char').checked = false;
}