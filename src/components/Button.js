import createElement from '../lib/createElement'
import './Button.css'

export default function Button(text) {
  const el = createElement('button', { className: 'Button' }, text)
  return el
}
