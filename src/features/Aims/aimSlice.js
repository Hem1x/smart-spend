import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
import { car, home, vacation } from "../../assets";

const imageObj = {
    home,
    vacation,
    car,
}

const aimSlice = createSlice({
    name: "aim",
    initialState: [],
    reducers: {
        addAim(state, action) {
            const aimObj = {
                id: uuidv4(),
                name: action.payload.name,
                nessarySum: action.payload.nessarySum,
                collectedSum: 0,
                isModalFormActive: false
            }

            switch (action.payload.name.toLowerCase()) {
                case 'отдых': {
                    aimObj['image'] = imageObj.vacation
                    break
                }
                case 'дом': {
                    aimObj['image'] = imageObj.home
                    break
                }
                case 'машина': {
                    aimObj['image'] = imageObj.car
                    break
                }
                default: {
                    aimObj['image'] = imageObj.car
                }
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