import React from 'react'
import { useDispatch } from 'react-redux'
import { openModalForm, deleteAim } from '../../features/Aims/aimSlice'
import InvestAimModal from '../Modals/InvestAimModal'
import { numberWithSpaces } from '../../utils'
import { increaseBalance, increaseExpense } from '../../features/Finances/financeSlice'
import { deleteTransaction } from '../../features/History/historySlice'

const AimCardRefill = ({aim}) => {
    const dispatch = useDispatch()
    const progressBarState = ((aim.collectedSum / aim.nessarySum) * 100).toFixed(0)

    const handleDeleteAim = (id, sum, name) => {
        dispatch(increaseExpense(sum))
        dispatch(increaseBalance(sum))
        dispatch(deleteAim(id))
        dispatch(deleteTransaction(name))
    }
    
    return (
        <>
            {/* Модальное окно */}
            {aim.isModalFormActive && <InvestAimModal aim={aim} />}

            <div>
                <div className=" bg-secondary rounded-3xl p-7 shadow-blockShadow flex flex-col">
                    {/* Название */}
                    <div className="text-white text-2xl xl:text-3xl font-bold text-center mb-2">
                        <p>{aim.name}</p>
                    </div>

                    {/* Фото */}
                    <div className="mb-3 xl:mb-6">
                        <img className='my-0 m-auto w-full rounded-xl' src={aim.image} alt="img" />
                    </div>

                    {/* Прогресс бар */}
                    <div className="mb-4 rounded-full overflow-hidden h-5 relative">
                        <div className="bg-white h-full"></div>
                        <div 
                            className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
                            style={{width: `${progressBarState}%`}}
                        >
                        </div>
                    </div>

                    {/* Собрано */}
                    <div className="text-white text-lg xl:text-xl text-center mb-4">
                        <p className='hidden lg:flex lg:flex-wrap justify-between'>
                            <span>Необходимо:&nbsp;&nbsp;</span>
                            <span>{numberWithSpaces(aim.nessarySum)} ₽</span>
                        </p>
                        <h1 className='flex flex-wrap justify-between font-light text-yellow-100'>
                            <span>Собрано: </span>
                            <span>{numberWithSpaces(aim.collectedSum)} ₽</span>
                        </h1>
                    </div>

                    {/* Пополнить */}
                    <button
                        onClick={() => dispatch(openModalForm(aim.id))} 
                        className='mb-2 bg-yellowBtn text-black font-semibold rounded-xl px-10 py-2 hover:bg-yellow-500 transition-all duration-200'
                    >
                        Пополнить
                    </button>
                    <button
                        onClick={() => handleDeleteAim(aim.id, aim.collectedSum, aim.name)} 
                        className='bg-outgoing text-white font-semibold rounded-xl px-10 py-2 hover:bg-red-500 transition-all duration-200'
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </>

    )
}

export default AimCardRefill