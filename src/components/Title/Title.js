import React from 'react'
import './title.scss'
import icon from '../../assets/img/icon_sakura.png'


const Title = ({title}) => {
  return (
    <div className='title__wrapper'>
          <h1 className='title'>{title}</h1>
          <img src={icon} alt="" />
        </div>
  )
}

export default Title