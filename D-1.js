// Dado array abaixo, monte um novo array com apenas números (inteiros e decimais) seguindo as regras:

// Cada valor do novo array deve ser somado com o número anterior
// Se o novo valor não for par, deverá ser inserido um novo número anterior a ele somando + 0.5

const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];

const finalArray = [];
let entryPosition = 0;

arrayNumeros.forEach((element, index) => {
    if (!index) {
        finalArray.push(element);
        return;
    }
    const previousNumber = +arrayNumeros[index - 1];
    const newValue = +element + previousNumber;
    const isOdd = newValue % 2 !== 0;

    if (isOdd) {
        finalArray.push(newValue + 0.5);
    }

    finalArray.push(newValue);
});

console.log(finalArray)
