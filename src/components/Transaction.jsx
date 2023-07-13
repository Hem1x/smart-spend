import React from 'react'
import { incomeIcon, outgoingIcon } from '../assets/mainPage'
import { numberWithSpaces } from '../utils'

const Transaction = ({tranc}) => {
  if(tranc === undefined) {
    return
  }

  const trancObj = tranc.type === 'INCOME' ? {
    color: 'text-income',
    sign: '+',
    image: incomeIcon,
  } : {
    color: 'text-outgoing',
    sign: '-',
    image: outgoingIcon,
  }

  const hours = tranc.date.hours
  const minutes = tranc.date.minutes

  return (
    <li className='flex justify-between items-center shadow-sm mb-6'>
        <div className='flex text-left'>
            <img className='mr-3' src={trancObj.image} alt="income icon" />

            <div>
              <h1 className={`${trancObj.color} font-bold text-base xl:text-xl`}>{tranc.name.split(' ')[0]}</h1>
              <p className='text-sm opacity-50'>{tranc.date.day} {tranc.date.month.toLowerCase()}, {hours}:{minutes}</p>
            </div>
        </div>
        <div className={`text-right ${trancObj.color}`}>
            <h1 className='font-bold text-base xl:text-xl'>{trancObj.sign} {numberWithSpaces(tranc.sum)}</h1>
            <p>RUB</p>
        </div>
    </li>
  )
}

export default Transaction