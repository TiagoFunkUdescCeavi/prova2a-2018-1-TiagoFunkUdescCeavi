$("#idade").mouseleave(function (e){
    let resultado;
    let idade = $("#idade").val();
    if( idade < 18 ){
        resultado = "Menor de idade";
    }else if( idade >= 18 && idade <= 59 ){
        resultado = "Adulto";
    }else{
        resultado = "Idoso";
    }
    alert(resultado);
});