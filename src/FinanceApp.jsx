import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Advices from './pages/Advices'
import AdvicePage from './components/Advice/AdvicePage'

import InvestAimModal from './components/Modals/InvestAimModal'
import CreateAimModal from './components/Modals/CreateAimModal'
import InComeExpenseModal from './components/Modals/InComeExpenseModal'

const FinanceApp = () => {
    const createModal = useSelector(state => state.modal.createAim)
    const isRefill = useSelector(state => state.modal.refillAim)
    const income = useSelector(state => state.modal.income)
    const expense = useSelector(state => state.modal.expense)

    return (
        <div> 
            {isRefill && <InvestAimModal title='Дом' />}
            {createModal && <CreateAimModal title="Создать цель"/>}
            {income && <InComeExpenseModal title="Доходы"/>}
            {expense && <InComeExpenseModal title="Расходы"/>}

            <div className='bg-primary h-screen flex justify-between'>
                <LeftSidebar />

                <Routes>
                    <Route path='/dashboard' element={<Dashboard />}/>
                    <Route path='/budget' element={<Budget />}/>
                    <Route path='/advices' element={<Advices />}/>
                    <Route path='advices/:id' element={<AdvicePage />}/>
                </Routes>

                <RightSidebar />
            </div>
        </div>
  )
}

export default FinanceApp