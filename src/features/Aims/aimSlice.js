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
                collectedSum: 0
            }

            state.push(aimObj)
        },
        refillAim(state, action) {
            state.map(aim => 
                aim.id === action.payload.id ? 
                    aim.collectedSum + action.payload.sum 
                    : 
                    aim
                )
        }
    }
})

export default aimSlice.reducer
export const {addAim, refillAim} = aimSlice.actions