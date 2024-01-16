import { NavLink } from 'react-router-dom'
import RouteConfig from './router/router'

import "./css/App.css"

function App() {
  return (
    <div id='app' className='container'>
      {/* 导航栏 */}
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#navbar'
              aria-expanded='false'
              aria-controls='navbar'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div className='navbar-brand'>Student Management System</div>
          </div>
          <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <NavLink to='/home' className='navigation'>
                Home
              </NavLink>
              <NavLink to='/about' className='navigation'>
                About us
              </NavLink>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <NavLink to='/add' className='navigation'>
                Add user
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <div className='content'>
        <RouteConfig/>
      </div>
    </div>
  )
}

export default App


