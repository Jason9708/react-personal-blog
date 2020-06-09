import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import STYLE from 'styled-components'

//* cmp
import Login from './pages/Login'
import Home from './pages/Home'

interface Props {}
interface State {
  isLogin: boolean
}

const MangerWrapper = STYLE.div`
  height: 100%;
  width: 100%;
`

class Manager extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLogin: false,
    }
  }

  public changeLoginState(): void {
    this.setState({
      isLogin: true
    })
  }

  render(){
    return (
        <MangerWrapper>
          <Route path='/manager/login' exact component={Login}></Route>
          <Route path='/manager/' exact component={Home}></Route>
        </MangerWrapper>
    )
  }
}

export default Manager
