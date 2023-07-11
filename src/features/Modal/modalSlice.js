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
            state.createAimModal = true
        },
        openIncome(state) {
            state.incomeModal = true
        },
        openExpense(state) {
            state.expenseModal = true
        },
        closeAll(state) {
            state.createAimModal = false
            state.incomeModal = false
            state.expenseModal = false
        }
    }
})

export default modalSlice.reducer
export const {openCreate, openIncome, openExpense, closeAll} = modalSlice.actions