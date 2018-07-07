const { fromEvent } = rxjs;
const { concatAll, map, takeUntil } = rxjs.operators;

Array.prototype.concatAll = function() {
  const result = [];
  this.forEach(e => e.forEach(e2 => result.push(e2)));
  return result;
};

(() => {
  console.group("2d");
  const exchanges = [
    {
      name: "ex1",
      stocks: [
        { symbol: "X1", price: 123.45, volume: 123 },
        { symbol: "X2", price: 23.45, volume: 23 }
      ]
    },
    {
      name: "ex2",
      stocks: [
        { symbol: "X3", price: 3.45, volume: 3 },
        { symbol: "X4", price: 0.45, volume: 1 }
      ]
    }
  ];

  const stocks = exchanges
    .map(e => e.stocks.filter(s => s.price > 4))
    .concatAll();
  stocks.forEach(s => console.log(s));
  console.groupEnd();
})();

(() => {
  console.group("3d");
  const exchanges = [
    {
      name: "ex1",
      stocks: [
        {
          symbol: "X1",
          closes: [
            { date: new Date(2017, 1, 1), price: 0.11 },
            { date: new Date(2017, 1, 2), price: 1.2 },
            { date: new Date(2017, 1, 3), price: 0.13 }
          ]
        },
        {
          symbol: "X2",
          closes: [
            { date: new Date(2017, 1, 1), price: 1.1 },
            { date: new Date(2017, 1, 2), price: 0.12 },
            { date: new Date(2017, 1, 3), price: 1.3 }
          ]
        }
      ]
    },
    {
      name: "ex2",
      stocks: [
        {
          symbol: "X3",
          closes: [
            { date: new Date(2017, 1, 1), price: 2.1 },
            { date: new Date(2017, 1, 2), price: 2.12 },
            { date: new Date(2017, 1, 3), price: 2.3 }
          ]
        },
        {
          symbol: "X4",
          closes: [
            { date: new Date(2017, 1, 1), price: 3.1 },
            { date: new Date(2017, 1, 2), price: 0.32 },
            { date: new Date(2017, 1, 3), price: 3.3 }
          ]
        }
      ]
    }
  ];

  (() => {
    console.group("synchronus");
    const stocks = exchanges
      .map(e =>
        e.stocks.map(s => {
          const closes = s.closes.filter(
            c => c.date.getTime() == new Date(2017, 1, 2).getTime()
          );
          return { symbol: s.symbol, price: closes[0].price };
        })
      )
      .concatAll();
    stocks.forEach(s => console.log(s));
    console.groupEnd();
  })();
  (() => {
    console.group("asynchronus");
    const stocks = exchanges
      .map(e =>
        e.stocks
          .map(s => {
            return s.closes
              .filter(c => c.date.getTime() == new Date(2017, 1, 2).getTime())
              .map(c => ({ symbol: s.symbol, price: c.price }));
          })
          .concatAll()
      )
      .concatAll();
    stocks.forEach(s => console.log(s));
    console.groupEnd();
  })();
  console.groupEnd();
})();
