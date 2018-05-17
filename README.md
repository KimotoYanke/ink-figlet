# ink-figlet
> Figlet for ink

## Usage

    import { h, render } from 'ink'
    import Figlet from 'ink-figlet'
    render(<Figlet font="Ghost">Hello</Figlet>)


## Params
Options of [`figlet`](https://www.npmjs.com/package/figlet)'s `textSync`

    figlet.textSync('Boo!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
↓

    <Figlet font="Ghost" horizontalLayout="default" verticalLayout="default">Boo!</Figlet>
