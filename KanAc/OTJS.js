function Name() {
    if (document.getElementById('name').value != "") {
        var errors = 0;
        for (var i = 0; i < document.getElementById('name').value.length; i++)
            if (!isNaN(parseInt(document.getElementById('name').value.charAt(i)))) errors++;
        if (errors > 0) {
            document.getElementById('name').style.color = "lightslategray";
            return "Non sono solo lettere";
        }
        else {
            document.getElementById('name').style.color = "black";
            return document.getElementById('name').value;
        }

    } else {
        document.getElementById('name').style.color = "lightslategray";
        return "Nome";
    }
}

function Surname() {
    if (document.getElementById('surname').value != "") {
        var errors = 0;
        for (var i = 0; i < document.getElementById('surname').value.length; i++)
            if (!isNaN(parseInt(document.getElementById('surname').value.charAt(i)))) errors++;
        if (errors > 0) {
            document.getElementById('surname').style.color = "lightslategray";
            return "Non sono solo lettere";
        }
        else {
            document.getElementById('surname').style.color = "black";
            return document.getElementById('surname').value;
        }

    } else {
        document.getElementById('surname').style.color = "lightslategray";
        return "Cognome";
    }
}

function From() {
    if (document.getElementById('from').value != "") {
        var errors = 0;
        for (var i = 0; i < document.getElementById('from').value.length; i++)
            if (!isNaN(parseInt(document.getElementById('from').value.charAt(i)))) errors++;
        if (errors > 0) {
            document.getElementById('from').style.color = "lightslategray";
            return "Non sono solo lettere";
        }
        else {
            document.getElementById('from').style.color = "black";
            return document.getElementById('from').value;
        }

    } else {
        document.getElementById('from').style.color = "lightslategray";
        return "Cittadinanza";
    }
}

function Elapsed() {
    if (document.getElementById('elapsed').value != "") {
        var errors = 0;
        for (var i = 0; i < document.getElementById('elapsed').value.length; i++)
            if (isNaN(parseInt(document.getElementById('elapsed').value.charAt(i))) && document.getElementById('elapsed').value.charAt(i) != '/') errors++;
        if (errors > 0) {
            document.getElementById('elapsed').style.color = "lightslategray";
            return "Solo numeri e '/'";
        }
        else {
            document.getElementById('elapsed').style.color = "black";
            return document.getElementById('elapsed').value;
        }
    } else {
        document.getElementById('elapsed').style.color = "lightslategray";
        return "Scadenza";
    }
}

function Released() {
    if (document.getElementById('released').value != "") {
        var errors = 0;
        for (var i = 0; i < document.getElementById('released').value.length; i++)
            if (isNaN(parseInt(document.getElementById('released').value.charAt(i))) && document.getElementById('released').value.charAt(i) != '/') errors++;
        if (errors > 0) {
            document.getElementById('released').style.color = "lightslategray";
            return "Solo numeri e '/'";
        }
        else {
            document.getElementById('released').style.color = "black";
            return document.getElementById('released').value;
        }
    } else {
        document.getElementById('released').style.color = "lightslategray";
        return "Data emissione";
    }
}

function Load() {
    const provincie = ['AG Agrigento', 'AL Alessandria', 'AN Ancona', 'AO Aosta', 'AR Arezzo', 'AP Ascoli Piceno', 'AT Asti', 'AV Avellino', 'BA Bari', 'BT Barletta-Andria-Trani', 'BL Belluno', 'BN Benevento', 'BG Bergamo', 'BI Biella', 'BO Bologna', 'BZ Bolzano', 'BS Brescia', 'BR Brindisi', 'CA Cagliari', 'CL Caltanissetta', 'CB Campobasso', 'CE Caserta', 'CT Catania', 'CZ Catanzaro', 'CH Chieti', 'CO Como', 'CS Cosenza', 'CR Cremona', 'KR Crotone', 'CN Cuneo', 'EN Enna', 'FM Fermo', 'FE Ferrara', 'FI Firenze', 'FG Foggia', 'FC Forlì-Cesena', 'FR Frosinone', 'GE Genova', 'GO Gorizia', 'GR Grosseto', 'IM Imperia', 'IS Isernia', 'SP La Spezia', 'AQ L\'Aquila', 'LT Latina', 'LE Lecce', 'LC Lecco', 'LI Livorno', 'LO Lodi', 'LU Lucca', 'MC Macerata', 'MN Mantova', 'MS Massa-Carrara', 'MT Matera', 'ME Messina', 'MI Milano', 'MO Modena', 'MB Monza e della Brianza', 'NA Napoli', 'NO Novara', 'NU Nuoro', 'OR Oristano', 'PD Padova', 'PA Palermo', 'PR Parma', 'PV Pavia', 'PG Perugia', 'PU Pesaro e Urbino', 'PE Pescara', 'PC Piacenza', 'PI Pisa', 'PT Pistoia', 'PN Pordenone', 'PZ Potenza', 'PO Prato', 'RG Ragusa', 'RA Ravenna', 'RC Reggio Calabria', 'RE Reggio Emilia', 'RI Rieti', 'RN Rimini', 'RM Roma', 'RO Rovigo', 'SA Salerno', 'SS Sassari', 'SV Savona', 'SI Siena', 'SR Siracusa', 'SO Sondrio', 'SU Sud Sardegna', 'TA Taranto', 'TE Teramo', 'TR Terni', 'TO Torino', 'TP Trapani', 'TN Trento', 'TV Treviso', 'TS Trieste', 'UD Udine', 'VA Varese', 'VE Venezia', 'VB Verbano-Cusio-Ossola', 'VC Vercelli', 'VR Verona', 'VV Vibo Valentia', 'VI Vicenza', 'VT Viterbo'];
    for (var i = 0; i < provincie.length; i++) {
        var option = document.createElement("option");
        option.text = provincie[i];
        var select = document.getElementById('village');
        select.appendChild(option);
    }
    const colors = ['Marroni', 'Verdi', 'Grigi', 'Azzurri', 'Blu', 'Grigi'];
    for (var i = 0; i < colors.length; i++) {
        var option = document.createElement("option");
        option.text = colors[i];
        var select = document.getElementById('eye');
        select.appendChild(option);
    }
    var option = document.createElement("option");
    option.text = "Maschio";
    var select = document.getElementById('gender');
    select.appendChild(option);
    var option = document.createElement("option");
    option.text = "Femmina";
    select.appendChild(option);
}

function Reset() {
    document.getElementById('name').value = "Nome";
    document.getElementById('name').style.color = "lightslategray";
    document.getElementById('surname').value = "Cognome";
    document.getElementById('surname').style.color = "lightslategray";
    document.getElementById('elapsed').value = "Scadenza";
    document.getElementById('elapsed').style.color = "lightslategray";
    document.getElementById('from').value = "Cittadinanza";
    document.getElementById('from').style.color = "lightslategray";
    document.getElementById('released').value = "Data emissione";
    document.getElementById('released').style.color = "lightslategray";
    var res = document.getElementById("village");
    res.selectedIndex = 0;
    res = document.getElementById("eye");
    res.selectedIndex = 0;
    res = document.getElementById("gender");
    res.selectedIndex = 0;
}