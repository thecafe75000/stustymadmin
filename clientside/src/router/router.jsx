import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import AddOrEdit from '../components/AddOrEdit'
import Detail from '../components/Detail'
import Email from '../components/Email'
import Tel from '../components/Tel'


function Router() {
  return useRoutes([
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />,
      children: [
        {
          path: 'email', //? 因为是子路由，路径会自动拼接到/about后面
          element: <Email />
        },
        {
          path: 'tel',
          element: <Tel />
        },
        {
          path: '',
          element: <Navigate to='email' />
        }
      ]
    },
    {
      path: '/add',
      element: <AddOrEdit />
    },
    {
      path: '/detail/:id',
      element: <Detail />
    },
    {
      path: '/edit/:id',
      element: <AddOrEdit />
    },
    {
      path: '/',
      element: <Navigate to='/home' />
    }
  ])

}

export default Router