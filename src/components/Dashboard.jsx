import React from 'react'
import IncomeExpensePanel from './IncomeExpensePanel'
import AimCard from './AimCard'
import AnnonceBlockNews from './AnnonceBlockNews'

const Dashboard = () => {
  return (
    <div className='p-8 flex-1'>
      <div className='flex justify-between gap-8 mb-10'>
        <IncomeExpensePanel title="Доходы"/>
        <IncomeExpensePanel title="Расходы"/>
      </div>

      <div className='flex justify-between gap-8 mb-10'>
        <AimCard />
        <AimCard />
        <AimCard />
      </div>

      <div className='w-full'>
        <AnnonceBlockNews />
      </div>
    </div>
  )
}

export default Dashboard