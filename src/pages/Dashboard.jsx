import React from 'react'
import IncomeExpensePanel from '../components/Dashboard/IncomeExpensePanel'
import AimCard from '../components/Dashboard/AimCard'
import AnnonceBlockNews from '../components/Dashboard/AnnonceBlockNews'
import ModalWindow from '../components/ModalWindow'
import InComeExpenseModal from '../components/Modals/InComeExpenseModal'
import CreateAimModal from '../components/Modals/CreateAimModal'
import InvestAimModal from '../components/Modals/InvestAimModal'

import { useSelector } from 'react-redux'

const Dashboard = () => {
  const income = useSelector(state => state.modal.income)
  const expense = useSelector(state => state.modal.expense)

  return (
    <div className='p-8 flex-1'>
      
      {income && <InComeExpenseModal title="Доход"/>}
      {expense && <InComeExpenseModal title="Расход"/>}
      {/* {<CreateAimModal title="Создание цели"/>}
      {<InvestAimModal title='Дом' />} */}

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