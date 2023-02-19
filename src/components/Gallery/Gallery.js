import React, { useState } from 'react'
import './gallery.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import icon from '../../assets/img/icon_sakura.png'
import img1 from '../../assets/img/img_07.jpg'
import img2 from '../../assets/img/img_08.jpg'
import img3 from '../../assets/img/img_09.jpg'
import img4 from '../../assets/img/img_10.jpg'
import img5 from '../../assets/img/img_11.jpg'
import img6 from '../../assets/img/img_12.jpg'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'

const Gallery = () => {
    const imageData =[
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        },
        {
            image: img4
        },
        {
            image: img5
        },
        {
            image: img6
        },
    ]
    const [slideNumber, setSlideNumber] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = (index) => {
        setSlideNumber(index)
        setIsOpen(true)
    }

    const handleSlide = (direction)=>{
        let newSlideNumber
        if(direction === 'l'){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
        
    }
    // setTimeout(handleSlide, 2000);

    

  return (
    <section>
        {isOpen && 
            <div className='slider'>
                <IoClose className='close' onClick={()=>setIsOpen(!isOpen)} />
                <FaArrowLeft className='btn' onClick={()=>handleSlide('l')} />
                <div onClick={()=>setIsOpen(!isOpen)} >
                    <img src={imageData[slideNumber].image} alt="" />
                </div>
                <FaArrowRight className='btn' onClick={()=>handleSlide('r')} />
            </div>
        }
            <Title title={'Gallery'} />

        <div className='image__wrapper'>
            {imageData.map((item,index)=>(
                    <div key={index}>
                        <img onClick={()=>handleOpen(index)} src={item.image} alt="" />
                    </div>
                )
            )}
        </div>
        <Link to='/gallery'>
            <h4>VIEW ALL</h4>
        </Link>

    </section>
  )
}

export default Gallery