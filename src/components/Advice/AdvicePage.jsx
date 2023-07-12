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
      <div className='p-8 flex-1'>
        <div className='bg-secondary px-12 py-6 rounded-2xl'>
          <div>
            <div className='flex items-center justify-between mb-8'>
              <Link to="/advices"><img src={arrowLeft} alt="back" /></Link>
              <p className="text-hashtag text-lg font-semibold">#{adviceObj.tag}</p>
            </div>

            <div>
              <h1 className='text-4xl font-black mb-5'>{adviceObj.title}</h1>
              <h2 className='text-2xl font-bold mb-8'>{adviceObj.subTitle}</h2>
              <p className='text-lg font-light mb-8'>{adviceObj.p1}</p>
              <p className='text-lg font-light mb-8'>{adviceObj.p2}</p>
              <p className='text-lg font-light mb-8'>{adviceObj.p3}</p>
              <p className='text-lg font-light mb-8'>{adviceObj.p4}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default AdvicePage