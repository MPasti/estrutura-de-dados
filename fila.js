function Queue() {
  var items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    //retira o primeiro elemento
    return items.shift();
  };

  this.front = function () {
    //retorna o primeiro elemento
    return items[0];
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

var fila = new Queue();

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);

fila.print();

fila.dequeue();

fila.print();

console.log(fila.front());

console.log(fila.size());

console.log(fila.isEmpty());
