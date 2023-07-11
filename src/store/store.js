import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/Modal/modalSlice";
import financeSlice from "../features/Finances/financeSlice";

const rootReduxcer = combineReducers({
    modal: modalSlice,
    finance: financeSlice
})

export const store = configureStore({
    reducer: rootReduxcer,
    devTools: true,
})