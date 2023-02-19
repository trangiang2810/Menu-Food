import React, { useRef } from 'react'
import './navbar.scss'
import { BsList } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'
import logo1 from '../../assets/img/logo_1.png'
import logo2 from '../../assets/img/logo_2.png'

const Navbar = () => {
  const nav__links = [
    {
      path: '/',
      display: 'HOME' 
    },
    {
      path: '/menu',
      display: 'MENU'
    },
    {
      path: '/resevation',
      display: 'RESEVATION'
    },
    {
        path: '/about',
        display: 'ABOUT US'
    },
    {
      path: '/pages',
      display: 'PAGES'
  },
  {
    path: '/contact',
    display: 'CONTACT US'
  },
  ]

  const menuRef = useRef(null)
  
  const menuToggle = () => menuRef.current.classList.toggle('active')
  return (
    <div className='nav__wrapper'> 
        <div className='logo'>
            <div>
              <Link to='/'>
                <img className='logo1' src={logo1} alt="" />
                <img src={logo2} alt="img" />
              </Link>
            </div>
            <Link to='/'>
              <div className='logo__item'>
                      <h1>Sakura</h1>
                  <p>Japanese Restaurant</p>
              </div>
            </Link>
        </div>
        
        <div>
          <ul className='nav__menu' ref={menuRef} onClick={menuToggle}>
            {nav__links.map((item,index)=>(
              <li key={index}>
                <NavLink  className={(navClass)=> navClass.isActive ? 'line' : ''} to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
          <BsList className='btn__list' onClick={menuToggle} />
        </div>
    </div>
  )
}


export default Navbar