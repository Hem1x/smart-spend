import React from 'react'
import IncomeExpensePanel from '../components/Dashboard/IncomeExpensePanel'
import AimCard from '../components/Dashboard/AimCard'
import AnnonceBlockNews from '../components/Dashboard/AnnonceBlockNews'
import { useSelector } from 'react-redux'
import AnimatedPage from '../components/AnimatedPage'

const Dashboard = () => {
  const aims = useSelector(state => state.aim)

  return (
    <AnimatedPage>
      <div className='p-8 flex-1'>

        {/* Секция Доходы/Расходы */}
        <div className='flex flex-wrap lg:flex-nowrap justify-between gap-8 mb-5 xl:mb-10'>
          <IncomeExpensePanel title="Доходы"/>
          <IncomeExpensePanel title="Расходы"/>
        </div>

        {/* Список финансовых целей */}
        <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8 mb-5 xl:mb-10'>
          {aims.map(aim => <AimCard aim={aim}/>) }
        </div>

        {/* Совет дня */}
        <div className='w-full'>
          <h1 className='mb-3 xl:mb-4 font-semibold text-2xl xl:text-3xl drop-shadow-textShadow'>Совет дня:</h1>
          <AnnonceBlockNews />
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Dashboard