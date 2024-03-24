//classe nó
// armazena o 'novo' elemento da lista e seu próximo elemento
//cada nó é um elemento dentro da lista, que carrega o elemento e o seu elemento seguinte
// caso seja null, ele é o ultimo elemento da lista
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// fornece os métodos para manipulação dos elementos da lista
class ListaEncadeada {
  constructor() {
    this.cabeca = null;
    this.size = 0;
  }

  // Adiciona um elemento ao final da lista
  add(data) {
    // aqui cria um novo nó
    const novoNo = new Node(data);

    if (!this.cabeca) {
      // caso a cabeça seja null (false) => vai virar o novo nó
      this.cabeca = novoNo;
    } else {
      // caso já tenha uma cabeça, vai adicionar como proximo elemento
      let current = this.cabeca;
      while (current.next) {
        current = current.next;
      }
      current.next = novoNo;
    }

    // vai aumentar o tamanho da lista
    this.size++;
  }

  // remove e retorna o primeiro elemento da lista
  remove() {
    if (!this.cabeca) return null;

    const noRemovido = this.cabeca;
    this.cabeca = this.cabeca.next;
    this.size--;

    return noRemovido.data;
  }

  // retorna o primeiro elemento da lista (peek = dar uma espiada)
  peek() {
    return this.cabeca ? this.cabeca.data : null;
  }

  // retorna true se a lista estiver vazia (0 elementos), caso contrário retorna false
  isEmpty() {
    return this.size === 0;
  }

  // retorna o tamanho da lista
  getSize() {
    return this.size;
  }

  //cria uma lista para ser retornada recebendo os elementos que existem na lista
  imprimir() {
    const lista = [];
    let current = this.cabeca;
    while (current) {
      lista.push(current.data);
      current = current.next;
    }
    return lista;
  }
}

class Pilha {
  constructor() {
    this.list = new ListaEncadeada();
  }

  push(e) {
    this.list.add(e);
  }

  pop() {
    return this.list.remove();
  }

  peek() {
    return this.list.peek();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }

  print() {
    return this.list.imprimir();
  }
}

class Fila {
  constructor() {
    this.list = new ListaEncadeada();
  }

  //adiciona um elemento ao final da fila
  enqueue(e) {
    this.list.add(e);
  }

  //remove o elemento do inicio da fila e retorna => retorna null se nao tiver nada
  dequeue() {
    return this.list.remove();
  }

  //olha o primeiro elemneto da fila
  front() {
    return this.list.peek();
  }

  // verifica se está vazio
  isEmpty() {
    return this.list.isEmpty();
  }

  // verifica o tamanho
  size() {
    return this.list.getSize();
  }

  // imprime os valores
  print() {
    return this.list.imprimir();
  }
}

const pilha = new Pilha();
pilha.push("Teste");
pilha.push("Teste2");
pilha.push("Teste3");
pilha.push("Teste4");
pilha.push("Teste5");

console.log("Pilha: ");
console.log("Tamanho da pilha:", pilha.size());
console.log("Elemento do topo:", pilha.peek());
console.log("Removendo elemento do topo:", pilha.pop());
console.log("Tamanho da pilha:", pilha.size());
console.log("Elementos da Pilha: ");
console.log(pilha.print());

const fila = new Fila();

fila.enqueue("Jubisvaldo");
fila.enqueue("Jubisleia");
fila.enqueue("Cleiton Rasta");
fila.enqueue("Carlos Alberto");

console.log("----------------------------------");
console.log("Fila:");
console.log("Tamanho da fila:", fila.size());
console.log("primeiro da fila:", fila.front());
console.log("Removendo primeiro da fila:", fila.dequeue());
console.log("Tamanho da fila:", fila.size());
console.log("Elementos da Fila: ");
console.log(fila.print());
