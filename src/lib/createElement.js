export default function createElement(type, props, ...children) {
  // children is a rest parameter
  const el = document.createElement(type)
  Object.assign(el, props)
  el.append(...children) // spread operator
  return el
}
