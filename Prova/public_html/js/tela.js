var contador = 0;
var listaNomes = [];

$("#botaoSalvar").click(function (e) {
    let nome = $("#nome").val();
    console.log(nome);
    listaNomes[contador] = nome;
    contador++;
});

$("#botaoMostrar").click(function (e) {
    let s = "";
    for (let i = 0; i < listaNomes.length; i++) {
        s += listaNomes[i] + " - ";
    }
    $("#mostrar").html(s);

    let botaoLimpar = document.createElement("input");
    botaoLimpar.type = "button";
    botaoLimpar.value = "Limpar";

    botaoLimpar.click(function (e) {
        let mostrar  = document.getElementById("#mostrar");
        $("#mostrar").html("vazio");
    });

    document.body.appendChild(botaoLimpar);
});

