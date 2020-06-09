import * as React from 'react'
import STYLE from 'styled-components'

interface InputProps {
    type: string
    placeholder?: string,
    maxlength?: number,
    icon?: string
}

interface InputState {
    inputValue: string
}

const InputComponent = STYLE.input`
    border: 0px;
    padding: 10px;
    background: transparent;
    border-bottom: 1px solid rgb(144, 144, 144);
    outline: none;
    transition: all .3s linear;
    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: rgb(144,144,144);
    }

    ::-moz-placeholder {
        /* Firefox 19+ */
        color: rgb(144,144,144);
    }

    :-ms-input-placeholder {
        /* IE 10+ */
        color: rgb(144,144,144);
    }

    :-moz-placeholder {
        /* Firefox 18- */
        color: rgb(144,144,144);
    }
    &: hover {
        border-bottom: 1px solid rgba(46, 134, 222, 1.0);
    }
    &: focus {
        border-bottom: 1px solid rgba(46, 134, 222, 1.0);
    }
`

export default class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps){
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: e.target.value
        })
    }

    private inputRef = React.createRef<HTMLInputElement>()

    render() {
        const { type='text', placeholder='', maxlength=50 } = this.props

        return (
            <InputComponent 
                type={type} 
                placeholder={placeholder} 
                maxLength={maxlength} 
                ref={this.inputRef} 
                value={this.state.inputValue} 
                onChange={this.updateValue.bind(this)} 
            />
        )
    }
}
