import React from 'react'
import './events.scss'
import icon from '../../assets/img/icon_sakura.png'
import { Link } from 'react-router-dom'
import { eventData } from '../../assets/data/data'
import Title from '../Title/Title'


const Events = () => {
  return (
    <section className='event__container'>
        <Title title={'Events'} />
        <div className='event__wrapper'>
          {
            eventData.map((item,index)=>(
              <div key={index} className='event__item'>
                <img src={item.image} alt="" />
                <div className='event__item-info'>
                  <p>{item.time}</p>
                  <h3>{item.title}</h3>
                  <span>{item.content}</span>
                  <Link to={`/event/${item.id}`}>READ MORE</Link>
                </div>
              </div>
            ))
          }
        </div>
        <Link to='/events'>
            <h4>VIEW ALL</h4>
        </Link>
    </section>
  )
}


export default Events