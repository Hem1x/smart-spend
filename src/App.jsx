import React from 'react'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'
import {logo} from './assets/mainPage'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <SideBar side={'left'}>
        <img src={logo} alt="" />
      </SideBar>
      <Dashboard />
      <SideBar side={'right'}>personal panel</SideBar>
    </div>
  )
}

export default App