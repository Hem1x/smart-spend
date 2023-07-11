import React from 'react'
import Advice from '../components/Advice/Advice'
import { useSelector } from 'react-redux'

const Advices = () => {
  const advices = useSelector(state => state.advice)

  return (
      <div className='p-8 flex-1'>
        {/* Хедер */}
        <div className='flex justify-between mb-11'>
            {/* Название */}
            <h1 className='text-5xl drop-shadow-xl shadow-black font-bold'>База знаний</h1>
        </div>
        
        {/* Список статей */}
        <div>
          {advices.map(advice => <Advice key={advice.id} advice={advice}/>)}
        </div>
      </div>
  )
}

export default Advices