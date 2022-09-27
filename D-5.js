// const newDate = formataData(new Date('2022-06-07T01:01:06.336Z'), 'DD/MM/YYYY'); // 2022-06-07T01:01:06.336Z

// function zeroAEsquerda (num){
//     return num >= 10 ? num : `0${num}`;
// }

// function formataData(data, type){
//     const DD = zeroAEsquerda(data.getDate());
//     const MM = zeroAEsquerda(data.getMonth() + 1);
//     const YYYY = zeroAEsquerda(data.getFullYear());

//     if( type ==='DD/MM/YYYY') return DD + '-' + MM + '-' + YYYY
//     if( type === 'DD/MM') return DD + '-' + MM
//     if( type === 'DD') return DD
// }

// console.log(newDate)

const dataToLocale = new Date();

function formataData(data, type){
    if( type === 'DD') return (data.toLocaleDateString("pt-BR", {day: "2-digit"}))

    if( type === 'DD/MM') return(data.toLocaleDateString("pt-BR", {day: "2-digit", month:"2-digit"}))

    if( type ==='DD/MM/YYYY') return (data.toLocaleDateString("pt-BR", {day: "2-digit", month:"2-digit",year:"numeric"}))
}

console.log(formataData(dataToLocale, 'DD/MM'))