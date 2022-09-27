const dataAtual = new Date('2022-06-07T01:01:06.336Z'); 
function formataData(dataAtual){
    const mes = (dataAtual.getMonth() + 1);

    if(mes === 1) return 'janeiro'
    if(mes === 2) return 'fevereiro'
    if(mes === 3) return 'março'
    if(mes === 4) return 'abril'
    if(mes === 5) return 'maio'
    if(mes === 6) return 'junho'
    if(mes === 7) return 'julho'
    if(mes === 8) return 'agosto'
    if(mes === 9) return 'setembro'
    if(mes === 10) return 'outubro'
    if(mes === 11) return 'novembro'
    if(mes === 12) return 'dezembro'
}    
console.log(formataData(dataAtual))

// console.log(dataAtual.toLocaleDateString("pt-BR", {month:"long"}))