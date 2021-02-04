import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Hello')
export const longText = () => Button('This is a big button')
