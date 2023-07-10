import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        createAim: false,
        refillAim: false,
        income: false,
        expense: false,
    },
    reducers: {
        create(state) {
            state.createAim = true
        },
        refill(state) {
            state.refillAim = true
        },
        income(state) {
            state.income = true
        },
        expense(state) {
            state.expense = true
        },
        close(state) {
            state.createAim = false
            state.refillAim = false
            state.income = false
            state.expense = false
        }
    }
})

export default modalSlice.reducer
export const {create, refill, income, expense, close} = modalSlice.actions