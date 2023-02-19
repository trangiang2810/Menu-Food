import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import jap from '../../assets/img/jap_1.png'
import ink from '../../assets/img/ink.png'
import imgBanner from '../../assets/img/banner.png'
import { GiThreeLeaves } from 'react-icons/gi'
import { FaFish } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'

const Header = () => {
  return (  
    <header>
        <div className='header'>
            <div className='header__img1'>
                <img src={imgBanner} alt="" />
            </div>
            <div className='header__wrapper'>
                <img src={jap} alt="" />
                <div className='header__item'>
                    <h1>Japanese Restaurant</h1>
                    <span>
                        We try to show you all the variety of Japanese cuisine and its current trends.
                    </span>
                    <a href='#resevation'>
                        <button className='btn__buy'>BOOK A TABLE</button>
                    </a>
                </div>
            </div>
        </div>
        <div className='service'>
        <div className='service-item'>
                <GiThreeLeaves className='service-icon' />
                <span>Authentic Cuisine</span>
            </div>
            <div className='service-item'>
                <FaFish className='service-icon' />
                <span>Authentic Cuisine</span>
            </div>
            <div className='service-item'>
                <TbTruckDelivery className='service-icon' />
                <span>Authentic Cuisine</span>
            </div>
        </div>
    </header>
  )
}

export default Header