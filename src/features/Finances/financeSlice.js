import { createSlice } from "@reduxjs/toolkit";

const financeSlice = createSlice({
    name: "finance",
    initialState: {
        income: 0,
        expense: 0,
    },
    reducers: {
        addIncome(state, action) {
            state.income = state.income + action.payload
        },
        addExpense(state, action) {
            state.expense = state.expense + action.payload
        }
    }
})

export default financeSlice.reducer;
export const {addExpense, addIncome} = financeSlice.actions 