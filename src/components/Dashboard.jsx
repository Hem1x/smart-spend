import React from 'react'
import IncomeExpensePanel from './IncomeExpensePanel'

const Dashboard = () => {
  return (
    <div className='p-8 flex-1'>
      <div className='flex justify-between gap-8'>
        <IncomeExpensePanel title="Доходы"/>
        <IncomeExpensePanel title="Расходы"/>
      </div>
    </div>
  )
}

export default Dashboard