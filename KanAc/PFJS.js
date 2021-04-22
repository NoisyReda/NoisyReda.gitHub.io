function PesoForma() {
    if (document.getElementById('alt').value != "" && document.getElementById('et').value != "" && document.getElementById('weight').value != "") {
        var errors = 0;
        for (var i = 0; i < document.getElementById('alt').value.length; i++)
            if (isNaN(parseInt(document.getElementById('alt').value.charAt(i)))) errors++;
        for (var i = 0; i < document.getElementById('et').value.length; i++)
            if (isNaN(parseInt(document.getElementById('et').value.charAt(i)))) errors++;
        for (var i = 0; i < document.getElementById('weight').value.length; i++)
            if (isNaN(parseInt(document.getElementById('weight').value.charAt(i)))) errors++;
        if (parseInt(document.getElementById('alt').value) < 130 || parseInt(document.getElementById('alt').value) > 200) errors++;
        if (parseInt(document.getElementById('et').value) < 1 || parseInt(document.getElementById('et').value) > 110) errors++;
        if (parseInt(document.getElementById('weight').value) < 27 || parseInt(document.getElementById('weight').value) > 635) errors++;
        if (errors == 0) {
            var combo = document.getElementById("Gender"), e = combo.options[combo.selectedIndex].value;
            if (e == "Male") {
                document.getElementById('Lorenz').innerHTML = parseInt(document.getElementById('alt').value) - 100 - (parseInt(document.getElementById('alt').value) - 150) / 4 + " KG";
                document.getElementById('Broca').innerHTML = parseInt(document.getElementById('alt').value) - 104 + 10 + " KG";
                document.getElementById('Wan der Vael').innerHTML = parseInt((document.getElementById('alt').value) - 150) * 0.75 + 50 + " KG";
                document.getElementById('BMI').innerHTML = (((parseInt(document.getElementById('weight').value) / (parseInt(document.getElementById('alt').value * parseInt(document.getElementById('alt').value)))) * 1000000) / 100).toFixed(2) + "KG";
            } else {
                document.getElementById('Lorenz').innerHTML = parseInt(document.getElementById('alt').value) - 100 - (parseInt(document.getElementById('alt').value) - 150) / 2 + " KG";
                document.getElementById('Broca').innerHTML = parseInt(document.getElementById('alt').value) - 104 + 10 + " KG";
                document.getElementById('Wan der Vael').innerHTML = parseInt((document.getElementById('alt').value) - 150) * 0.6 + 50 + " KG";
                document.getElementById('BMI').innerHTML = (((parseInt(document.getElementById('weight').value) / (parseInt(document.getElementById('alt').value * parseInt(document.getElementById('alt').value)))) * 1000000) / 100).toFixed(2) + "KG";
            }
        } else {
            document.getElementById('Lorenz').innerHTML = "ERROR";
            document.getElementById('Broca').innerHTML = "ERROR";
            document.getElementById('Wan der Vael').innerHTML = "ERROR";
            document.getElementById('BMI').innerHTML = "ERROR";
        }
    }
}