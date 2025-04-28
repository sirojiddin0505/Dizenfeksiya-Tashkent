import React from 'react'
import './service.css'
import service1 from '../images/service1.svg'
import service2 from '../images/service2.svg'
import service3 from '../images/service3.svg'

const service = () => {
  return (
    <div className='service'>
        <div className="container service__container">
            <h2 className="service__title">Service</h2>
            <p className="service__texts">Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>
            <ul className="service__list">
                <li className="service__item">
                    <h3 className="item__title">Boshlang'ich tushunchalar</h3>
                    <p className="service__text">Nazariy bilimlar</p>
                    <p className="item__text">16 dars</p>
                    <img src={service1} alt="" className="service__img" />
                </li>
                <li className="service__item">
                    <h3 className="item__title title">O'rta</h3>
                    <p className="service__text"> Nazariy va Amaliy bilimlar</p>
                    <p className="item__text">16 dars</p>
                    <img src={service2} alt="" className="service__img" />
                </li>
                <li className="service__item">
                    <h3 className="item__title title">Yuqori</h3>
                    <p className="service__text">Amaliy bilimlar</p>
                    <p className="item__text">16 dars</p>
                    <img src={service3} alt="" className="service__img" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default service