export default function createElement(type, props, ...children) {
  // children is a rest parameter
  const el = document.createElement(type)
  Object.assign(el, props)
  el.append(...children) // spread operator
  return el
}

//probs = alle Elemente definiert, die wir sonst als Prop an das HTML-Element dran schreiben würden, wird unter props entgegen genommen.
