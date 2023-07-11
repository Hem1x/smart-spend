import React from 'react'
import { incomeIcon } from '../../assets/mainPage'

const PositiveTranc = () => {
  return (
    <li className='flex justify-around items-center shadow-sm mb-6'>
        <img src={incomeIcon} alt="income icon" />
        <div className='text-left'>
            <h1 className='text-income font-bold text-xl'>Зарплата</h1>
            <p className='text-sm opacity-50'>21 марта, 09:21</p>
        </div>
        <div className='text-right text-income'>
            <h1 className='font-bold text-xl'>+ 124 500</h1>
            <p>RUB</p>
        </div>
    </li>
  )
}

export default PositiveTranc