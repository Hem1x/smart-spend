import React from 'react'
import {advice} from '../../assets/mainPage'
import { Link } from 'react-router-dom'

const Advice = () => {
  return (
    <div className="flex mb-8">
        <div className='bg-secondary px-7 py-5 flex flex-col justify-between rounded-bl-xl rounded-tl-xl'>
            <Link to="/advices/1" className="text-white text-4xl font-extrabold">Наименование статьи</Link>
            <h2 className='text-xl'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является</h2> 
            <p className="text-hashtag text-lg font-semibold">#Бизнес</p>
        </div>

        <img src={advice} alt='advice'/>
    </div>
  )
}

export default Advice