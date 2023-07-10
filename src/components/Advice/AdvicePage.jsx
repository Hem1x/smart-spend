import React from 'react'
import { arrowLeft } from '../../assets/mainPage'
import { Link } from 'react-router-dom'

const AdvicePage = () => {
  return (
    <div className='p-8 flex-1'>
      <div className='bg-secondary px-12 py-6 rounded-2xl'>
        <div>
          <div className='flex items-center justify-between mb-8'>
            <Link to="/advices"><img src={arrowLeft} alt="back" /></Link>
            <p className="text-hashtag text-lg font-semibold">#Бизнес</p>
          </div>

          <div>
            <h1 className='text-4xl font-black mb-5'>Название статьи</h1>
            <h2 className='text-2xl font-bold mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, neque.</h2>
            <p className='text-xl font-light mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur minus rem dolores quod? Deleniti architecto inventore voluptates voluptate error quibusdam, placeat quaerat, eum illo saepe magnam excepturi. Voluptatum ipsum, dolores, facilis et dicta quaerat ad, quod deserunt consequuntur aspernatur quibusdam blanditiis qui nulla molestiae totam neque inventore? Magni aliquam vitae temporibus animi, possimus delectus esse reprehenderit quisquam pariatur ab illum facilis.</p>

            <p className='text-xl font-light mb-8'>Magni aliquam vitae temporibus animi, possimus delectus esse reprehenderit quisquam pariatur ab illum facilis, nemo repudiandae quos nostrum fugit officia itaque ipsam. Eos voluptatum dolor doloribus cumque dolore repellendus neque harum ut reiciendis maxime, tempore atque, quos illo magnam labore nisi amet similique voluptatibus quod rem incidunt libero. Fugiat corrupti fugit vel.</p>
          </div>

          <div className='opacity-50 text-right'>
            <span>12.08.2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvicePage