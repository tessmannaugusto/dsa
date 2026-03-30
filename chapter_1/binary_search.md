# binary search
- método de busca eficiente que tem como ideia principal a divisão total das possibilidades ORDENADAS por 2 e a comparação do numero do meio com o alvo. Se alvo for maior, descarta todos numeros menores movendo ponteiro do inicio para o meio +1, se for menor move ponteiro do fim para o meio -1 e faz divisão  e comparação novamente até encontrAR o resultado. Retorna -1 caso não encontre. 
## descrição
- o algoritmo deve receber um conjunto de elementos na qual a busca será feita e um elemento de target que será procurado.
- a cada iteração devemos pegar o menor e o maior valor (as duas pontas do conjunto). O menor deve ser inicializado como 0 e o maior como o length do array -1. Esses numeros serão usados para calcular o meio do conjunto a cada iteração.
- o algoritmo deve rodar enquanto o valor menor for menor ou igual ao maior, pois caso o contrario não teremos mais elementos disponiveis.
- a cada iteração deve ser calculado o meio do array, somando o menor com o maior e dividindo por dois. Além disso, devem ser checadas 3 condições:
  - a primeira é se o meio do array (arr[indexMeio]) é igual ao target. Caso for, retorna o index que o target foi encontrado.
  - a segunda é se o meio do array é menor do que o target. Caso seja, a variavel menor deve virar o meio + 1 e seguir iterando. 
  - a terceira é se o meio do array é maior do que o target. Caso seja, a variavel maior deve virar o meio - 1 e seguir iterando. 
- caso itere até acabar os elementos deve ser retornado -1 para indicar que não foi encontrado.