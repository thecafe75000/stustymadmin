import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
  return (
    <div className="about container">
      <h1 className="page-header">Guide d'emploi</h1>
      <p>Se familiariser avec l'utilisation de React et React Router à travers cet exercice</p>
      <p>Contact:</p>
      <NavLink to="/about/email" className="navigation">Email</NavLink>
      <NavLink to="/about/tel" className="navigation">Phone number</NavLink>
      {/* Outlet是子路由对应的组件渲染位置 */}
      <Outlet/>  
    </div>
  )
}

export default About
