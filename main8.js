const { fromEvent } = rxjs;
const { concatAll, map, takeUntil } = rxjs.operators;

const parent = document.getElementById("parent");
const widget = document.getElementById("widget");

(() => {
  const mouseDowns = fromEvent(widget, "mousedown");
  const parentMouseMoves = fromEvent(parent, "mousemove");
  const parentMouseUp = fromEvent(parent, "mouseup");

  mouseDowns
    .pipe(
      map(e => parentMouseMoves),
      concatAll(),
      takeUntil(parentMouseUp)
    )
    .forEach(x => {
      widget.style.left = x.clientX + "px";
      widget.style.top = x.clientY + "px";
    });
})();
