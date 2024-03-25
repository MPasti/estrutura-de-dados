//criando a classe de hash table
//a variável table é o que carrega os elementos da tabela
function HashTable() {
  var table = [];

  //classe filha que representa os elementos chave-valor
  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
      //para retornar os elementos em string
    };
  };

  //é a função de hash que recebe uma chave e retorna o seu valor em hash
  //soma os codigos ASCII dos caracteres e retorna o resto da divisão por 37
  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  //insere um novo par de chave-valor e calcula a posição usando a função de hash
  //se não houver lista encadeada na posição ele cria uma nova e adiciona
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  //remove um par chave-valor da hashtable
  //calcula a posição atraves da função de hash
  //procura pelo par na lista encadeada na posição específica, remove e coloca undefined no lugar

  this.remove = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };

  //retorna o valor associado baseado naquela chave a partir da função de hash
  this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  //imprime os valores da hashtable
  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + " : ");
        table[i].print();
      }
    }
  };

  //aqui ele calcula a quantidade de elementos da hash table
  this.size = function () {
    var count = 0;
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        count++;
      }
    }
    return count;
  };
}

function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    var current = head,
      previous;

    if (current.element === element) {
      head = current.next;
    } else {
      while (current.element !== element) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.print = function () {
    var current = head;
    while (current) {
      console.log(current.element.toString());
      current = current.next;
    }
  };
}

var hashtable = new HashTable();

hashtable.put("leandro", "leandro.borges@me.com");
hashtable.put("astolfo", "astolfo@uol.com.br");
hashtable.put("Livia", "livia@uol.com.br");
hashtable.put("Leandro", "leandro.borges@me.com");

//imprimindo conteúdo da hashtable
console.log("HashTable:");
hashtable.print();

//buscando um elemento
console.log("Email:", hashtable.get("Leandro"));

//removendo um elemento
hashtable.remove("Livia");

console.log("Conteúdo da Hashtable após remoção:");
hashtable.print();
