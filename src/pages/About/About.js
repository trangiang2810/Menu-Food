import React from 'react'
import { Link } from 'react-router-dom'
import './about.scss'
import banner from '../../assets/img/about.jpg'
import jap from '../../assets/img/jap_2.png'
import icon from '../../assets/img/icon_sakura.png'
import line from '../../assets/img/line.png'
import Evaluate from '../../components/Evaluate/Evaluate'
// import Video from '../../assets/img/24 Hours With A Michelin Star Sushi Chef- Sushi Kimura.mp4'

const About = () => {
  return (
    <section className='section__about'>
        <h1 className='title1'>About Us</h1>
        <div className='link'>
          <p>
            <Link to='/'>
              <span>HOME</span>
            </Link>
            <span>/</span>
            <Link to='#'>
              <span>ABOUT US</span>
            </Link>
          </p>
        </div>

        <div className='wrapper__intro'>
          <img src={banner} alt="" />
          <div className='wrapper__intro-item'>
            <img className='img__icon' src={icon} alt="" />
            <div className='content'>
              <h2>History</h2>
              <span>
                Sakura Restaurant opened in 2010 and still delights guests with 
                authentic Japanese cuisine. Kazuki Murakami's chef has been working 
                in the kitchen since the age of 17. For over 30 years he has honed 
                his skills in Japan.
              </span>
            </div>
            <div className='content'>
              <h2>Philosophy</h2>
              <span>
              In our restaurant we try to show you all the variety of Japanese 
              cuisine and its current trends. We reveal the best taste of 
              ingredients carefully selected by us. Most of the food items are 
              sourced directly from Japan.
              </span>
            </div>
            {/* <img className='block' src={jap} alt="" /> */}
          </div>
        </div>

        <div className='intro-food'>
          <img className='line' src={line} alt="" />
          <h2>“Sushi is not only one of the most famous dishes of the Land of the Rising Sun, but above all an expression of ancient history.”</h2>
          <span>Kazuki Murakami</span>
        </div>

        <Evaluate />
    </section>
  )
}

export default About