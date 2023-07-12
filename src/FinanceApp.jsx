import React, {useEffect, useState} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {MotionConfig} from 'framer-motion'

import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Advices from './pages/Advices'
import AdvicePage from './components/Advice/AdvicePage'
import History from './pages/History'

import CreateAimModal from './components/Modals/CreateAimModal'
import InComeExpenseModal from './components/Modals/InComeExpenseModal'
import Header from './components/Header'

const FinanceApp = () => {
    const [isMenuActive, setIsMenuActive] = useState(true)

    const createModal = useSelector(state => state.modal.createAimModal)
    const income = useSelector(state => state.modal.incomeModal)
    const expense = useSelector(state => state.modal.expenseModal)

    const location = useLocation()

    return (
        <div> 
            {createModal && <CreateAimModal title="Создать цель"/>}
            {income && <InComeExpenseModal title="Доходы"/>}
            {expense && <InComeExpenseModal title="Расходы"/>}
            <div className={`bg-primary h-screen flex ${isMenuActive ? '' : 'flex-col'} justify-between`}>

                <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>
                <LeftSidebar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>

                <div className='overflow-auto flex-1'>
                    <MotionConfig transition={{ duration: .7 }}>
                        <Routes location={location} key={location.pathname}>
                            <Route path='dashboard' element={<Dashboard />}/>
                            <Route path='budget' element={<Budget />}/>
                            <Route path='history' element={<History />}/>
                            <Route path='advices' element={<Advices />}/>
                            <Route path='advices/:id' element={<AdvicePage />}/>
                        </Routes>
                    </MotionConfig>
                </div>

                <RightSidebar />
            </div>
        </div>
  )
}

export default FinanceApp