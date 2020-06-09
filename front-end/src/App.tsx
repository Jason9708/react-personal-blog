import React  from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'

//* cmp
import Client from './views/Client'
import Manager from './views/Manager'

//* global style
import 'antd/dist/antd.css'
import { InitStyle } from 'SRC/assets/styles/initStyle'
import { IconfontStyle } from 'SRC/assets/iconfont/iconfont'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <InitStyle />
        <IconfontStyle />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Client}></Route>
            <Route path='/client' component={Client}></Route>
            <Route path='/manager' component={Manager}></Route>
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
