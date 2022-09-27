const lista = document.querySelector('.list')

function retornaHtmlDinamico(geral, porPagina){
    let paginas = Math.ceil(geral/porPagina)

    for(let i = 1; i <= paginas ; i++){
        const listaPaginas = document.createElement('li');
        listaPaginas.innerHTML = `página ${i}`;
        lista.appendChild(listaPaginas);
    }
}

console.log(retornaHtmlDinamico(15, 2));