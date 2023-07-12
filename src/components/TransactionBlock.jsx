import React from 'react'
import { incomeIcon, outgoingIcon } from '../assets/mainPage'

const TransactionBlock = ({tranc}) => {
    if(tranc === undefined) {
        return
    }

    const isIncome =  tranc.type === 'INCOME' ? true : false

    const trancObj = isIncome ? {
        name: tranc.name,
        sum: tranc.sum,
        color: 'bg-income',
        image: incomeIcon,
        sign: '+'

    } : {
        name: tranc.name,
        sum: tranc.sum,
        color: 'bg-outgoing',
        image: outgoingIcon,
        sign: '-'
    }

  return (
    <div className='bg-secondary bg-opacity-40 rounded-xl px-4 py-2 mb-5 shadow-modalShadow'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='mr-5' src={trancObj.image} alt="icon" />
                <h1 className='font-bold'>{trancObj.name}</h1>
            </div>
            <div>
                <h1>{trancObj.sign} {trancObj.sum} RUB</h1>
            </div>
            <span className='opacity-50 text-sm'>{tranc.date.day} {tranc.date.month.toLowerCase()}, {tranc.date.hours}:{tranc.date.minutes}</span>
        </div>
    </div>
  )
}

export default TransactionBlock