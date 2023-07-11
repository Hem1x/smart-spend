import React, { useState } from 'react'
import ModalWindow from '../ModalWindow'
import { useDispatch } from 'react-redux'
import { addAim } from '../../features/Aims/aimSlice'
import { closeAll } from '../../features/Modal/modalSlice'

const CreateAimModal = ({title}) => {
    const dispatch = useDispatch()

    const [aimObj, setAimObj] = useState({
        name: '',
        nessarySum: 0,
    })

    const createAim = (e, aim) => {
        e.preventDefault()
        dispatch(addAim({
            name: aim.name,
            nessarySum: aim.nessarySum
        }))
        dispatch(closeAll())
    }

  return (
    <ModalWindow title={title} width='600px'>
        <form onSubmit={(e) => createAim(e, aimObj)}>
            <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
                <input
                    required
                    className='bg-transparent w-full' 
                    placeholder='Название цели'
                    onChange={(e) => setAimObj({...aimObj, name: e.target.value})}
                />
            </div>

            <div className='bg-gray-200 py-2 px-5 rounded-full mb-4'>
                <input
                    required
                    className='bg-transparent w-full' 
                    type="number" 
                    placeholder='Необходимая сумма'
                    onChange={(e) => setAimObj({...aimObj, nessarySum: e.target.value})}
                />
            </div>

            <button
                type='submit'
                className='bg-yellowBtn w-full py-2 font-semibold text-xl text-black rounded-full'
            >
                Добавить
            </button>
        </form>
    </ModalWindow>
  )
}

export default CreateAimModal