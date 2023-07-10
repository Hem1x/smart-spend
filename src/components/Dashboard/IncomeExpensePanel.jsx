import React from 'react'

const IncomeExpensePanel = ({title, setIsActive}) => {
    const color = title === 'Доходы' ? 'bg-income' : 'bg-outgoing'

    return (
        <div class={`w-1/2 ${color} rounded-3xl py-8 px-10  shadow-blockShadow`}>
            {/* Название */}
            <h1 class="text-4xl font-bold mb-4 drop-shadow">{title}</h1>

            {/* Ячейка */}
            <div class="w-full bg-white bg-opacity-60 rounded-3xl flex items-center justify-between px-4 py-3 mb-8 shadow-blockShadow">
                <div class="text-3xl font-semibold text-white drop-shadow">
                    <span className='drop-shadow-textShadow'>36 560,70 ₽</span>
                </div>

                <button class={`w-12 h-12 ${color} rounded-full flex items-center justify-center shadow`}>
                    +
                </button>
            </div>

            {/* Доп */}
            <div class="text-white text-opacity-70 text-sm">+28,53 % за последний месяц</div>
        </div>
    )
}

export default IncomeExpensePanel