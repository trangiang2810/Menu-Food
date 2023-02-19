import React, { useState } from 'react'
import './resevation.scss'
import icon1 from '../../assets/img/sakura_l.png'
import icon2 from '../../assets/img/sakura_r.png'
import {toast} from 'react-toastify'

const Resevation = () => {
  const[name, setName] = useState('')
  const[phone, setPhone] = useState('')
  const[guests, setGuests] = useState('')
  const[date, setDate] = useState('')
  const[time, setTime] = useState('')


  const[error, setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(name.length==0 || phone.length==0 || guests.length==0 || date.length==0 ||time.length==0){
      setError(true)
    }else{

      toast.success('successful table reservation')
    }
    console.log(name,phone)
  }

  return (
    <section id="resevation" className='section__resevation'>
        <h1 className='resevation__title'>Reservation</h1>
        <form onSubmit={handleSubmit} className='resevation__wrapper-input'>
          <div className='ip__buy'>
            <input className={error && name.length<=0 ?'er' : ''} onChange={e=>setName(e.target.value)} type="text" placeholder='Name' />
          </div>
          <div className='ip__buy'>
            <input className={error && phone.length<=0 ?'er' : ''} onChange={e=>setPhone(e.target.value)} type="number" placeholder='Phone' />
          </div>
          <div className='ip__buy'>
            <input className={error && guests.length<=0 ?'er' : ''} min='0' onChange={e=>setGuests(e.target.value)} type="number" placeholder='Guests' />
          </div>
          <div className='ip__buy'>
            <input className={error && date.length<=0 ?'er' : ''} onChange={e=>setDate(e.target.value)} type="text" placeholder='Date' />
          </div>
          <div className='ip__buy'>
            <input className={error && time.length<=0 ?'er' : ''} onChange={e=>setTime(e.target.value)} type="text" placeholder='Time' />
          </div>

          <div className='btn__buy'>
            <button type='submit' >Submit</button>
          </div>
            
        </form>
    </section>
  )
}

export default Resevation