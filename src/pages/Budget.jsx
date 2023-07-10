import React from 'react'
import AimCard from '../components/Budget/AimCard'

const Budget = () => {
  return (
    <div className='p-8 flex-1'>
        {/* Хедер (Название раздела + Кнопка) */}
        <div className='flex justify-between mb-11'>
            {/* Название */}
            <h1 className='text-5xl drop-shadow-xl shadow-black font-bold'>Бюджетирование</h1>

            {/* Создать цель */}
            <button className='bg-yellowBtn text-black px-5 py-2 rounded-xl text-2xl font-semibold'>Создать цель</button>
        </div>
        
        {/* Список финансовых целей */}
        <div className='flex flex-wrap justify-evenly gap-8'>
            <AimCard />
            <AimCard />
            <AimCard />
            <AimCard />
            <AimCard />
            <AimCard />
        </div>
    </div>
  )
}

export default Budget