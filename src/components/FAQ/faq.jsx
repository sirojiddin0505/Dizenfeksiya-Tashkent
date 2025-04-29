import React from 'react'
import './faq.css'
import  faq1 from '../images/faq.svg'

const faq = () => {
  return (
    <div className='faq'>
        <hr className='hr'></hr>
        <div className="container faq__container">
            <div className="faq__left">
                <h2 className="faq__title">FAQ</h2>
            </div>
            <div className="faq__right">
                <span className="faq__span">
                    <h3 className="faq__subtitle">Kursdan nima topaman</h3>
                    <img src={faq1} alt="" className='faq__img'/>
                </span>
                <hr></hr>
                <span className="faq__span">
                    <h3 className="faq__subtitle">Kursdan nima topaman</h3>
                    <img src={faq1} alt="" className='faq__img'/>
                </span>
                <hr></hr>
                <span className="faq__span">
                    <h3 className="faq__subtitle">Kursdan nima topaman</h3>
                    <img src={faq1} alt="" className='faq__img'/>
                </span>
                <hr></hr>
            </div>
        </div>
    </div>
  )
}

export default faq