import React from 'react'
import AimCard from '../components/Budget/AimCard'
import { useSelector, useDispatch } from 'react-redux'
import {create} from '../features/Modal/modalSlice'
import CreateAimModal from '../components/Modals/CreateAimModal'
import InvestAimModal from '../components/Modals/InvestAimModal'

const Budget = () => {
  const dispatch = useDispatch()
  const createModal = useSelector(state => state.modal.createAim)
  const isRefill = useSelector(state => state.modal.refillAim)
  
  return (
    <div className='p-8 flex-1'>
        {/* Хедер (Название раздела + Кнопка) */}
        <div className='flex justify-between mb-11'>
            {/* Название */}
            <h1 className='text-5xl drop-shadow-xl shadow-black font-bold'>Бюджетирование</h1>

            {/* Создать цель */}
            <button onClick={() => dispatch(create())} className='bg-yellowBtn text-black px-5 py-2 rounded-xl text-2xl font-semibold'>Создать цель</button>
        </div>
        
        {createModal && <CreateAimModal title="Создание цели"/>}
        {isRefill && <InvestAimModal title='Дом' />}

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