import React, { useEffect, useState } from 'react'
import style from 'styled-components'
import { Redirect } from 'react-router-dom'

const HomeWrapper = style.div`
    
`

interface Props {}

const Home: React.SFC<Props> = props => {
    const [isLogin, setLogin] = useState(localStorage.token)

    useEffect(() => {
    })

    return (
      <>
        {
          !isLogin ? (<Redirect to='/manager/login'/> ) : '' 
        }
        <HomeWrapper>
            I am Home
        </HomeWrapper>
      </>
    )
}


export default Home
