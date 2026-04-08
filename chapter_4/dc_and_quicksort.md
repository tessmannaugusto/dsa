# divide and conquer
- técnica de resolução de problemas que consiste em quebrar o problema em partes menores até que se chegue em um caso base (o mais simples possível).
- com base no caso base, resolve as partes e combina os resultados.
- exemplos: soma de elementos de um array, contagem de elementos, encontrar o maior número, algoritmo de Euclides para MDC.

# quicksort
- algoritmo de ordenação eficiente que utiliza a estratégia de dividir e conquistar.
- escolhe um elemento como pivô.
- particiona o array em dois: elementos menores que o pivô e elementos maiores que o pivô.
- chama a si mesmo recursivamente para ordenar as duas partes.
- o caso base é um array com zero ou um elemento (que já está ordenado).
- tempo de execução:
  - médio e melhor caso: O(n * log n).
  - pior caso: O(n²), ocorre quando o pivô escolhido é sempre o maior ou o menor elemento (ex: array já ordenado e pivô é o primeiro elemento).
- a velocidade depende da escolha do pivô. Escolher um pivô aleatório geralmente resulta no caso médio.