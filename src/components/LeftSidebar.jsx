import React from 'react'
import {logo, dashboard, budget, news} from '../assets/mainPage'

const LeftSidebar = () => {
  return (
    <div className='bg-secondary text-white max-w-[352px] h-full fixed z-1 top-0 left-0 px-7 pt-8'>
        <img className='mb-12' src={logo} alt="logo" />

        <div className='w-max-[272px] rounded-xl bg-balance px-5 py-4 text-center mb-[60px]'>
        <h3 className='text-[20px]'>Ваши средства:</h3>
        <span className='text-balanceText text-[38px] font-bold'>78 506, 53 ₽</span>
        </div>

        <div>
            <ul className='flex flex-col gap-6 text-[22px] font-light'>
                <li className='flex items-center'>
                    <img className='mr-4' src={dashboard} alt="dashboard" />
                    <h2>Панель управления</h2>
                </li>

                <li className='flex items-center cursor-pointer'>
                    <img className='mr-4' src={budget} alt="budget" />
                    <h2>Бюджетирование</h2>
                </li>

                <li className='flex items-center cursor-pointer'>
                    <img className='mr-4' src={news} alt="news" />
                    <h2>Новостной блог</h2>
                </li>
            </ul>
        </div>
    </div>

  )
}

export default LeftSidebar