var same;

function visibility() {
    document.getElementById('dom1').style.display = "none";
    document.getElementById('dom2').style.display = "none";
    document.getElementById('dom3').style.display = "none";
    document.getElementById('dom4').style.display = "none";
    document.getElementById('dom5').style.display = "none";
}

function appear(el, e) {
    if (same != el) {
        visibility();
        el.style.display = "block";
        same = el;
    } else {
        visibility();
        same = null;
    }
}