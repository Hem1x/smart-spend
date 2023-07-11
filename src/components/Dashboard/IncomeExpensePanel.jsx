import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {openIncome, openExpense} from '../../features/Modal/modalSlice'

const IncomeExpensePanel = ({title}) => {
    const dispatch = useDispatch()
    const isIncome =  title === 'Доходы' ? true : false

    const incomeSum = useSelector(state => state.finance.income)
    const expenseSum = useSelector(state => state.finance.expense)

    const objectPanel = isIncome ? {
        title: 'Доходы',
        sum: incomeSum,
        color: 'bg-income',
        open: openIncome
    } : {
        title: 'Расходы',
        sum: expenseSum,
        color: 'bg-outgoing',
        open: openExpense
    }

    return (
        <div className={`w-1/2 ${objectPanel.color} rounded-3xl py-8 px-10  shadow-blockShadow`}>
            {/* Название */}
            <h1 className="text-4xl font-bold mb-4 drop-shadow-textShadow">{objectPanel.title}</h1>

            {/* Ячейка */}
            <div className="flex items-center justify-between w-full bg-white bg-opacity-60 rounded-3xl px-4 py-3 shadow-blockShadow">
                <div className="text-3xl font-semibold text-white">
                    <span className='drop-shadow-textShadow'>{objectPanel.sum} ₽</span>
                </div>

                <button onClick={() => dispatch(objectPanel.open())} className={`w-12 h-12 ${objectPanel.color} rounded-full flex items-center justify-center shadow`}>
                    +
                </button>
            </div>
        </div>
    )
}

export default IncomeExpensePanel