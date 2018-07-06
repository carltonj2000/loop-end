const exchanges = [
  [
    { symbol: "X1", price: 123.45, volume: 123 },
    { symbol: "X2", price: 23.45, volume: 23 }
  ],
  [
    { symbol: "X3", price: 3.45, volume: 3 },
    { symbol: "X4", price: 0.45, volume: 1 }
  ]
];

console.log("\nconcatAll\n");

(() => {
  console.log("\nNested forEach\n");
  exchanges.forEach(exchange => exchange.forEach(stock => console.log(stock)));
})();

(() => {
  console.log("\nconcatAll Implementation\n");
  Array.prototype.concatAll = function() {
    let result = [];
    this.forEach(resul => resul.forEach(res => result.push(res)));
    return result;
  };
  exchanges.concatAll().forEach(stock => console.log(stock));
})();
