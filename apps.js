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
    // Captura os valores dos inputs
    let n = parseFloat(document.getElementById("n").value);
    let e = parseFloat(document.getElementById("e").value);
    
    // Verifica se n é um número válido
    if (isNaN(n) || isNaN(e)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }
    
    // Calcula a carga elétrica (Q)
    let Q = n * e;
    
    // Exibe o resultado na tela
    document.getElementById("resultado").textContent = Q.toExponential(6); // Formato científico
});