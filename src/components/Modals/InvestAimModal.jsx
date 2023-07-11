import React, { useState } from 'react'
import ModalWindow from '../ModalWindow'
import { useSelector, useDispatch } from 'react-redux'

const InvestAimModal = ({title}) => {
  const balance = useSelector(state => state.finance.income) - useSelector(state => state.finance.expense)
  const [value, setValue] = useState(0)
  const IsBalanceNegative = balance <= 0

  // const refill = (e, id) => {

  // }

  return (
    <ModalWindow title={title} width='352px'>
      <form>
          <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
              <input className='bg-transparent w-full' type="number" placeholder='Введите сумму'/>
          </div>

          <button
              type='submit'
              className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full'
          >
              Отложить
          </button>
      </form>
    </ModalWindow>
  )
}

export default InvestAimModal