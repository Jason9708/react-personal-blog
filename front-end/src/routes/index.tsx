import React from 'react'
import { Redirect } from 'react-router-dom'
// import { RouteConfig } from 'react-router-config'

//** cmp
import Client from '../views/Client'
import Manager from '../views/Manager'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => ( <Redirect to={'/client'} /> )
    },
    {
        component: Client,
        path: '/client',
        exact: true,
    },
    {
        component: Manager,
        path: '/manager',
        exact: true,
    }
]

export default routes