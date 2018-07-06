const button = document.getElementById("button");

const { fromEvent } = rxjs;
const { map } = rxjs.operators;

(() => {
  fromEvent(button, "click")
    .pipe(map(e => ({ x: e.clientX, y: e.clientY })))
    .subscribe(i => console.log("clicked 2 -", i));
})();
