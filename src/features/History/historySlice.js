import { createReducer } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid"

const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

const historySlice = createReducer({
    name: "history",
    initialState: [],
    reducers: {
        addTransaction(state, action) {
            const transactionObj = {
                id: uuidv4(),
                name: action.name,
                sum: action.sum,
                date: {
                    day: new Date().getDate(),
                    month: new Date().getMonth() + 1,
                    hours: new Date().getHours(),
                    minutes: new Date().getMinutes()
                }
            }

            state.push(transactionObj)
        }
    }
})