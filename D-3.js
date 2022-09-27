const date = new Date('2022-06-07T01:01:06.336Z')

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(date){
    const dia = zeroAEsquerda(date.getDate());
    const mes = zeroAEsquerda(date.getMonth() + 1); //começa do 0
    const ano = zeroAEsquerda(date.getFullYear());
    return `${dia}/${mes}/${ano}`;
}

function formataDataHoraMin(date){
    const dia = zeroAEsquerda(date.getDate());
    const mes = zeroAEsquerda(date.getMonth() + 1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const min = zeroAEsquerda(date.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${min}`;
}

console.log(formataData(date));
console.log(formataDataHoraMin(date));

