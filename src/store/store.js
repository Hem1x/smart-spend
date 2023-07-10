import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/Modal/modalSlice";

const rootReduxcer = combineReducers({
    modal: modalSlice,
})

export const store = configureStore({
    reducer: rootReduxcer,
    devTools: true,
})