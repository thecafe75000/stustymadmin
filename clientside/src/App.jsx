import { Navigate, NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Add from './components/Add'
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
              <NavLink to='/home' className="navigation">Home</NavLink>
              <NavLink to='/about' className="navigation">About us</NavLink>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <NavLink to='/add' className="navigation">Add user</NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <div className='content'>
        {/* 匹配上的路由所对应的组件显示在这里 */}
        <Routes>
          {/* 在Route组件中书写对应的路由，以及路由所对应的组件 */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/add' element={<Add />} />
          {/* 根路径显示Home组件, 使用Navigate组件进行重定向*/}
          <Route path='/' element={<Navigate replace to='/home' />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
