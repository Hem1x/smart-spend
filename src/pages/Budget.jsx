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
          <div className='flex flex-wrap sm:flex-nowrap justify-center sm:justify-between mb-11'>
              {/* Название */}
              <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-0'>Бюджетирование</h1>

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
                  <h1 className='text-center mt-20 sm:mt-40 text-xl lg:text-3xl font-semibold opacity-50'>У нас нет финансовых целей</h1>
              }
          </div>
      </div>
    </AnimatedPage>
  )
}

export default Budget