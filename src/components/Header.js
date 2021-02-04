import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', { className: 'Header' })
  const headingEl = createElement('h1', {
    className: 'Header__title',
    innerText: `${title}`,
  })
  const subtitleEl = createElement('span', {
    className: 'Header__subtitle',
    innerText: `${subtitle}`,
  })
  el.append(headingEl, subtitleEl)
  return el
}

// export default function Card(question, answer) {
//     const el = createElement('section', { className: 'Card' })
//     const questionEl = createElement('h2', { innerText: question })
//     const button = Button('Show answer')
//     const answerEl = createElement('p', { hidden: true, innerText: answer })

//     button.addEventListener('click', () => {
//       answerEl.hidden = !answerEl.hidden
//     })

//     el.append(questionEl, button, answerEl)
//     return el
// //   }
