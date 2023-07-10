import React from 'react'
import {car} from '../../assets/mainPage'

const AimCard = () => {
  return (
    <div>
        <div className="w-[352px] bg-secondary rounded-3xl p-6 shadow-blockShadow flex flex-col">
            {/* Название */}
            <div className="titleBlock text-white text-2xl font-bold text-center mb-2">
                <p>Ferrari 458 Italia</p>
            </div>

            {/* Фото */}
            <div className="container h-36 mb-6">
                <div className="image bg-cover h-36 w-full rounded-xl" style={{ backgroundImage: `url(${car})` }}></div>
            </div>

            {/* Прогресс бар */}
            <div className="mb-4 rounded-full overflow-hidden h-5 relative">
                <div className="bg-white h-full"></div>
                <span className="absolute left-0 top-0 h-full bg-green-500 w-1/2 rounded-full"></span>
            </div>

            {/* Собрано */}
            <div className="text-white text-xl text-center mb-4">
                <h1 className="font-light">Собрано: <span>8 043 345 ₽</span></h1>
            </div>

            {/* Пополнить */}
            <button className='bg-yellowBtn text-black font-semibold rounded-xl px-10 py-2'>Пополнить</button>
        </div>
    </div>
  )
}

export default AimCard