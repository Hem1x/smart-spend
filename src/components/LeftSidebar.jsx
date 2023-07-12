import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../assets/mainPage'
import { close, smallLogo  } from '../assets'
import ControlPanel from './ControlPanel'

const LeftSidebar = ({isMenuActive, setIsMenuActive}) => {

    const hadnleClose = () => {
        setIsMenuActive(false)
    }

    return (
        <div className={`${isMenuActive ? 'w-full' : 'hidden'} sm:w-fit bg-secondary text-white px-6 sm:px-4 xl:px-7 pt-8`}>
            {/* logo */}
            <div className='flex items-center mb-6 sm:mb-8 justify-between'>
                <img className='block sm:hidden' src={close} alt="close" onClick={hadnleClose}/>
                <img className='block sm:hidden' src={smallLogo} alt="logo" />
                <img className='hidden sm:block mb-7 m-auto my-0 w-56 xl:w-72' src={logo} alt="logo" />
            </div>

            <ControlPanel />
        </div>

    )
}

export default LeftSidebar