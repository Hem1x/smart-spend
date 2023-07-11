import React from 'react'
import { Link } from 'react-router-dom'
import { adviceImage } from '../../assets/mainPage'

const Advice = ({advice}) => {
  return (
    <Link to={`/advices/${advice.id}`}>
        <div className="flex mb-8">
          <div className='bg-secondary px-7 py-5 flex flex-col justify-between rounded-bl-xl rounded-tl-xl'>
              <h1 className="text-white text-3xl font-extrabold">{advice.title}</h1>
              <h2 className='text-xl'>{advice.subTitle}</h2> 
              <p className="text-hashtag text-base font-semibold">#{advice.tag}</p>
          </div>

          <img src={adviceImage} alt='advice'/>
      </div>
    </Link>

  )
}

export default Advice