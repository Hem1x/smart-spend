import React from 'react'
import { Link } from 'react-router-dom'
import { numberWithSpaces } from '../../utils'

const AimCard = ({aim}) => {
    const progressBarState = ((aim.collectedSum / aim.nessarySum) * 100).toFixed(0)

    return (
        <Link to="/budget">
            <div className="bg-secondary rounded-3xl p-3 px-5 xl:p-7 shadow-blockShadow hover:shadow-blockShadowHover transition-all duration-300">
                <div className="titleBlock text-white text-2xl xl:text-3xl font-bold text-center mb-2 xl:mb-6">
                    <p>{aim.name}</p>
                </div>

                <div className="mb-2 xl:mb-6">
                    <img src={aim.image} className="m-auto my-0 w-full" alt='aim'/>
                </div>

                <div className="m-auto my-0 mb-2 xl:mb-4 h-5 xl:h-10 rounded-full overflow-hidden relative">
                    <div className="bg-white h-full"></div>
                    <div className="absolute left-0 top-0 h-full bg-green-500 rounded-full" style={{width: `${progressBarState}%`}}></div>
                </div>

                <div className="text-white text-lg xl:text-2xl text-center">
                    <h4 className="font-bold">Накоплено:</h4>
                    <p>{numberWithSpaces(aim.collectedSum)} ₽</p>
                </div>
            </div>
        </Link>
  )
}

export default AimCard