# POO Core


1. *Encapsulamento*: é uma técnica utilizada para proteger determinadas propriedades ou métodos e mostrar apenas o necessário para fora de uma classe.  
Essa proteção acontece através de modificadores de acesso (public, protected e private).  
É possível também implementarmos getters e setters para manter a integridade dos dados.

2. *Herança*: é uma relação direta entre uma superclasse (ou classe pai) e uma subclasse (classe filha).  
A classe filha herda as propriedades e métodos da superclasse, exceto as que são privadas.  
Essa relação gera um grande acoplamento entre as classes. Relação de uma classe É a outra.

```javascript
class Animal {
  constructor(patas) {
    this.patas = patas;
  }

  respirar() {
    console.log("Esse animal respira!");
  }
}

class Cachorro extends Animal {
  constructor(patas) {
    super(patas);
  }

  latir() {
    console.log("Esse cachorro late!");
  }
}
```

3. *Composição*: é uma técnica que consiste em instanciar classes dentro de outra pra poder utilizar seus métodos e propriedades. Essa implementação não gera tanto acoplamento quanto criar classes com herança direta. Relação de uma classe TEM a outra.

```javascript
class Motor {

}

class Carro {

  Motor motor = new Motor();

  constructor(marca) {
    this.marca = marca;
  }
}

```

4. Polimorfismo: é uma maneira em que classes diferentes que possuem a mesma classe base tem de implementar um método com a mesma assinatura que geram resultados diferentes.
```javascript
class Animal {
  ...

  respirar() {
    console.log("Esse animal respira!");
  }
}

class Peixe extends Animal {
  ...

  respirar() {
    console.log("Esse animal respira na agua!");
  }
}

class Cachorro extends Animal {
  ...

  respirar() {
    console.log("Esse animal respira fora da agua!");
  }
}
```

5. Abstração: é o ato de esconder os detalhes de uma implementação. Por exemplo, posso criar uma interface com um contrato e implementar ela em uma classe.
```javascript
interface Pagamento {
  processar(): void
}

class PagamentoCartão implements Pagamento {
  processar() {
    console.log("pagou com cartão")
  }
}