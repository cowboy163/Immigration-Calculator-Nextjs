import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import eeCalcPartAReducer from '@/features/eeSlice/eeSlicePartA'
import eeCalcPartBReducer from '@/features/eeSlice/eeSlicePartB'
import eeCalcPartCReducer from '@/features/eeSlice/eeSlicePartC'
import eeCalcPartDReducer from '@/features/eeSlice/eeSlicePartD'
import fswCalcReducer from '@/features/fswSlice/fswSlice'
import beautifulStep1 from '@/features/beautifulSlice/step1Slice'
import beautifulStep from '@/features/beautifulSlice/stepSlice'

const makeStore = () =>
    configureStore({
        reducer: {
            fswCalc: fswCalcReducer,
            eeCalcPartA: eeCalcPartAReducer,
            eeCalcPartB: eeCalcPartBReducer,
            eeCalcPartC: eeCalcPartCReducer,
            eeCalcPartD: eeCalcPartDReducer,
            beautifulStep1,
            beautifulStep,
        },
    })

export const wrapper = createWrapper(makeStore, {debug: true})