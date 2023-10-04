// Crie um programa que seja capaz de percorrer com um lista de números e imprima cada número par encontrado. 


// Função para gerar números únicos aleatórios
function gerarNumeros(totalNumeros, min, max){
    if (totalNumeros > (max - min + 1)) {
        return nul;
    }

    const numerosUnicos = [];
    while (numerosUnicos.length < totalNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosUnicos.includes(numeroAleatorio)) {
            numerosUnicos.push(numeroAleatorio);
        }
    }

    return numerosUnicos.sort((a, b) => a - b);
}

// Função para formatar um texto em negrito e cor azul escuro
function formatarNegritoAzul(texto) {
    return `\x1b[1;34m${texto}\x1b[0m`;
}


// GErar uma lista de 50 números únicos entre 1 e 1000
const listaDeNumeros = gerarNumeros(50, 1, 1000);

console.log(listaDeNumeros);

// Filtrar e exibir apenas os números pares com um loop for em uma única linha
const numerosPares = listaDeNumeros.filter(numero => numero % 2 === 0);
let numerosParesEmLinha = "";

for (let i = 0; i < numerosPares.length; i++) {
    numerosParesEmLinha += formatarNegritoAzul(numerosPares[i].toString());
    if (i < numerosPares.length - 1) {
        numerosParesEmLinha += ", ";
    }
}

console.log("Números pares:", numerosParesEmLinha);