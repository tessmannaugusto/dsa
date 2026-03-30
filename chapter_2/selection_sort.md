# selection sort algorithym
- algoritmo utilizado para organizar elementos de acordo com um valor (menor para maior, mais antigo para mais novo, etc)
- precisa passar por todos elementos n vezes, ou seja, tempo de execução O(n²). Na primeira vez que roda a lista ele lê todos elementos para entender qual elemento tem a valor maior, por exemplo. Na segunda roda a lista de novo com um elemento a menos.
## descrição
- deve receber de parametros o conjunto original e a logica a ser aplicada (organizar por maior, menor, data, etc).
- retorna novo array organizado de acordo com lógica.
- inicializa novo array
- deve iterar enquanto array original tiver elementos. Quando não tiver mais, retorna o novo array organizado.
- para cada elemento do array original aplica a lógica. Por exemplo, se for organizar pelo menor, busca no array original qual o menor dos valores retira. Esse valor encontrado deve ser retirado do array original e adicionado no novo array.