import React from 'react'
import {logo, dashboard, budget, news} from '../assets/mainPage'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { numberWithSpaces } from '../utils'

const LeftSidebar = () => {
    const balance = useSelector(state => state.finance.income) - useSelector(state => state.finance.expense)

    return (
        <div className='bg-secondary text-white w-fit h-full px-7 pt-8'>
            {/* logo */}
            <Link to="/dashboard">
                <img className='mb-12' src={logo} alt="logo" />
            </Link>


            {/* balance */}
            <div className='w-72 rounded-xl bg-balance px-5 py-4 text-center mb-[60px]'>
            <h3 className='text-[20px]'>Ваши средства:</h3>
            <span className='text-balanceText text-[38px] font-bold'>{numberWithSpaces(balance)} ₽</span>
            </div>

            {/* control panel */}
            <div className='flex flex-col gap-6 text-[22px] font-light'>
                <Link to='/dashboard' className='flex items-center'>
                    <img className='mr-4' src={dashboard} alt="dashboard" />
                    <h2>Панель управления</h2>
                </Link>

                <Link to='/budget' className='flex items-center cursor-pointer'>
                    <img className='mr-4' src={budget} alt="budget" />
                    <h2>Бюджетирование</h2>
                </Link>

                <Link to='/advices' className='flex items-center cursor-pointer'>
                    <img className='mr-4' src={news} alt="news" />
                    <h2>Новостной блог</h2>
                </Link>
            </div>
        </div>

    )
}

export default LeftSidebar