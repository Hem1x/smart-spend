import React from 'react'
import { useDispatch } from 'react-redux'
import {income, expense} from '../../features/Modal/modalSlice'

const IncomeExpensePanel = ({title}) => {
    const color = title === 'Доходы' ? 'bg-income' : 'bg-outgoing'
    const obj = title === 'Доходы' ? income : expense
    const dispatch = useDispatch()

    return (
        <div className={`w-1/2 ${color} rounded-3xl py-8 px-10  shadow-blockShadow`}>
            {/* Название */}
            <h1 className="text-4xl font-bold mb-4 drop-shadow-textShadow">{title}</h1>

            {/* Ячейка */}
            <div className="flex items-center justify-between w-full bg-white bg-opacity-60 rounded-3xl px-4 py-3 mb-8 shadow-blockShadow">
                <div className="text-3xl font-semibold text-white">
                    <span className='drop-shadow-textShadow'>36 560,70 ₽</span>
                </div>

                <button onClick={() => dispatch(obj())} className={`w-12 h-12 ${color} rounded-full flex items-center justify-center shadow`}>
                    +
                </button>
            </div>

            {/* Доп */}
            <div className="text-white text-opacity-70 text-sm">+28,53 % за последний месяц</div>
        </div>
    )
}

export default IncomeExpensePanel