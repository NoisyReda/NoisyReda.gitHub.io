function crea() {
    //var js = new jsPDF();
alert("SIUUUUM");
    js.text(75, 20, "Crea un PDF con JavaScript");
    js.text(75, 30, "Il file PDF è stato creato con JavaScript");
    js.addPAge();
    js.text(20, 20, "prima pagina");
    js.text(20, 30, "Nome: \u00E8 " + document.getElementById("nome").value);
    js.save("Prova");
}