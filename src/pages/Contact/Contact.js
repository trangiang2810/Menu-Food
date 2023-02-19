import React, { useState } from 'react'
import './contact.scss'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'


const Contact = () => {

  const [name, setName] = useState('')
  const[email, setEmail]  = useState('')
  const[error, setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(name.length==0 || email.length==0){
      setError(true)
    }else{
      toast.success('successful')
    }
  }
  return (
    <section className='contact'>
       <h1 className='title1'>Contact Us</h1>
        <div className='link'>
          <p>
            <Link to='/'>
              <span>HOME</span>
            </Link>
            <span>/</span>
            <Link to='#'>
              <span>CONTACT US</span>
            </Link>
          </p>
        </div>
        <div className='map'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8195484274365!2d105.87552541478405!3d20.999869394140166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeaa17c35b81%3A0x79d8becf2f06f8dc!2sHanoi%20University%20of%20Business%20and%20Technology!5e0!3m2!1sen!2s!4v1664460416572!5m2!1sen!2s"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">  
          </iframe>
        </div>
        <h2 className='title2'>Write to Us</h2>
          <form onSubmit={handleSubmit}> 
            <div className='contact__write'>  
              <input className={error && name.length<=0 ? 'er' : ''}  type='text' placeholder='Name' onChange={e=>setName(e.target.value)} />
              <input className={error && email.length<=0 ? 'er' : ''}  type='email' placeholder='Email' onChange={e=>setEmail(e.target.value)} />
              <textarea type='text' placeholder='Message' />
            </div>
            <div className='check'>
              <input type='checkbox' />
              <p>I agree with the terms and privacy policy</p>
            </div>
              <button className='btn__buy' type='submit'>SUBMIT</button>
          </form>
    </section>
  )
}

export default Contact