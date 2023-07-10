import React from 'react'
import ModalWindow from '../ModalWindow'

const CreateAimModal = ({title}) => {
  return (
    <>
        <ModalWindow title={title} width='600px'>
            <form>
                <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
                    <input className='bg-transparent w-full' placeholder='Название цели'/>
                </div>

                <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
                    <input className='bg-transparent w-full' type="number" placeholder='Необходимая сумма'/>
                </div>

                <button
                    type='submit'
                    className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full'
                >
                    Добавить
                </button>
            </form>
        </ModalWindow>
    </>
  )
}

export default CreateAimModal