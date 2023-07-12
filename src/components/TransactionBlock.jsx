import React from 'react'
import { incomeIcon, outgoingIcon } from '../assets/mainPage'
import { numberWithSpaces } from '../utils'

const TransactionBlock = ({tranc}) => {
    if(tranc === undefined) {
        return
    }

    const isIncome =  tranc.type === 'INCOME' ? true : false

    const trancObj = isIncome ? {
        name: tranc.name,
        sum: tranc.sum,
        color: 'income',
        image: incomeIcon,
        sign: '+'

    } : {
        name: tranc.name,
        sum: tranc.sum,
        color: 'outgoing',
        image: outgoingIcon,
        sign: '-'
    }

  return (
    <div className='bg-secondary bg-opacity-40 rounded-xl px-4 py-2 mb-5 shadow-modalShadow'>
        <div className='flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between items-center'>
            <div className='flex flex-col gap-3 sm:gap-0 sm:flex-row items-center'>
                <img className='mr-0 sm:mr-5' src={trancObj.image} alt="icon" />
                <h1 className={`font-bold text-2xl ${'text-' + trancObj.color}`}>{trancObj.name}</h1>
            </div>
            <div>
                <h1 className={`${'text-' + trancObj.color}`}>{trancObj.sign} {numberWithSpaces(trancObj.sum)} RUB</h1>
            </div>
            <span className='opacity-50 text-sm'>{tranc.date.day} {tranc.date.month.toLowerCase()}, {tranc.date.hours}:{tranc.date.minutes}</span>
        </div>
    </div>
  )
}

export default TransactionBlock