import React, { useState } from 'react'
import ModalWindow from '../ModalWindow'
import { useSelector, useDispatch } from 'react-redux'
import { refillAim, closeModalForm } from '../../features/Aims/aimSlice'
import { decreaseBalance } from '../../features/Finances/financeSlice'

const InvestAimModal = ({aim}) => {
  const dispatch = useDispatch()
  const balance = useSelector(state => state.finance.income) - useSelector(state => state.finance.expense)
  const [value, setValue] = useState(0)

  const error = balance <= 0 ? 'У вас недостаточно средств' : ''

  const refill = (e, value) => {
    e.preventDefault()

    if(value > 0 && value <= balance && error === '') {
      dispatch(refillAim({id: aim.id, sum: value}))
      dispatch(decreaseBalance(value))
    }
    
    dispatch(closeModalForm(aim.id))
  }
  return (
    <ModalWindow title={aim.name} width='352px' id={aim.id}>  
      <form onSubmit={(e) => refill(e, value)}>
          <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
              <input
                required 
                type='number'
                onChange={(e) => setValue(e.target.value)}
                className='bg-transparent w-full' 
                placeholder='Введите сумму'/>
          </div>
          
          <button
              type='submit'
              className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full mb-3'
          >
              Отложить
          </button>

          {!!error.length && <p className='text-red-600 text-center'>{error}</p>}
      </form>
    </ModalWindow>
  )
}

export default InvestAimModal