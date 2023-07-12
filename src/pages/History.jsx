import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import { useSelector } from 'react-redux'
import TransactionBlock from '../components/TransactionBlock'

const History = () => {
  const transations = useSelector(state => state.history)

  return (
    <AnimatedPage>
      <div className='p-8'>
        {/* Хедер */}
        <div className='flex justify-center sm:justify-between mb-6 xl:mb-11'>
            {/* Название */}
            <h1 className='text-2xl lg:text-4xl xl:text-5xl drop-shadow-xl shadow-black font-bold'>История баланса</h1>
        </div>
        <div>
            {transations.length ? 
              transations.map(tranc => <TransactionBlock tranc={tranc}/>)
              :
              <h1 className='text-center mt-20 sm:mt-40 text-xl lg:text-3xl font-semibold opacity-50'>Истории отсутствует</h1>
            }
        </div>
      </div>
    </AnimatedPage>
  )
}

export default History