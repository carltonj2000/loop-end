const tickers = [
  { symbol: "X1", price: 123.45, volume: 123 },
  { symbol: "X2", price: 23.45, volume: 23 },
  { symbol: "X3", price: 3.45, volume: 3 }
];

console.log("\ntbd\n");
(() => {
  console.log("\ntbd\n");
  tickers
    .filter(v => v.price > 23)
    .map(v => v.symbol)
    .forEach(x => console.log(x));
})();
