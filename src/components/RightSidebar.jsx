import React from 'react'
import { icon } from '../assets/mainPage'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const RightSidebar = () => {
    const transactionList = useSelector(state => state.history)

    return (
        <div className='bg-secondary text-white text-center w-fit px-7 pt-8 relative'>
            {/* Гость */}
            <div className='bg-primary px-24 py-4 rounded-xl mb-7'>
                <div className='flex flex-col items-center'>
                    <img className="mb-2" src={icon} alt="" />
                    <p className='text-[26px] font-bold'>Гость</p>
                    <p className='text-[17px] opacity-50'>email</p>
                </div>
            </div>

            <p className='text-[26px] font-semibold mb-1'>История действий</p>

            <div className='bg-bgHistory w-full relative'>
                <div className='mt-6 absolute left-0 right-0 top-0'>
                    <TransitionGroup component="ul" className="transaction-list">
                    {transactionList.map((tranc) => (
                        <CSSTransition key={tranc.id} timeout={500} classNames="fade">
                            <Transaction tranc={tranc} />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar