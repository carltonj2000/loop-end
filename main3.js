const tickers = [
  { symbol: "X1", price: 123.45, volume: 123 },
  { symbol: "X2", price: 23.45, volume: 23 },
  { symbol: "X3", price: 3.45, volume: 3 }
];

console.log("\nFilter\n");
(() => {
  console.log("\nFunction\n");
  function getStocksOver(stocks, minPrice) {
    let results = [];
    stocks.forEach(stock => stock.price >= minPrice && results.push(stock));
    return results;
  }

  console.log(getStocksOver(tickers, 20));
  console.log(getStocksOver(tickers, 24));
  console.log(getStocksOver(tickers, 240));
})();

(() => {
  console.log("\nProtype Implemented\n");
  Array.prototype.filter = function getStocksOver(predicate) {
    let results = [];
    this.forEach(item => predicate(item) && results.push(item));
    return results;
  };

  console.log(tickers.filter(x => x.price > 20));
  console.log(tickers.filter(x => x.price > 24));
  console.log(tickers.filter(x => x.price > 240));
})();

(() => {
  console.log("\nBuilt In\n");
  console.log(tickers.filter(x => x.price > 20));
  console.log(tickers.filter(x => x.price > 24));
  console.log(tickers.filter(x => x.price > 240));
})();
