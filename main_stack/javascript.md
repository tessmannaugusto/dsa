# Sintaxe, funções úteis e etc
- v8 é a engine escrita em C++ que compila o JS para codigo de maquina, sendo utilizada tanto no browser quanto no Node.
- Linguagem interpretada, ou seja, código é "traduzido" na hora que está rodando enquanto está sendo lido pelo interpretador, o que pode fazer com que ele seja mais lento em relação a linguagens compiladas (traduzidas antes de rodar)

## stack, heap e call stack
- Para qualquer processamento de dados acontecer, esse dado precisa se encontrar necessariamente na memória RAM do programa / máquina. Tudo que estiver salvo em um banco de dados, por exemplo, é lido do disco e trazido para a memória RAM.
- stack: é a parte da memória organizada de maneira sequencial (em ordem de pilha). A stack contem todas as informações de tamanho fixo como strings, numeros, boleanos, etc.
A stack também guarda os pointers dos objetos com tamanhos variaveis, como funções e objetos. Esses pointers apontam para o endereço no heap.
- heap: é a parte da memória onde ficam as informações com tamanhos variaveis como funções, objetos e arrays. As informações não são guardadas de maneira organizada e a Stack serve como um indice para encontrar elas. 
- call stack: é a pilha que organiza as chamadas das funções do programa. Funciona como uma pilha (last in first out), ou seja, na medida que novas funções são chamadas após a primeira, vão sendo empilhadas e na medida que são finalizadas o programa volta para a função prévia.

## destructuring com condição
- Dessa maneira é possível adicionar uma propriedade de maneira condicional: ...(condição && { chave: valor })


## utilizando padrão singleton em classes
* a palavra chave static define um membro estático de uma classe, não de uma instância. Isso quer dizer que ela é compartilhada entre TODAS as instâncias.
```javascript
class Teste {
  static contador = 0;

  constructor() {
    Teste.contador++;
  }
}

new Teste();
new Teste();
console.log(Teste.contador); // → 2
```


## loops e chamadas assíncronas
- não são todos os tipos de loops que esperam pelas promessas serem resolvidas, causando muitos bugs
- Existem duas opções que funcionam corretamente com await, for(const item of items) e await Promise.all(items.map((item) => asyncFunc(item)))
  - a primeira opção, for...of, irá executar as funções na ordem de iteração do loop, uma depois da outra. Ela espera uma chamada terminar para começar a outra.
  - a segunda opção, await Promise.all(items.map((item) => asyncFunc(item))), irá executar todas as funções em paralelo. Como é muito rapido, é necessário cuidar com os limites de API, tabelas, etc...
- Existem opções que não funcionam com await: forEach() e map() (sem Promise.all).
  - O forEach() não espera as promessas terminarem, o loop continua imediatamente e o código não espera pelas execuções. 
  - o map() irá retornar um array de Promises, não dos valores resolvidos.

## patterns
### mixin
- O padrão mixin é uma maneira de atribuir diversas propriedades e métodos de diversas fontes em um objeto. A função Object.assign() geralmente é utilizada para esse propósito. O primeiro parametro recebido é o objeto a ser alterado / incrementado e os seguintes são os que terão suas propriedades e métodos copiados pra dentro do primeiro. Se utilizado sem uma declaração e atribuição, o Object.assign apenas altera o objeto alvo.
```javascript
const objA = {number: 1}
const objB = {string: '2'}
Object.assign(objA, objB)
```
- é possivel alcançar resultado parecido ao utilizar a declaração literal de um objeto com spread operator. Essa maneira é sempre usada na criação de um objeto novo.
```javascript
const newObj = {...objA, ...objB }
```