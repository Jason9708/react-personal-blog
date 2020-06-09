import React, { useEffect, useState } from 'react'
import STYLE from 'styled-components'
import {
    MODE
} from 'SRC/assets/utils/login'

//* cmp
import Input from 'SRC/components/Input'
import Button from 'SRC/components/Button'


const LoginWrapper = STYLE.div`
    display: flex;
    height:100%;
    width:100%;
    background: rgba(223, 228, 234,.3);
`

const LoginContainer = STYLE.div`
    margin-left: 200px;
    width:400px;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`
const Form = STYLE.div`
    padding:50px;
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
        font-size:20px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    span:nth-child(2) {
        color: rgb(144, 144, 144);
        margin-bottom: 10px;
    }
    .register-span {
        color: rgba(52, 152, 219, .7);
        margin-bottom: 10px;
        transition: all .3s linear;
        cursor: pointer;
        &: hover {
            color: rgba(52, 152, 219, 1.0)
        }
    }
`

interface Props {}

const Login: React.SFC<Props> = props => {
    const [mode, setMode] = useState(MODE.LOGIN)

    const handleLoginClick = () => {
        setMode(MODE.REGISTER)
    }

    const handleRegisterClick = () => {
        
    }

    const changeMode = (mode:string) => {
        setMode(mode)
    }
    
    return (
        <LoginWrapper>
            <LoginContainer>
                {
                    mode === MODE.LOGIN ? (
                        <Form>
                            <span>Sign up the Manager System</span>
                            <span>or register a new account </span>
                            <Input type='text' placeholder='username' />
                            <Input type='password' placeholder='password' />
                            <Button size='normal' text='Sign up' theme='blue' handleClick={handleLoginClick} />
                            <span className='register-span' onClick={() => changeMode(MODE.REGISTER)}>create a new account</span>
                        </Form>
                    ) : (
                        <Form>
                            <span>Register a new account for the Manager System</span>
                            <span>step one to create your new life</span>
                            <Input type='text' placeholder='username' />
                            <Input type='password' placeholder='password' />
                            <Button size='normal' text='Register' theme='blue' handleClick={handleRegisterClick} />
                            <span className='register-span' onClick={() => changeMode(MODE.LOGIN)}><i className='iconfont'>&#xe743;</i>back</span>
                        </Form>
                    )
                }
            </LoginContainer>
        </LoginWrapper>
    )
}


export default Login
