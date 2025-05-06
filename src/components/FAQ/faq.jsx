import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import './faq.css'

function faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className='faq'>
        <div className="container faq__container">
            <div className="faq__left">
                <h2 className="faq__title">FAQ</h2>
            </div>
            <div className="faq__right">
                <div className="right__box">
                    <h3 className="faq__subtitle">Kursdan nima topaman</h3>
                    {[1].map((n, i) => (
                    <div key={i}>
                    <button onClick={() => toggle(i)}><IoIosArrowDown className="icon"/></button>
                    {openIndex === i && <p>Javob - Bu savolning javobi.</p>}
                    </div>
                    ))} 
                </div>                                           
                <div className="right__box">
                    <h3 className="faq__subtitle">Kursdan nima topaman</h3>
                    {[1].map((n, i) => (
                    <div key={i}>
                    <button onClick={() => toggle(i)}><IoIosArrowDown className="icon"/></button>
                    {openIndex === i && <p>Javob - Bu savolning javobi.</p>}
                    </div>
                    ))} 
                </div>                                           
                <div className="right__box">
                    <h3 className="faq__subtitle">Kursdan nima topaman</h3>
                    {[1].map((n, i) => (
                    <div key={i}>
                    <button onClick={() => toggle(i)}><IoIosArrowDown className="icon"/></button>
                    {openIndex === i && <p>Javob - Bu savolning javobi.</p>}
                    </div>
                    ))} 
                </div>                                           
            </div>
        </div>
    </div>
    </>
  );
}
export default faq