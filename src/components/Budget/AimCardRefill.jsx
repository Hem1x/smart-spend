import React from 'react'
import { useDispatch } from 'react-redux'
import { openModalForm } from '../../features/Aims/aimSlice'
import InvestAimModal from '../Modals/InvestAimModal'
import { numberWithSpaces } from '../../utils'

const AimCardRefill = ({aim}) => {
    const dispatch = useDispatch()
    const progressBarState = ((aim.collectedSum / aim.nessarySum) * 100).toFixed(0)
    
    return (
        <>
            {/* Модальное окно */}
            {aim.isModalFormActive && <InvestAimModal aim={aim} />}

            <div>
                <div className="w-[348px] bg-secondary rounded-3xl p-6 shadow-blockShadow flex flex-col">
                    {/* Название */}
                    <div className="text-white text-2xl font-bold text-center mb-2">
                        <p>{aim.name}</p>
                    </div>

                    {/* Фото */}
                    <div className="h-36 mb-6">
                        <div className="image bg-cover h-36 w-full rounded-xl" style={{ backgroundImage: `url(${aim.image})` }}></div>
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
                    <div className="text-white text-xl text-center mb-4">
                        <p className='flex justify-between'>
                            <span>Необходимо: </span>
                            <span>{numberWithSpaces(aim.nessarySum)} ₽</span>
                        </p>
                        <h1 className='flex justify-between font-light'>
                            <span>Собрано: </span>
                            <span>{numberWithSpaces(aim.collectedSum)} ₽</span>
                        </h1>
                    </div>

                    {/* Пополнить */}
                    <button
                        onClick={() => dispatch(openModalForm(aim.id))} 
                        className='bg-yellowBtn text-black font-semibold rounded-xl px-10 py-2 hover:bg-yellow-300 transition-all duration-200'
                    >
                        Пополнить
                    </button>
                </div>
            </div>
        </>

    )
}

export default AimCardRefill