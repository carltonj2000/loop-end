const tickers = [
  { symbol: "X1", price: 123.45, volume: 123 },
  { symbol: "X2", price: 23.45, volume: 23 },
  { symbol: "X3", price: 3.45, volume: 3 }
];

(() => {
  function getStockSymbols(stocks) {
    let symbols = [];
    stocks.forEach(stock => symbols.push(stock.symbol));
    return symbols;
  }

  const symbols = getStockSymbols(tickers);

  console.log(symbols);
})();

(() => {
  Array.prototype.map = function(projection) {
    let results = [];
    this.forEach(item => results.push(projection(item)));
    return results;
  };

  const symbols = tickers.map(function(ticker) {
    return ticker.symbol;
  });

  console.log(symbols);
})();

(() => {
  const symbols = tickers.map(function(ticker) {
    return ticker.symbol;
  });

  console.log(symbols);
})();
