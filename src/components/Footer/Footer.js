import React from 'react'
import './footer.scss'
import { FiMail, FiClock, FiPhone, FiMap } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import icon from '../../assets/img/icon_sakura.png'

const Footer = () => {
  return ( 
    <footer>
      {/* <img  src={icon} alt="" /> */}
      <div className='bookTable'>
        <h1>Do you want to feel the atmosphere of Japanese cuisine?</h1>
        <Link to='/resevation'>
          <button className='btn__buy'>BOOK A TABLE</button>
        </Link>
      </div>
      <div className='footer__wrapper'>
        <div className='footer__wrapper-item'>
          <FiPhone className='icon' />
          <span><a href="tel:718-257-7631">718-257-7631</a></span>
        </div>
        <div className='footer__wrapper-item'>
          <FiMail className='icon' />
          <span><a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></span>
        </div>
        <div className='footer__wrapper-item'>
          <FiMap className='icon' />
          <span><a href="https://goo.gl/maps/MATGQRxQ4fFDrQ2H9"> 9287 Merry Falls, NY</a></span>
        </div>
        <div className='footer__wrapper-item'>
          <FiClock className='icon' />
          <span>Mon-Sun  9:00 am - 10:00 pm</span>
        </div>
      </div>
      <ul>
        <li>
          <a href='https://www.instagram.com/'>INSTAGRAM</a>
        </li>
        <li>
          <a href='https://www.facebook.com/'>FACEBOOK</a>
        </li>
        <li>
          <a href='https://www.tripadvisor.com/'>TRIPADVISOR</a>
        </li>
      </ul>
      <p>
        <a href="https://www.youtube.com/watch?v=kEtcBpaM_l8" target="_blank">© 2023 Julia Povarkova, All Rights Reserved</a></p>
    </footer>
  )
}

export default Footer