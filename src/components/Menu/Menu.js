import React from 'react'
import './menu.scss'
import img1 from '../../assets/img/img_01.jpg'
import img2 from '../../assets/img/img_02.jpg'
import img3 from '../../assets/img/img_03.jpg'
import img4 from '../../assets/img/img_04.jpg'
import img5 from '../../assets/img/img_05.jpg'
import img6 from '../../assets/img/img_06.jpg'
import icon from '../../assets/img/icon_sakura.png'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'
// import dot from '../../assets/img/dot.png'


const menuData =[
  {
    id: 1,
    name: 'Ebi curry udon',
    price:9.54,
    content: 'Tempura shrimp, udon noodles, curry, green onions',
    weight: 320/180,
  },
  {
    id: 2,
    name: 'Pork ribs',
    price: 6.76,
    content: 'Pork ribs, potatoes, rice with vegetables, miso soup.',
    weight: 320/180,
  },
  {
    id: 3,
    name: 'Teppan kimchi chicken',
    price:10.24,
    content: 'Chicken, kimchi cabbage, soy sprouts, green onions, egg.',
    weight: 320/180,
  },
  {
    id: 4,
    name: 'Udon set with duck',
    price:8.29,
    content: 'Udon noodles, duck, cabbage, green onions, Yuzu citrus.',
    weight: 590/150,
  },
  {
    id: 5,
    name: 'Gratin with sea bass',
    price:6.85,
    content: 'Sea bass, bacon, gratin sauce, mushrooms, onion.',
    weight: 230/180,
  },
  {
    id: 6,
    name: 'Lunch mackerel miso',
    price:11.52,
    content: 'TMackerel, rice, zukemono, chuka salad, miso soup.',
    weight: 150/180,
  },
  {
    id: 7,
    name: 'Set of pork yakininku',
    price:8.65,
    content: 'Pork in ginger sauce, mayonnaise sauce, zukemno, salad.',
    weight:160/180,
  },
  {
    id: 8,
    name: 'Pasta with shrimps',
    price:7.54,
    content: 'Spaghetti, cream sauce, tomato sauce, shrimps, garlic.',
    weight:310/180,
  },
  {
    id: 9,
    name: 'Sushi set',
    price:9.74,
    content: 'Sushi, Tempura dragon roll, Spayshi shima-aji sankaku roll.',
    weight:120/100,
  },
  {
    id: 10,
    name: 'Doria with shrimps',
    price:10.86,
    content: 'Shrimps, cheese, béchamel sauce, tomato sauce.',
    weight: 320/180,
  },
  {
    id: 11,
    name: 'Tonkatsu set',
    price:5.69,
    content: 'Breaded pork, mix salad, mustard sauce, tonkatsu sauce.',
    weight: 200/180,
  },
  {
    id: 12,
    name: 'Vegetable saute lunch',
    price:8.29,
    content: 'Fried vegetables, rice with vegetables, miso soup.',
    weight:200/180 ,
  },
]

const Menu = () => {
  return (
    <section>
      <div>
        <Title title={'Menu'} />
        <div className='menu__item'>
          <div className='menu__image'>
            <img src={img1} alt="" />
            <Link to='/menu'>
              <span>Sushi & Sashimi</span>
            </Link>
          </div>
          <div className='menu__image'>
            <img src={img2} alt="" />
            <Link to='/menu'>
              <span>Rolls</span>
            </Link>
          </div>
          <div className='menu__image'>
            <img src={img3} alt="" />
            <Link to='/menu'>
              <span>Lunch</span>
            </Link>
          </div>
          <div className='menu__image'>
            <img src={img4} alt="" />
            <Link to='/menu'>
              <span>Snacks & Salads</span>
            </Link>
          </div>
          <div className='menu__image'>
            <img src={img5} alt="" />
            <Link to='/menu'>
              <span>Hot Meals</span>
            </Link>
          </div>
          <div className='menu__image'>
            <img src={img6} alt="" />
            <Link to='/menu'>
              <span>Teas</span>
            </Link>
          </div>
        </div>



        <div className='menu__wrapper'>
            <Title title={'Special Menu'} />
            <div className='menu'>
            {
              menuData.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className='menu__list-name'>
                      <h3>{item.name}</h3>
                      {/* <img src={dot} alt="" /> */}
                      <h3>${item.price}</h3>
                    </div>
                    <div className='menu__list-content'>
                      <span>{item.content}</span>
                      <span>320/180 g</span>
                    </div>
                  </div>

                )
              })
            }
             </div>
          </div>
        </div>
    </section>
  )
}

export default Menu