import React from 'react'
import {bigCross} from '../assets'
import { useDispatch } from 'react-redux'
import {close} from '../features/Modal/modalSlice'

const ModalWindow = ({title, width, children}) => {
    const dispatch = useDispatch()

    return (
        <div className={`text-primary bg-white rounded-2xl shadow-modalShadow px-6 py-5 relative`} style={{width}}>
            <img className='absolute top-4 right-4 cursor-pointer' src={bigCross} alt="close" onClick={() => dispatch(close())}/>
            <h1 className='text-3xl font-bold mb-4'>{title}</h1>
            {children}
        </div>
    )
}

export default ModalWindow