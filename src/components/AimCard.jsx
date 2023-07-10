import React from 'react'
import {car} from '../assets/mainPage'

const AimCard = () => {
  return (
    <div>
        <div class="bg-gray-800 rounded-3xl max-w-md p-7 shadow-blockShadow">
            <div class="titleBlock text-white text-3xl font-bold text-center mb-6">
                <p>Ferrari 458 Italia</p>
            </div>

            <div class="mb-5">
                <img src={car} class="w-full" alt='aim'/>
            </div>

            <div class="mb-4 rounded-full overflow-hidden h-10 relative">
                <div class="bg-white h-full"></div>
                <span class="absolute left-0 top-0 h-full bg-green-500 w-1/2 rounded-full"></span>
            </div>

            <div class="text-white text-2xl text-center">
                <h4 class="font-bold">Собрано:</h4>
                <p class="sum">8 043 345 ₽</p>
            </div>
        </div>
    </div>
  )
}

export default AimCard