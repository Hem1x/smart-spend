import React from 'react'
import AimCardRefill from '../components/Budget/AimCardRefill'
import { useSelector, useDispatch } from 'react-redux'
import {openCreate} from '../features/Modal/modalSlice'
import AnimatedPage from '../components/AnimatedPage'

const Budget = () => {
  const dispatch = useDispatch()
  const aims = useSelector(state => state.aim)

  return (
    <AnimatedPage>
      <div className='p-8 flex-1'>
          {/* Хедер (Название раздела + Кнопка) */}
          <div className='flex justify-between mb-11'>
              {/* Название */}
              <h1 className='text-5xl font-bold'>Бюджетирование</h1>

              {/* Создать цель */}
              {!(aims.length === 3) &&
                <button 
                  onClick={() => dispatch(openCreate())} 
                  className='px-5 py-2 rounded-xl text-lg font-bold bg-yellowBtn text-black hover:scale-110 transition-all duration-200'
                >
                  Создать цель
                </button>
              }

          </div>

          {/* Список финансовых целей */}
          <div className='flex flex-wrap justify-evenly gap-8'>
              {
                aims.length ? 
                  aims.map(aim => <AimCardRefill key={aim.id} aim={aim}/>) 
                  : 
                  <h1 className='mt-40 text-3xl font-semibold opacity-50'>У нас нет финансовых целей</h1>
              }
          </div>
      </div>
    </AnimatedPage>
  )
}

export default Budget