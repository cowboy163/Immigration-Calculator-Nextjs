import {configureStore, createStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import eeCalcPartAReducer from '@/features/eeSlice/eeSlicePartA'
import eeCalcPartBReducer from '@/features/eeSlice/eeSlicePartB'
import eeCalcPartCReducer from '@/features/eeSlice/eeSlicePartC'

const makeStore = () =>
    configureStore({
        reducer: {
            // fswCalc: fswCalcReducer,
            eeCalcPartA: eeCalcPartAReducer,
            eeCalcPartB: eeCalcPartBReducer,
            eeCalcPartC: eeCalcPartCReducer,
            // eeCalcPartD: eeCalcPartDReducer,
        },
    })

export const wrapper = createWrapper(makeStore, {debug: true})