function HashTable() {
  var table = []; // Array para armazenar as listas encadeadas

  // Definição da estrutura de um nó da lista encadeada
  class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }

  // Método para adicionar um elemento no final da lista
  function adicionarNo(lista, key, value) {
    if (!lista.cabeca) {
      lista.cabeca = new Node(key, value);
      lista.tamanho++;
    } else {
      let atual = lista.cabeca;
      while (atual.next) {
        atual = atual.next;
      }
      atual.next = new Node(key, value);
      lista.tamanho++;
    }
  }

  // Função de hash
  function loseloseHashCode(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  // Método para adicionar um novo par chave-valor na tabela
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (!table[position]) {
      table[position] = { cabeca: null, tamanho: 0 }; // Inicializa uma nova lista encadeada
    }
    adicionarNo(table[position], key, value); // Adiciona o par chave-valor à lista encadeada correspondente
  };

  // Método para recuperar o valor associado a uma chave
  this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] && table[position].cabeca) {
      let atual = table[position].cabeca;
      while (atual) {
        if (atual.key === key) {
          return atual.value;
        }
        atual = atual.next;
      }
    }
    return undefined;
  };

  // Método para remover um par chave-valor da tabela
  this.remove = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] && table[position].cabeca) {
      let anterior = null;
      let atual = table[position].cabeca;
      while (atual) {
        if (atual.key === key) {
          if (anterior === null) {
            table[position].cabeca = atual.next;
          } else {
            anterior.next = atual.next;
          }
          table[position].tamanho--;
          return;
        }
        anterior = atual;
        atual = atual.next;
      }
    }
  };

  // Método para imprimir a tabela (para fins de depuração)
  this.print = function () {
    table.forEach(function (lista, index) {
      if (lista && lista.cabeca) {
        console.log(index + ":");
        let atual = lista.cabeca;
        while (atual) {
          console.log("[" + atual.key + " - " + atual.value + "]");
          atual = atual.next;
        }
      }
    });
  };
}

// Exemplo de uso
var hashtable = new HashTable();
hashtable.put("leandro", "leandro.borges@me.com");
hashtable.put("astolfo", "astolfo@uol.com.br");
hashtable.put("Livia", "livia@uol.com.br");
hashtable.put("Leandro", "leandro.borges@me.com");

hashtable.print();
