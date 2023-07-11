import React from 'react'
import {car} from '../../assets/mainPage'
import { Link } from 'react-router-dom'
import { numberWithSpaces } from '../../utils'

const AimCard = ({aim}) => {
    const progressBarState = ((aim.collectedSum / aim.nessarySum) * 100).toFixed(0)

    return (
        <Link to="/budget">
            <div className="bg-secondary rounded-3xl max-w-md p-7 shadow-blockShadow">
                <div className="titleBlock text-white text-3xl font-bold text-center mb-6">
                    <p>{aim.name}</p>
                </div>

                <div className="mb-5">
                    <img src={car} className="w-full" alt='aim'/>
                </div>

                <div className="mb-4 rounded-full overflow-hidden h-10 relative">
                    <div className="bg-white h-full"></div>
                    <div className="absolute left-0 top-0 h-full bg-green-500 rounded-full" style={{width: `${progressBarState}%`}}></div>
                </div>

                <div className="text-white text-2xl text-center">
                    <h4 className="font-bold">Накоплено:</h4>
                    <p>{numberWithSpaces(aim.collectedSum)} ₽</p>
                </div>
            </div>
        </Link>
  )
}

export default AimCard