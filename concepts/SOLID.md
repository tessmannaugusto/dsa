# SOLID

1. Single Responsability Principle: cada classe deve possuir apenas uma responsabilidade principal.

2. Open / closed principle: preferencialmente devemos adicionar funcionalidades sem alterar código existente. Aberto para extensão mas fechado para modificações.

```javascript
function calcularDesconto(tipoUsuario, valor) {
  if (tipoUsuario === "premium") return valor * 0.8;
  if (tipoUsuario === "vip") return valor * 0.7;
  return valor;
}

class Desconto {
  aplicar(valor) {
    return valor;
  }
}

class DescontoPremium extends Desconto {
  aplicar(valor) {
    return valor * 0.8;
  }
}

class DescontoVIP extends Desconto {
  aplicar(valor) {
    return valor * 0.7;
  }
}

// uso:
function aplicarDesconto(valor, desconto) {
  return desconto.aplicar(valor);
}

```


3. Liskov Substitution principle: você deve poder substituir uma classe base por uma derivada sem quebrar o código, ou seja, se uma classe herda de outra, ela deve manter o comportamento esperado.

4. Interface segregation principle: Interfaces devem ser específicas e enxutas, contendo apenas os métodos estritamente necessários para o comportamento esperado por seus clientes. Nenhuma classe deve ser forçada a implementar métodos que não utiliza.

5. Dependency inversion principle: As classes devem possuir como dependencias abstrações ou interfaces. Isso permite maior flexibilidade, desacoplamento e facilita a troca de implementações. Por exemplo, idealmente sua classe não deveria depender de uma classe que implementa uma integração com o dynamodb e sim com uma classe pai de banco de dados não relacionais.
