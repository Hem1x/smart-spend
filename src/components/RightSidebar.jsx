import React from 'react'
import { icon } from '../assets/mainPage'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const RightSidebar = () => {
    const transactionList = useSelector(state => state.history)
    const transactionListSlice = transactionList.slice(-5)

    return (
        <div className='hidden lg:block w-fit relative bg-secondary text-white text-center px-5 xl:px-7 pt-5 xl:pt-8 overflow-auto'>
            {/* Гость */}
            <div className='bg-primary px-20 xl:px-24 py-4 rounded-xl mb-7'>
                <div className='flex flex-col items-center'>
                    <img className="mb-2" src={icon} alt="" />
                    <p className='text-2xl font-bold'>Гость</p>
                    <p className='text-base opacity-50'>email</p>
                </div>
            </div>

            <p className='text-xl font-semibold mb-1'>Недавние действия</p>

            <div className='bg-bgHistory w-full relative'>
                <div className='mt-6 absolute left-0 right-0 top-0'>
                    <TransitionGroup component="ul" className="transaction-list">
                    {transactionListSlice.map((tranc) => (
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