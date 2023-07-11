import { createReducer } from "@reduxjs/toolkit";

const balanceSlice = createReducer({
    name: "balance",
    initialState: 0,
    reducers: {
        increaseBalance(state, action) {
            state = state + action.payload
        },
        decreaseBalance(state, action) {
            state = state - action.payload
        },
    }
})

export default balanceSlice.reducer
export const {increaseBalance, decreaseBalance} = balanceSlice.actions