import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid"

const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
];

const historySlice = createSlice({
    name: "history",
    initialState: [],
    reducers: {
        addTransaction(state, action) {
            const transactionObj = {
                id: uuidv4(),
                type: action.payload.type,
                name: action.payload.name,
                sum: action.payload.sum,
                date: {
                    day: new Date().getDate(),
                    month: months[Number(new Date().getMonth())],
                    hours: new Date().getHours(),
                    minutes: new Date().getMinutes()
                }
            }

            if(state.length > 5) {
                state.shift()
            }
            state.push(transactionObj)
        }
    }
})

export default historySlice.reducer
export const {addTransaction} = historySlice.actions