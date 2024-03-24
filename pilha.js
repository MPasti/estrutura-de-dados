function Pilha() {
  var items = [];

  this.empilha = function (element) {
    items.push(element);
  };

  this.desempilha = function () {
    return items.pop();
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

var pilha = new Pilha();

pilha.empilha(1);
pilha.empilha(2);
pilha.empilha(3);
pilha.empilha(4);

pilha.print();

pilha.desempilha();

pilha.print();

pilha.desempilha();

pilha.print();

console.log(pilha.isEmpty());
console.log(pilha.size());

pilha.desempilha();
pilha.desempilha();

console.log(pilha.isEmpty());
