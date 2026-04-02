# recursão
- a recursão é quando uma função chama ela mesma para atingir um objetivo
- toda função recursiva tem duas partes obrigatórias, caso base e caso recursivo.
- caso base é quando a função encontra o que procura e encerra o ciclo sem chamar a si mesma novamente.
- caso recursivo é a situação que ela chama a si mesma novamente (segue em loop).
- na prática é a mesma coisa que fazer um while loop, mas de uma maneira mais direta e clara. Não tem beneficios de desempenho.
# pilha e call stack
- pilha é uma estruturas de dados simples que possui apenas duas operações, a adição e a subtração do topo.
- ela é utilizada na call stack

## recursão e call stack
- funções recursivas (como todas chamadas de funções) utilizam a call stack e vão adicionando cada uma de suas chamadas subsequentes no topo da pilha.
- se uma função recursiva rodar muitas vezes ela pode deixar a call stack muito grande e ocupar muita memória.