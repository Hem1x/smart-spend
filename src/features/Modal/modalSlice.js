import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        createAimModal: false,
        refillAimModal: false,
        incomeModal: false,
        expenseModal: false,
    },
    reducers: {
        openCreate(state) {
            state.createAim = true
        },
        openRefill(state) {
            state.refillAim = true
        },
        openIncome(state) {
            state.income = true
        },
        openExpense(state) {
            state.expense = true
        },
        closeAll(state) {
            state.createAim = false
            state.refillAim = false
            state.income = false
            state.expense = false
        }
    }
})

export default modalSlice.reducer
export const {openCreate, openRefill, openIncome, openExpense, closeAll} = modalSlice.actions