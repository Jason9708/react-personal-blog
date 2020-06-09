import * as React from 'react'
import STYLE from 'styled-components'

type buttonType = {
    size?: string
    theme?: string
}
const ButtonComponent =STYLE.button`
    display: flex;
    justify-content: center;
    aligin-items: center;
    width: ${(props: buttonType) => props.size === 'small' ? 100 : props.size === 'large' ? 200 : 150}px;
    height: ${(props: buttonType) => props.size === 'small' ? 20 : props.size === 'large' ? 40 : 30}px;
    font-size:  ${(props: buttonType) => props.size === 'small' ? 12 : props.size === 'large' ? 14 : 13}px;
    font-weight: bold;
    padding:5px 10px;
    margin:10px 0px;
    background: ${(props: buttonType) => props.theme === 'green' ? 'rgba(46, 204, 113, .5)' : props.theme === 'red' ? 'rgba(231, 76, 60, .5)' : 'linear-gradient(99deg,#00a8ff,#006fff)'};
    color: #fff;
    border-radius: 2px;
    border: 1px solid;
    border-color:  ${(props: buttonType) => props.theme === 'green' ? 'rgba(46, 204, 113, .5)' : props.theme === 'red' ? 'rgba(231, 76, 60, .5)' : 'linear-gradient(99deg,#00a8ff,#006fff)'};
    transition: all .5s linear;
    cursor:pointer;
    &: hover {
        background: ${(props: buttonType) => props.theme === 'green' ? 'rgba(46, 204, 113, .8)' : props.theme === 'red' ? 'rgba(231, 76, 60, .8)' : 'linear-gradient(99deg,#1488CC,#4364F7)'};
        border-color:  ${(props: buttonType) => props.theme === 'green' ? 'rgba(46, 204, 113, .8)' : props.theme === 'red' ? 'rgba(231, 76, 60, .8)' : 'linear-gradient(99deg,#1488CC,#4364F7)'};
    }
`

interface ButtonProps {
    text: string,
    handleClick: () => void,
    size: string,  // small | normal | large
    icon?: string,
    theme?: string // green | blue | red 
}

interface ButtonState {}

export default class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps){
        super(props)
    }

    private onClick(e: React.MouseEvent<HTMLButtonElement>) {
        this.props.handleClick()
    }

    render() {
        const { text='Button', size='normal', theme='blue'} = this.props

        return (
            <ButtonComponent 
                size={size}
                theme={theme}
                onClick={this.onClick.bind(this)}
            >
                {text}
            </ButtonComponent>
        )
    }
}