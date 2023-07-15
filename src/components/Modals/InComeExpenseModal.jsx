import React, {useState} from 'react'
import ModalWindow from '../ModalWindow'
import { useDispatch } from 'react-redux'
import { addExpense, addIncome, increaseBalance, decreaseBalance } from '../../features/Finances/financeSlice'
import { closeAll } from '../../features/Modal/modalSlice'
import { addTransaction } from '../../features/History/historySlice'
import { numberWithSpaces } from '../../utils'

const InComeExpenseModal = ({title}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const addFinance = (e, value) => {
        e.preventDefault()
        if (title === 'Доходы') {
            dispatch(addIncome(Number(value)))
            dispatch(increaseBalance(Number(value)))
            dispatch(addTransaction({
                name: "Доход", 
                sum: value, 
                type: "INCOME"
            }))
        } else {
            dispatch(addExpense(Number(value)))
            dispatch(decreaseBalance(Number(value)))
            dispatch(addTransaction({
                name: "Расход", 
                sum: value, 
                type: "EXPENSE"
            }))
        }
        dispatch(closeAll())
    }

    return (
        <>
            <ModalWindow title={title} width='352px'>
                

                <form onSubmit={(e) => addFinance(e, value)}>
                    <div className='bg-gray-100 py-2 px-5 rounded-full mb-4 relative'>
                        <input
                            required
                            autoFocus
                            maxLength={9}
                            type='text'
                            className='bg-transparent w-full text-gray-100'
                            style={{ userSelect: 'none' }}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder='Введите сумму'
                        />
                        {value && <h1 className='absolute left-4 top-2'>{numberWithSpaces(Number(value))} ₽</h1>}
                    </div>

                    <button
                        type='submit'
                        className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full hover:bg-yellow-500 transition-all duration-200'
                    >
                        Добавить
                    </button>
                </form>
            </ModalWindow>
        </>
  )
}

export default InComeExpenseModal