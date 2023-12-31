import React from 'react'
import { arrowLeft } from '../../assets/mainPage'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AnimatedPage from '../AnimatedPage'

const AdvicePage = () => {
  const {id} = useParams()
  const advices = useSelector(state => state.advice)
  const [adviceObj] = advices.filter(advice => advice.id === id)

  return (
    <AnimatedPage>
      <div className='px-0 py-4 sm:px-8 sm:py-8 flex-1'>
        <div className='bg-secondary px-4 py-6 sm:px-12 sm:py-8 rounded-none sm:rounded-2xl'>
          <div>
            <div className='flex items-center justify-between mb-5'>
              <Link to="/advices"><img src={arrowLeft} alt="back" /></Link>
              <p className="text-hashtag text-md md:text-lg font-semibold">#{adviceObj.tag}</p>
            </div>

            <div>
              <h1 className='text-2xl sm:text-3xl xl:text-4xl font-black mb-5'>{adviceObj.title}</h1>
              <h2 className='text-lg sm:text-xl xl:text-2xl font-semibold mb-8'>{adviceObj.subTitle}</h2>

              <div className='flex flex-col gap-6'>
                <p className='text-md xl:text-lg font-light'>{adviceObj.p1}</p>
                <p className='text-md xl:text-lg font-light'>{adviceObj.p2}</p>
                <p className='text-md xl:text-lg font-light'>{adviceObj.p3}</p>
                <p className='text-md xl:text-lg font-light'>{adviceObj.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default AdvicePage