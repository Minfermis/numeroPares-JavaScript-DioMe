# Gerador de numeros sortidos, Com filtragem de número pares. 

Neste documento, vamos explicar um programa escrito em JavaScript que gera uma lista de números únicos, formata-os com negrito e cor azul, e, em seguida, exibe apenas os números pares. Vamos entender como funciona o código passo a passo:

## Função `gerarNumeros`

A função `gerarNumeros` é responsável por criar uma lista de números únicos em ordem crescente dentro de um intervalo especificado. Ela segue as seguintes regras:

~~~Javascript
function gerarNumeros(totalNumeros, min, max){
~~~

- `totalNumeros`: Este parâmetro define quantos números únicos serão gerados, neste caso, definimos 50 (Que está na parte de Geração da Lista de Números, onde definimos em quais regras vamos trabalhar seguindo: totalNumeros, min, max ).
~~~Javascript
    if (totalNumeros > (max - min + 1)) {
~~~
- `min` e `max`: Esses parâmetros representam o intervalo de números dentro do qual queremos gerar os números únicos, começando com 1 (min) e terminando em 1000 (max).
- Verificação de disponibilidade: A função verifica se o número total de números a serem gerados é maior do que a disponibilidade no intervalo (max - min + 1). Se for, a função retorna nulo, indicando que não é possível gerar tantos números únicos nesse intervalo.
- Criação de números únicos: A função cria um array chamado `numerosUnicos` e, usando um loop `while`, gera números aleatórios dentro do intervalo. Ela verifica se o número gerado já está na lista `numerosUnicos` antes de adicioná-lo. Se não estiver na lista, ele é adicionado.
~~~Javascript
    const numerosUnicos = [];
    while (numerosUnicos.length < totalNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosUnicos.includes(numeroAleatorio)) {
            numerosUnicos.push(numeroAleatorio);
        }
    }
~~~
- Ordenação: Por fim, a função retorna os números únicos em ordem crescente.

~~~JavaScript
    return numerosUnicos.sort((a, b) => a - b);
}
~~~

## Função `formatarNegritoAzul`

A função `formatarNegritoAzul` é responsável por formatar o texto com negrito e cor azul escuro para tornar os números mais bonitos quando exibidos no console.
~~~JavaScript
function formatarNegritoAzul(texto) {
    return `\x1b[1;34m${texto}\x1b[0m`;
}
~~~

## Geração da Lista de Números

Nesta parte do código, utilizamos a função `gerarNumeros` para criar uma lista de 50 números únicos entre 1 e 1000. É como se estivéssemos selecionando cartas especiais de um baralho. A lista resultante é armazenada na variável `listaDeNumeros` e é exibida no console.
~~~Javascript
const listaDeNumeros = gerarNumeros(50, 1, 1000);
~~~
## Filtragem de Números Pares

Após a geração da lista, o programa filtra apenas os números pares dessa lista, excluindo os números ímpares. Os números pares são armazenados na variável `numerosPares` usando a função `filter`. Em seguida, esses números pares são formatados com negrito e cor azul escuro usando a função `formatarNegritoAzul` e são concatenados em uma única linha na variável `numerosParesEmLinha`. Uma vírgula é adicionada entre os números para melhor clareza. Por fim, os números pares são exibidos no console com a mensagem "Números pares:".

~~~javascript
const numerosPares = listaDeNumeros.filter(numero => numero % 2 === 0);
let numerosParesEmLinha = "";

for (let i = 0; i < numerosPares.length; i++) {
    numerosParesEmLinha += formatarNegritoAzul(numerosPares[i].toString());
    if (i < numerosPares.length - 1) {
        numerosParesEmLinha += ", ";
    }
}
~~~

Este programa é uma demonstração simples de como criar e manipular listas de números em JavaScript. Você pode usá-lo como base para criar programas mais complexos ou personalizados de acordo com suas necessidades.

Espero que esta explicação seja útil para você entender o código e sua lógica!

