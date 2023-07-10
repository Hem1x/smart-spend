import React from 'react'
import Advice from '../components/Advice'

const Advices = () => {
  return (
      <div className='p-8 flex-1'>
        {/* Хедер */}
        <div className='flex justify-between mb-11'>
            {/* Название */}
            <h1 className='text-5xl drop-shadow-xl shadow-black font-bold'>База знаний</h1>
        </div>
        
        {/* Список финансовых целей */}
        <div>
          <Advice />
          <Advice />
        </div>
      </div>
  )
}

export default Advices