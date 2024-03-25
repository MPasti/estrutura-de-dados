function HashTable() {
  var table = []; //qual posicao do vetor eu vou inserir aquele elemento.

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value; //Não pode receber 1 cara por vez --> [astolfo,Livia]
    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  this.put = function (key, value) {
    console.log("chave do put", key);
    var position = loseloseHashCode(key);
    console.log(position + " " + key);
    table[position] = value;
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined; //remove com base na chave;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)]; //usar a funÃ§Ã£o de hashing para achar o valor e retornar;
  };

  var loseloseHashCode = function (key) {
    //FunÃ§Ã£o de hashing fraca baseada em caracteres ASCCI
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;

    //LE -> (76+69)/37 e pega o resto
  };

  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + " : " + table[i]);
      }
    }
  };

  this.size = function () {
    //imprime o tamanho da vetor -> table.length
    return table.length;
  };
}

var hashtable = new HashTable();

hashtable.put("leandro", "leandro.borges@me.com");
hashtable.put("astolfo", "astolfo@uol.com.br");
hashtable.put("Livia", "livia@uol.com.br");
hashtable.put("Leandro", "leandro.borges@me.com");

hashtable.print();
