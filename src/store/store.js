import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/Modal/modalSlice";
import financeSlice from "../features/Finances/financeSlice";
import aimSlice from "../features/Aims/aimSlice";
import adviceSlice from "../features/Advices/adviceSlice";

const rootReduxcer = combineReducers({
    modal: modalSlice,
    finance: financeSlice,
    aim: aimSlice,
    advice: adviceSlice,
})

export const store = configureStore({
    reducer: rootReduxcer,
    devTools: true,
})