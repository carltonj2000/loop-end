const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const { of, concat, throwError, fromEvent, interval } = rxjs;
const { scan, catchError, finalize, mergeMap } = rxjs.operators;

() => {
  const handler = e => {
    alert("clicked");
    button.removeEventListener("click", handler);
  };

  button.addEventListener("click", handler);
  //})(); // run
}; // don't run

(() => {
  const clicks = fromEvent(button, "click");
  clicks.forEach(() => alert("clicked 1"));
})();

(() => {
  fromEvent(button2, "click")
    .pipe(scan(i => i + 1, 0))
    .subscribe(i => console.log("clicked 2 -", i));
})();

(() => {
  const result = concat(of(7), throwError(new Error("oops")));
  result.subscribe(x => console.log(x), e => console.log(e));
})();

(() => {
  interval(1000)
    .pipe(
      mergeMap(x => (x === 3 ? throwError("Threes are bad") : of(x, x + 1)))
    )
    .subscribe(x => console.log(x), e => console.error(e));
})();

(() => {
  const subscription = fromEvent(button3, "click")
    .pipe(
      mergeMap(
        (click, i) => (i === 3 ? subscription.unsubscribe() || of(i) : of(i))
      )
    )
    .subscribe(
      i => console.log("clicked 3 -", i),
      e => console.error(e),
      () => console.log("done") // done never fires due to unsubscribe
    );
})();

(() => {
  const clicks = fromEvent(button4, "click")
    .pipe(mergeMap((click, i) => (i === 3 ? throwError("cj err") : of(i))))
    .subscribe(
      i => console.log("clicked 4 -", i),
      e => console.error(e),
      () => console.log("done")
    );
})();
