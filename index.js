import figlet from 'figlet'
import { h, renderToString } from 'ink'

export default props => {
  const text = renderToString(<span>{props.children}</span>)
  const nProps = {...props}
  delete nProps.children
  return <span>{figlet.textSync(text, nProps)}</span>
}
