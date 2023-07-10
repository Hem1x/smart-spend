import React from 'react'
import {car} from '../../assets/mainPage'

const AimCard = () => {
  return (
    <div className="bg-secondary rounded-3xl max-w-md p-7 shadow-blockShadow">
        <div className="titleBlock text-white text-3xl font-bold text-center mb-6">
            <p>Ferrari 458 Italia</p>
        </div>

        <div className="mb-5">
            <img src={car} className="w-full" alt='aim'/>
        </div>

        <div className="mb-4 rounded-full overflow-hidden h-10 relative">
            <div className="bg-white h-full"></div>
            <span className="absolute left-0 top-0 h-full bg-green-500 w-1/2 rounded-full"></span>
        </div>

        <div className="text-white text-2xl text-center">
            <h4 className="font-bold">Собрано:</h4>
            <p>8 043 345 ₽</p>
        </div>
    </div>
  )
}

export default AimCard