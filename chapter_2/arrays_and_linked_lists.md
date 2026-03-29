# Arrays e listas
## arrays
- espaço continguo na memória
- é possivel reservar um numero especifico de espaços para uso em um array
- caso não sejam usados todos os espaços, os espaços não utilizados estarão trancados e não poderão ser utilizados por outro array
- após definir um tamanho de array não é possivel alterar
### tempo de execução
- leitura é constante: O(1). Para ler um elemento especifico, basta apenas acessar o elemento desejado através do index
- inserção é linear: O(n). Para inserir um elemento, é necessário mover todos elementos que vem depois da inserção para trás.
- deleção é linear: O(n). Para deletar um elemento, é necessário mover todos elementos.
### js
- no javascript o uso mais comum é de new Array() ou simplesmente []. Esse uso não garante uso de memória continguo e aceita tipos mistos de elementos, como strings, booleanos e numeros. Ex: [1, 'texto', true]. Esse tipo de array possui tamanho dinâmico. É possivel usar push para adicionar mais elementos.
- para criar arrays com uso continguo de memória e um tipo especifico precisamos utilizar, por exemplo, Int32Array(). Dessa maneira se forem adicionados outros tipos que não Int, serão convertidos para Int. Esse uso garante uso continguo de memória e não é possivel adicionar novos elementos.
## listas encadeadas
- itens podem estar espalhados em qualquer lugar da memória
- cada item contem o endereço do proximo item na memória
- é composta por endereços aleatorios de memória conectados
### tempo de execução
- leitura é linear: O(n). Para ler um elemento especifico, é necessário percorrer todos elementos até chegar no desejado através do direcionamento dos endereços.
- inserção é constante: O(1). Para inserir um elemento, é necessário apenas mudar o endereço do elemento anterior para apontar para o novo e apontar do novo pro proximo.
- deleção é constante: O(1). Para deletar um elemento, é necessário apenas mudar o endereço de apontamento do elemento anterior