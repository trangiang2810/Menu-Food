import React from 'react'
import './eventDetails.scss'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { eventData } from '../../assets/data/data'
import line from '../../assets/img/line.png'
import { BsCheck2Square } from 'react-icons/bs'

const EventsDetails = () => {

    const {id} = useParams()
    const events = eventData.find(item => item.id === parseInt(id) )
    const {image, time, title, content, content2, intro} = events
  return (
    <section className='ed__container'>
       <h1 className='title1'>Event Single</h1>
        <div className='link'>
          <p>
            <Link to='/'>
              <span>HOME</span>
            </Link>
            <span>/</span>
            <Link to='#'>
              <span>EVENTS</span>
            </Link>
          </p>
        </div>

        <div className='ed__wrapper'>
          <img className='ed__banner' src={image} alt="" />
          <div className='ed__item'>
            <div className='ed__item-content'>
              <p>{time}</p>
              <h3 className='content-title'>{title}</h3>
              <span>{content}</span>
              <span className='content2'>{content2}</span>
            </div>


            <div className='ed__intro'>
              <h5>{intro.food}</h5>
              <span>{intro.content1}</span>
            </div>
            <div  className='ed__intro'>
              <h5>{intro.title}</h5>
              <span>{intro.content2}</span>
              <div className='ed__check'>
                <BsCheck2Square />
                <span>{intro.suggest1}</span>
              </div>
              <div className='ed__check'>
                <BsCheck2Square />
                <span>{intro.suggest2}</span>
              </div>
              <div className='ed__check'>
                <BsCheck2Square />
                <span>{intro.suggest3}</span>
              </div>
              <div className='ed__check'>
                <BsCheck2Square />
                <span>{intro.suggest4}</span>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default EventsDetails 