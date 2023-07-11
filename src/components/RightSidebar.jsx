import React from 'react'
import { icon } from '../assets/mainPage'
import PositiveTranc from './Transaction/PositiveTranc'
import NegativeTranc from './Transaction/NegativeTranc'

const RightSidebar = () => {
  return (
    <div className='bg-secondary text-white text-center w-fit h-full px-7 pt-8 relative'>
        {/* Гость */}
        <div className='bg-primary px-24 py-4 rounded-xl mb-7'>
            <div className='flex flex-col items-center'>
                <img className="mb-2" src={icon} alt="" />
                <p className='text-[26px] font-bold'>Гость</p>
                <p className='text-[17px] opacity-50'>email</p>
            </div>
        </div>

        <p className='text-[26px] font-semibold mb-6'>История действий</p>

        {/* История действий */}
        <div className='bg-bgHistory absolute left-0 right-0 px-5'>
            <div className='mt-6'>
                {/* Список действий */}
                <ul>
                    {/* Транзакция */}
                    <PositiveTranc />
                    <NegativeTranc />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar