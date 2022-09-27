// Utilize o forEach e o filter para gerar um novo array filtrando apenas os números pares.

// Realize com o forEach
// Realize com o filter

const par = (numero) => numero % 2 === 0

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const novoArrayFilter = arrayNumeros.filter(numero => par(numero))
console.log(novoArrayFilter)

novoArrayForEach = []

arrayNumeros.forEach(element => {
    if(par(element)){
        novoArrayForEach.push(element);
    }
});

console.log(novoArrayForEach);
