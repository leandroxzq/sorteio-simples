function gerarNumeroAleatorio(min, max) {
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    const premiado = gerarPremiado(min, max);
    
    const resultado = (x === premiado) ? `Você é o vencedor ! O número sorteado foi ${x}.` : `Tente novamente, seu número foi ${x}. <br> O número sorteado foi ${premiado}.`;
    swal({
        title: "Resultado",
        content: {
            element: "div",
            attributes: {
                innerHTML: resultado
            },
        },
        icon: (x === premiado) ? "success" : "error"
    });
}

function gerarPremiado(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const min = parseInt(document.getElementById("min").value, 10);
    const max = parseInt(document.getElementById("max").value, 10);

    if (min > max) {
        swal("Forneça um número máximo superior ao mínimo.");
    } else {
        gerarNumeroAleatorio(min, max);
    }
});