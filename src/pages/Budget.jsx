import React from 'react'
import AimCardRefill from '../components/Budget/AimCardRefill'
import { useSelector, useDispatch } from 'react-redux'
import {openCreate} from '../features/Modal/modalSlice'

const Budget = () => {
  const dispatch = useDispatch()
  const aims = useSelector(state => state.aim)

  return (
    <div className='p-8 flex-1'>
        {/* Хедер (Название раздела + Кнопка) */}
        <div className='flex justify-between mb-11'>
            {/* Название */}
            <h1 className='text-5xl font-bold'>Бюджетирование</h1>

            {/* Создать цель */}
            <button onClick={() => dispatch(openCreate())} className='bg-yellowBtn text-black px-5 py-2 rounded-xl text-2xl font-semibold'>Создать цель</button>
        </div>

        {/* Список финансовых целей */}
        <div className='flex flex-wrap justify-evenly gap-8'>
            {aims.map(aim => <AimCardRefill key={aim.id} aim={aim}/>)}
        </div>
    </div>
  )
}

export default Budget