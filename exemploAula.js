lass Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.cabeca = null;
    this.tamanho = 0;
  }

  // Adicionar um elemento no final da lista
  adicionar(valor) {
    const novoNo = new Node(valor);
    if (this.cabeca === null) {
      this.cabeca = novoNo;
    } else {
      let atual = this.cabeca;
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
    this.tamanho++;
  }

  // Remover um elemento da lista pelo seu valor
  remover(valor) {
    if (this.cabeca === null) {
      return;
    }
    if (this.cabeca.valor === valor) {
      this.cabeca = this.cabeca.proximo;
      this.tamanho--;
      return;
    }
    let anterior = this.cabeca;
    let atual = this.cabeca.proximo;
    while (atual !== null && atual.valor !== valor) {
      anterior = atual;
      atual = atual.proximo;
    }
    if (atual !== null) {
      anterior.proximo = atual.proximo;
      this.tamanho--;
    }
  }

  // Buscar um elemento na lista pelo seu valor
  buscar(valor) {
    if (this.cabeca === null) {
      return null;
    }
    let atual = this.cabeca;
    while (atual !== null && atual.valor !== valor) {
      atual = atual.proximo;
    }
    return atual === null ? null : atual.valor;
  }

  // Imprimir a lista
  imprimir() {
    let atual = this.cabeca;
    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }
}

// Exemplo de uso
const lista = new ListaEncadeada();
lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);
lista.imprimir(); // Imprime 10, 20, 30

lista.remover(20);
lista.imprimir(); // Imprime 10, 30

console.log(lista.buscar(30)); // Imprime 30
console.log(lista.buscar(40)); // Imprime null
