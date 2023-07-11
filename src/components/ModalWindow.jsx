import React from 'react'
import {bigCross} from '../assets'
import { useDispatch } from 'react-redux'
import {closeAll} from '../features/Modal/modalSlice'

const ModalWindow = ({title, width, children}) => {
    const dispatch = useDispatch()

    return (
        <div className='absolute left-0 top-0 w-full h-full bg-overlay z-10' onClick={() => dispatch(closeAll())}>
            <div className='flex items-center justify-center h-screen'>
                <div 
                    className={`text-primary bg-white rounded-2xl shadow-modalShadow px-6 py-5 relative mx-auto`} 
                    style={{width}}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img className='absolute top-4 right-4 cursor-pointer' src={bigCross} alt="close" onClick={() => dispatch(closeAll())}/>
                    <h1 className='text-3xl font-bold mb-4'>{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow