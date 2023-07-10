import React from 'react'
import Dashboard from './components/Dashboard'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <LeftSidebar />
      <Dashboard />
      <RightSidebar />
    </div>
  )
}

export default App