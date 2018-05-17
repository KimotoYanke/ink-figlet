import Figlet from './dist'
import { renderToString, h } from 'ink'
import figlet from 'figlet'
import trimEnd from 'lodash.trimend'

test('render', () => {
  const text = 'aaa'
  const rendered = (renderToString(<Figlet>{text}</Figlet>))
  expect(rendered).toEqual(figlet.textSync(text))
})

test('font', () => {
  const text = 'aaa'
  const font = 'Ghost'
  const rendered = renderToString(<Figlet font={font}>{text}</Figlet>)
  expect(rendered).toEqual(figlet.textSync(text, {font}))
})
