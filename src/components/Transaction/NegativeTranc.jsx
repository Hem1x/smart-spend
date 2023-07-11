import React from 'react'
import { outgoing } from '../../assets/mainPage'

const NegativeTranc = () => {
  return (
    <li className='flex justify-around items-center shadow-sm mb-6'>
        <img src={outgoing} alt="income icon" />
        <div className='text-left'>
            <h1 className='text-outgoing font-bold text-xl'>Продукты</h1>
            <p className='text-sm opacity-50'>21 марта, 09:21</p>
        </div>
        <div className='text-right text-outgoing'>
            <h1 className='font-bold text-xl'>- 12 500</h1>
            <p>RUB</p>
        </div>
    </li>
  )
}

export default NegativeTranc