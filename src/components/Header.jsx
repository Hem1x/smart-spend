import React from 'react'
import { menu, smallLogo } from '../assets'

const Header = ({isMenuActive, setIsMenuActive}) => {

    const handleOpen = () => {
        setIsMenuActive(true)
    }

  return (
    <div className={`${isMenuActive ? 'hidden' : 'block'} flex py-8 sm:hidden justify-between px-6 bg-secondary`}>
        <img src={menu} alt="menu" onClick={handleOpen}/>
        <img src={smallLogo} alt="logo" />
    </div>
  )
}

export default Header