import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import { useSelector } from 'react-redux'
import TransactionBlock from '../components/TransactionBlock'

const History = () => {
  const transations = useSelector(state => state.history)
  console.log(transations)

  return (
    <AnimatedPage>
      <div className='p-8'>
        {/* Хедер */}
        <div className='flex justify-between mb-6 xl:mb-11'>
            {/* Название */}
            <h1 className='text-2xl lg:text-4xl xl:text-5xl drop-shadow-xl shadow-black font-bold'>История баланса</h1>
        </div>
        <div>
            {transations.map(tranc => <TransactionBlock tranc={tranc}/>)}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default History