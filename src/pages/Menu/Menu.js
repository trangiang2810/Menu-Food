import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
// import banner from '../../assets/img/about.jpg'
import { menuData } from '../../assets/data/data'


const Menu = () => {
  return (
    <section>
        <h1 className='title1'>Sushi & Sashimi</h1>
        <div className='link'>
          <p>
            <Link to='/'>
              <span>HOME</span>
            </Link>
            <span>/</span>
            <Link to='#'>
              <span>MENU</span>
            </Link>
          </p>
        </div>

        <div className='menu__container'> 
            <ul className='menu__list'>
                <li>Sushi & Sashimi</li>
                <li>Rolls</li>
                <li>Lunch</li>
                <li>Snacks & Salads</li>
                <li>Drinks</li>
            </ul>
            <div className='menu__items'>
                {
                    menuData.map((item,index)=>(
                      <div className='menu__food' key={index}>
                        <div className='menu__food-img'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='menu__food-intro'>
                            <p className='food-name'>
                                <span>{item.foodName}</span>
                                <span>${item.price}</span>
                            </p>
                            <p className='food-ingredient'>
                                <span>{item.ingredient}</span>
                                <span>{item.weight} g</span>
                            </p>
                        </div>
                    </div>   
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Menu