import createElement from '../lib/createElement'
import Button from './Button'
import './Card.css'

export default function Card(question, answer) {
  const el = createElement('section', { className: 'Card' })
  const questionEl = createElement('h2', { innerText: question })
  const button = Button('Show answer')
  const answerEl = createElement('p', { hidden: true, innerText: answer })

  button.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden
    //jedes Ausrufezeichen führt zu einer Umkehrung, bspw. aus true wird false oder mit !! wird es ein echter boolean
  })

  el.append(questionEl, button, answerEl)
  return el
}
