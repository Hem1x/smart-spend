import React from 'react'
import Dashboard from './pages/Dashboard'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Budget from './pages/Budget'
import Advices from './pages/Advices'
import AdvicePage from './components/Advice/AdvicePage'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
      </BrowserRouter>
    </Provider>
  )
}

export default App