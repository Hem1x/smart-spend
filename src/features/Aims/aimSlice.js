import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
import {car} from '../../assets/mainPage'

const aimSlice = createSlice({
    name: "aim",
    initialState: [],
    reducers: {
        addAim(state, action) {
            const aimObj = {
                id: uuidv4(),
                name: action.payload.name,
                image: car,
                nessarySum: action.payload.nessarySum,
                collectedSum: 0,
                isModalFormActive: false
            }

            state.push(aimObj)
        },
        refillAim(state, action) {
            state.map(aim => aim.id === action.payload.id ? aim.collectedSum += Number(action.payload.sum) : aim)
        },
        openModalForm(state, action) {
            state.map(aim => aim.id === action.payload ? aim.isModalFormActive = true : aim)
        },
        closeModalForm(state, action) {
            state.map(aim => aim.id === action.payload ? aim.isModalFormActive = false : aim)
        }
    }
})

export default aimSlice.reducer
export const {addAim, refillAim, openModalForm, closeModalForm} = aimSlice.actions