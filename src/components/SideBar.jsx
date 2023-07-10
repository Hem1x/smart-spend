import React from 'react'

const SideBar = ({children, side}) => {
  return (
    <div className={`bg-secondary text-white max-w-[352px] h-full fixed z-1 top-0 ${side}-0 px-7 pt-8`}>{children}</div>
  )
}

export default SideBar