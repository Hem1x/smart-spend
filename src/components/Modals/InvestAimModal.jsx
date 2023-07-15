import React, { useState } from 'react'
import ModalWindow from '../ModalWindow'
import { useSelector, useDispatch } from 'react-redux'
import { refillAim, closeModalForm } from '../../features/Aims/aimSlice'
import { decreaseBalance } from '../../features/Finances/financeSlice'
import { addTransaction } from '../../features/History/historySlice'
import { addExpense } from '../../features/Finances/financeSlice'
import { numberWithSpaces } from '../../utils'

const InvestAimModal = ({aim}) => {
  const dispatch = useDispatch()
  const balance = useSelector(state => state.finance.income) - useSelector(state => state.finance.expense)
  const [value, setValue] = useState('')

  const [error, setError] = useState('');

  const refill = (e, value) => {
    e.preventDefault()

    if(Number(value) > 0 && Number(value) <= balance) {
      dispatch(refillAim({id: aim.id, sum: value}))
      dispatch(decreaseBalance(value))
      dispatch(addExpense(Number(value)))
      dispatch(addTransaction({
        name: aim.name, 
        sum: value, 
        type: "EXPENSE"
      }))
      dispatch(closeModalForm(aim.id))
      setError('')
    } else {
      setError('У вас недостаточно средств')
    }
  }
  return (
    <ModalWindow title={aim.name} width='352px' id={aim.id}>  
      <form onSubmit={(e) => refill(e, value)}>
          <div className='bg-gray-200 py-2 px-5 rounded-full mb-4 relative'>
              <input
                required
                autoFocus
                type='text'
                maxLength={10}
                onChange={(e) => setValue(e.target.value)}
                className='bg-transparent w-full text-gray-100' 
                placeholder='Введите сумму'
              />

              {value && <h1 className='absolute left-4 top-2'>{numberWithSpaces(Number(value))} ₽</h1>}
          </div>
          
          <button
              type='submit'
              className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full mb-3  hover:scale-105 transition-all duration-200'
          >
              Пополнить
          </button>

          {error && <p className='text-red-600 text-center'>{error}</p>}
      </form>
    </ModalWindow>
  )
}

export default InvestAimModal