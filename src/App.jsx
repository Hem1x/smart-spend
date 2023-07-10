import React from 'react'
import Dashboard from './components/Dashboard'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <div className='bg-primary h-screen flex justify-between'>
      <LeftSidebar />
      <Dashboard />
      <RightSidebar />
    </div>
  )
}

export default App