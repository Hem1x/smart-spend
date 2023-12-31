import React from 'react'
import Advice from '../components/Advice/Advice'
import { useSelector } from 'react-redux'
import AnimatedPage from '../components/AnimatedPage'

const Advices = () => {
  const advices = useSelector(state => state.advice)

  return (
      <AnimatedPage>
        <div className='p-3 sm:p-8'>
          {/* Хедер */}
          <div className='flex justify-center sm:justify-between mb-4 sm:mb-6 xl:mb-11'>
              {/* Название */}
              <h1 className='text-2xl lg:text-4xl xl:text-5xl drop-shadow-xl shadow-black font-bold'>База знаний</h1>
          </div>
          
          {/* Список статей */}
          <div>
            {advices.map(advice => <Advice key={advice.id} advice={advice}/>)}
          </div>
        </div>
      </AnimatedPage>
  )
}

export default Advices