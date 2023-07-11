import React, {useState} from 'react'
import ModalWindow from '../ModalWindow'
import { useDispatch } from 'react-redux'
import { addExpense, addIncome } from '../../features/Finances/financeSlice'
import { closeAll } from '../../features/Modal/modalSlice'

const InComeExpenseModal = ({title}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const addFinance = (e, value) => {
        e.preventDefault()
        if (title === 'Доходы') {
            dispatch(addIncome(Number(value)))
        } else {
            dispatch(addExpense(Number(value)))
        }
        dispatch(closeAll())
    }

    return (
        <>
            <ModalWindow title={title} width='352px'>
                <form onSubmit={(e) => addFinance(e, value)}>
                    <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
                        <input
                            className='bg-transparent w-full' 
                            type="number" 
                            placeholder='Введите сумму'
                            onChange={(e) => setValue(e.target.value)}
                            />
                    </div>

                    <button
                        type='submit'
                        className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full'
                    >
                        Добавить
                    </button>
                </form>
            </ModalWindow>
        </>
  )
}

export default InComeExpenseModal