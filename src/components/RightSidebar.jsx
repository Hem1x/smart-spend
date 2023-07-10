import React from 'react'
import { icon, incomeIcon, outgoing } from '../assets/mainPage'

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
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar