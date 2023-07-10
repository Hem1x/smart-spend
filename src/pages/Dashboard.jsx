import React from 'react'
import IncomeExpensePanel from '../components/Dashboard/IncomeExpensePanel'
import AimCard from '../components/Dashboard/AimCard'
import AnnonceBlockNews from '../components/Dashboard/AnnonceBlockNews'

const Dashboard = () => {
  return (
    <div className='p-8 flex-1'>
      {/* Секция Доходы/Расходы */}
      <div className='flex justify-between gap-8 mb-10'>
        <IncomeExpensePanel title="Доходы"/>
        <IncomeExpensePanel title="Расходы"/>
      </div>

      {/* Список финансовых целей */}
      <div className='flex justify-between gap-8 mb-10'>
        <AimCard />
        <AimCard />
        <AimCard />
      </div>

      {/* Совет дня */}
      <div className='w-full'>
        <AnnonceBlockNews />
      </div>
    </div>
  )
}

export default Dashboard