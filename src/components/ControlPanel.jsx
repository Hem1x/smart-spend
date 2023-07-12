import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { numberWithSpaces } from '../utils' 
import {dashboard, budget, news} from '../assets/mainPage'
import { history } from '../assets'

const ControlPanel = ({setIsMenuActive, hadnleClose}) => {
    const balance = useSelector(state => state.finance.balance)

  return (
    <div>
            {/* balance */}
            <div className='w-full rounded-xl bg-balance px-5 py-4 text-center mb-14'>
                <h3 className='text-md xl:text-xl mb-1 xl:mb-2'>Ваши средства:</h3>
                <span className='text-balanceText text-2xl xl:text-3xl font-bold'>{numberWithSpaces(balance)} ₽</span>
            </div>

            {/* control panel */}
            <div className='flex flex-col gap-6 text-md xl:text-xl font-light'>
                <NavLink to='/' className='sidebar-link' onClick={hadnleClose}>
                    <img className='mr-3 xl:mr-4' src={dashboard} alt="dashboard" />
                    <h2>Панель управления</h2>
                </NavLink>

                <NavLink to='/budget' className='sidebar-link' onClick={hadnleClose}>
                    <img className='mr-3 xl:mr-4' src={budget} alt="budget" />
                    <h2>Бюджетирование</h2>
                </NavLink>

                <NavLink to='/advices' className='sidebar-link' onClick={hadnleClose}>
                    <img className='mr-3 xl:mr-4' src={news} alt="news" />
                    <h2>Новостной блог</h2>
                </NavLink>

                <NavLink to='/history' className='block lg:hidden sidebar-link' onClick={hadnleClose}>
                    <img className='mr-3 xl:mr-4' src={history} alt="news" />
                    <h2>История</h2>
                </NavLink>
            </div>
    </div>
  )
}

export default ControlPanel