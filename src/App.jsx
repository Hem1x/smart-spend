import React from 'react'
import Dashboard from './pages/Dashboard'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary h-screen flex justify-between'>
        <LeftSidebar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/budget' element={<Dashboard />}/>
            <Route path='/advices' element={<Dashboard />}/>
          </Routes>
        
        <RightSidebar />
      </div>
    </BrowserRouter>
  )
}

export default App