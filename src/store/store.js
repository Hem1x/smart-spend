import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/Modal/modalSlice";
import financeSlice from "../features/Finances/financeSlice";
import aimSlice from "../features/Aims/aimSlice";
import adviceSlice from "../features/Advices/adviceSlice";
import historySlice from "../features/History/historySlice";

const rootReduxcer = combineReducers({
    modal: modalSlice,
    finance: financeSlice,
    aim: aimSlice,
    advice: adviceSlice,
    history: historySlice
})

export const store = configureStore({
    reducer: rootReduxcer,
    devTools: true,
})