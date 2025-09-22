import React from 'react'

const ModalPage = ({show, onClose}) => {
    if(!show) return null;
  return (
    <div className='fixed inset-0 flex justify-center items-center z-100 bg-black/30'
        onClick={onClose}>
        <div className='backdrop-blur-md shadow-lg rounded-lg modal-div bg-white/60 w-[370px]'
        onClick={(e) => e.stopPropagation()}>
        <form>
            <label className='text-sm mb-2'>Ismingiz</label>
            <input type="text" placeholder='Ismingizni kiriting' required                 className='border border-gray-400 focus:border-gray-600 focus:bg-white/30  text-sm w-full outline-none rounded-lg modal-input '/>
            <label className='text-sm mb-2'>Raqamingiz</label>
            <input type="tel" placeholder='Raqamingizni kiriting' required 
            className='border border-gray-400 focus:border-gray-600 focus:bg-white/30 text-sm w-full outline-none rounded-lg modal-input '/>
            <label className='text-sm mb-2'>Hududingiz</label>
            <input type="text" placeholder='Manzilingizni kiriting' required 
            className='border border-gray-400 focus:border-gray-600 focus:bg-white/30 text-sm w-full outline-none rounded-lg modal-input '/>
            <label className='text-sm mb-2'>Sana</label>
            <input type="date" placeholder='Qaysi kuni hizmatimizdan foydalanmoqchisiz' required 
            className='border border-gray-400 focus:border-gray-600 focus:bg-white/30 text-sm w-full outline-none rounded-lg modal-input '/>
            <button type='submit' className='w-full bg-blue-600 text-white rounded-lg modal-btn cursor-pointer hover:bg-blue-500'>Yuborish</button>
        </form>
        </div>
    </div>
  )
}

export default ModalPage