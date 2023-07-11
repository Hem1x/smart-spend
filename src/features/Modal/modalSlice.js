import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        createAimModal: false,
        incomeModal: false,
        expenseModal: false,
    },
    reducers: {
        openCreate(state) {
            state.createAim = true
        },
        openIncome(state) {
            state.income = true
        },
        openExpense(state) {
            state.expense = true
        },
        closeAll(state) {
            state.createAim = false
            state.income = false
            state.expense = false
        }
    }
})

export default modalSlice.reducer
export const {openCreate, openIncome, openExpense, closeAll} = modalSlice.actions