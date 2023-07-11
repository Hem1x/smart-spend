import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Advices from './pages/Advices'
import AdvicePage from './components/Advice/AdvicePage'

import CreateAimModal from './components/Modals/CreateAimModal'
import InComeExpenseModal from './components/Modals/InComeExpenseModal'

const FinanceApp = () => {
    const createModal = useSelector(state => state.modal.createAimModal)
    const income = useSelector(state => state.modal.incomeModal)
    const expense = useSelector(state => state.modal.expenseModal)

    return (
        <div> 
            {createModal && <CreateAimModal title="Создать цель"/>}
            {income && <InComeExpenseModal title="Доходы"/>}
            {expense && <InComeExpenseModal title="Расходы"/>}
            <div className='bg-primary h-screen flex justify-between'>
                <LeftSidebar />

                <Routes>
                    <Route path='dashboard' element={<Dashboard />}/>
                    <Route path='budget' element={<Budget />}/>
                    <Route path='advices' element={<Advices />}/>
                    <Route path='advices/:id' element={<AdvicePage />}/>
                </Routes>

                <RightSidebar />
            </div>
        </div>
  )
}

export default FinanceApp