import React from 'react'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'
import {logo, dashboard, budget, news} from './assets/mainPage'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <SideBar side={'left'}>
        <img className='mb-12' src={logo} alt="logo" />

        <div className='w-max-[272px] rounded-xl bg-balance px-5 py-4 text-center mb-[60px]'>
          <h3 className='text-[20px]'>Ваши средства:</h3>
          <span className='text-balanceText text-[38px] font-bold'>78 506, 53 ₽</span>
        </div>

        <div className='flex flex-col gap-6 text-[22px] font-light'>
          <li className='flex items-center'>
            <img className='mr-4' src={dashboard} alt="dashboard" />
            <h2>Панель управления</h2>
          </li>

          <li className='flex items-center cursor-pointer'>
            <img className='mr-4' src={budget} alt="budget" />
            <h2>Бюджетирование</h2>
          </li>

          <li className='flex items-center cursor-pointer'>
            <img className='mr-4' src={news} alt="news" />
            <h2>Новостной блог</h2>
          </li>
        </div>

      </SideBar>

      <Dashboard />
      {/* <SideBar side={'right'}>personal panel</SideBar> */}
    </div>
  )
}

export default App