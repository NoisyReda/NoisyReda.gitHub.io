function setBiglietto() {
    if (document.getElementById('radio1').checked) {
        var prezzo = 0.0, counter = 0, combo = document.getElementById("combo"), e = combo.options[combo.selectedIndex].value,
            prezzotot = 0.0;
        for (var i = 0; i < document.getElementById("text").value.length; i++) if
            (parseInt(document.getElementById("text").value.charAt(i)) < 0 &&
            parseInt(document.getElementById("text").value.charAt(i)) > 9) counter++;
        if (counter == 0 && document.getElementById("text").value != "") {
            prezzo = (0, 43 * parseInt(document.getElementById("text").value));
            prezzotot = (0, 43 * parseInt(e) * parseInt(document.getElementById("text").value));
            document.getElementById("result").innerHTML = "Costo per singola persona: " + prezzo + "€";
            if (prezzotot != prezzo) document.getElementById("resultP").innerHTML = " Costo per " + e + " persone: " + prezzotot + "€";
            else document.getElementById("resultP").innerHTML = "";
        } else document.getElementById("text").value = "inserisci dei kilometri validi";
    } else {
        if (document.getElementById('radio2').checked) {
            document.getElementById("result").innerHTML = "";
            document.getElementById("resultP").innerHTML = "";
            var prezzo = 0.0, counter = 0, combo = document.getElementById("combo"), e =
                combo.options[combo.selectedIndex].value, prezzotot = 0.0;
            for (var i = 0; i < document.getElementById("text").value.length; i++) if
                (parseInt(document.getElementById("text").value.charAt(i)) < 0 &&
                parseInt(document.getElementById("text").value.charAt(i)) > 9) counter++;
            if (counter == 0 && document.getElementById("text").value != "") {
                prezzo = (0, 23 * parseInt(document.getElementById("text").value));
                prezzotot = (0, 23 * parseInt(e) * parseInt(document.getElementById("text").value));
                document.getElementById("result").innerHTML = "Costo per singola persona: " + prezzo + "€";
                if (prezzotot != prezzo) document.getElementById("resultP").innerHTML = " Costo per " + e + " persone: " +
                    prezzotot;
                else document.getElementById("resultP").innerHTML = "";
            } else document.getElementById("text").value = "inserisci dei kilometri validi";
        }
    }
}

function setRad() {
    if (document.getElementById('radio1').checked) {
        var prezzo = 0.0, counter = 0, combo = document.getElementById("combo"), e =
            combo.options[combo.selectedIndex].value, prezzotot = 0.0;
        for (var i = 0; i < document.getElementById("text").value.length; i++) if
            (parseInt(document.getElementById("text").value.charAt(i)) < 0 &&
            parseInt(document.getElementById("text").value.charAt(i)) > 9) counter++;
        if (counter == 0 && document.getElementById("text").value != "") {
            prezzo = (0, 43 * parseInt(document.getElementById("text").value));
            prezzotot = (0, 43 * parseInt(e) * parseInt(document.getElementById("text").value));
            document.getElementById("result").innerHTML = "Costo per singola persona: " + prezzo + "€";
            if (prezzotot != prezzo) document.getElementById("resultP").innerHTML = " Costo per " + e + " persone: " +
                prezzotot;
            else document.getElementById("resultP").innerHTML = "";
        } else document.getElementById("text").value = "inserisci dei kilometri validi";
    } else {
        if (document.getElementById('radio2').checked) {
            document.getElementById("result").innerHTML = "";
            document.getElementById("resultP").innerHTML = "";
            var prezzo = 0.0, counter = 0, combo = document.getElementById("combo"), e =
                combo.options[combo.selectedIndex].value, prezzotot = 0.0;
            for (var i = 0; i < document.getElementById("text").value.length; i++) if
                (parseInt(document.getElementById("text").value.charAt(i)) < 0 &&
                parseInt(document.getElementById("text").value.charAt(i)) > 9) counter++;
            if (counter == 0 && document.getElementById("text").value != "") {
                prezzo = (0, 23 * parseInt(document.getElementById("text").value));
                prezzotot = (0, 23 * parseInt(e) * parseInt(document.getElementById("text").value));
                document.getElementById("result").innerHTML = "Costo per singola persona: " + prezzo + "€";
                if (prezzotot != prezzo) document.getElementById("resultP").innerHTML = " Costo per " + e + " persone: " +
                    prezzotot;
                else document.getElementById("resultP").innerHTML = "";
            } else document.getElementById("text").value = "inserisci dei kilometri validi";
        }
    }
}