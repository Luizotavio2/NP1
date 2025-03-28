document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const select = document.getElementById("redirect");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const selectedPage = select.value;
        if (selectedPage) {
            window.location.href = selectedPage; 
        }
    });
});

document.getElementById("calcularBtn").addEventListener("click", function() {
    let n = parseFloat(document.getElementById("n").value);
    let e = parseFloat(document.getElementById("e").value);
    
    if (isNaN(n) || isNaN(e)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }
    
    let Q = n * e;
    
    document.getElementById("resultado").textContent = Q.toExponential(6); 
});
