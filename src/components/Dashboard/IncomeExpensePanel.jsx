import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openIncome, openExpense } from '../../features/Modal/modalSlice'
import { numberWithSpaces } from '../../utils'

const IncomeExpensePanel = ({title}) => {
    const dispatch = useDispatch()
    const isIncome =  title === 'Доходы' ? true : false

    const incomeSum = useSelector(state => state.finance.income)
    const expenseSum = useSelector(state => state.finance.expense)

    const objectPanel = isIncome ? {
        title: 'Доходы',
        sum: incomeSum,
        color: 'bg-income',
        open: openIncome,
        colorAnimation: 'hover:bg-green-500',
        shadowHover: 'hover:shadow-IncomeBlockShadowHover'

    } : {
        title: 'Расходы',
        sum: expenseSum,
        color: 'bg-outgoing',
        open: openExpense,
        colorAnimation: 'hover:bg-red-400',
        shadowHover: 'hover:shadow-ExpenseBlockShadowHover'
    }

    return (
        <div className={`w-full lg:w-1/2 ${objectPanel.color} rounded-3xl p-4 lg:p-6 xl:p-10 shadow-blockShadow ${objectPanel.shadowHover} duration-200 transition-all cursor-pointer`}>
            {/* Название */}
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-4 drop-shadow-textShadow">{objectPanel.title}</h1>

            {/* Ячейка */}
            <div className="flex items-center justify-between w-full bg-white bg-opacity-60 rounded-3xl p-2 xl:p-4 shadow-blockShadow">
                <div className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white ml-2 mb-0 sm:mb-4 lg:mb-0">
                    <span className='drop-shadow-textShadow'>{numberWithSpaces(objectPanel.sum)} ₽</span>
                </div>

                <button
                    onClick={() => dispatch(objectPanel.open())} 
                    className={`w-7 h-7 sm:w-12 sm:h-12 ${objectPanel.color} rounded-full flex items-center justify-center shadow transition-all hover:scale-105 ${objectPanel.colorAnimation}`}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default IncomeExpensePanel