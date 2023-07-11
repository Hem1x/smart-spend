import { createSlice } from "@reduxjs/toolkit";

const financeSlice = createSlice({
    name: "finance",
    initialState: {
        income: 0,
        expense: 0,
        balance: 0,
    },
    reducers: {
        addIncome(state, action) {
            state.income = state.income + action.payload
        },
        addExpense(state, action) {
            state.expense = state.expense + action.payload
        },
        decreaseBalance(state, action) {
            state.balance = state.balance - action.payload
        },
        increaseBalance(state, action) {
            state.balance = state.balance + action.payload
        },
    }
})

export default financeSlice.reducer;
export const {addExpense, addIncome, decreaseBalance, increaseBalance} = financeSlice.actions 