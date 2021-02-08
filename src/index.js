import createElement from './lib/createElement'
import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'


const grid = createElement(
    'div',
    {className: 'appGrid '}
    Header('Quiz App', 'May the best win!')
    Card('Foo bar?', 'Bar baz!')
    Button('Click me')
    Button('Hold me')
)
document.body.append(grid)

// const header = Header('Quiz App', 'May the best win!')
// document.body.append(header)

// const button = Button('Click me')
// const button2 = Button('Hold me')

// document.body.append(button)
// document.body.append(button2)
