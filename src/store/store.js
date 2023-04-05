import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import eeCalcPartAReducer from '@/features/eeSlice/eeSlicePartA'
import eeCalcPartBReducer from '@/features/eeSlice/eeSlicePartB'
import eeCalcPartCReducer from '@/features/eeSlice/eeSlicePartC'
import eeCalcPartDReducer from '@/features/eeSlice/eeSlicePartD'
import fswCalcReducer from '@/features/fswSlice/fswSlice'
import beautifulStep1 from '@/features/beautifulSlice/step1Slice'
import beautifulStep2 from '@/features/beautifulSlice/step2Slice'
import beautifulStep3 from '@/features/beautifulSlice/step3Slice'
import beautifulStep4 from '@/features/beautifulSlice/step4Slice'
import beautifulStepper from '@/features/beautifulSlice/stepperSlice'

const makeStore = () =>
    configureStore({
        reducer: {
            fswCalc: fswCalcReducer,
            eeCalcPartA: eeCalcPartAReducer,
            eeCalcPartB: eeCalcPartBReducer,
            eeCalcPartC: eeCalcPartCReducer,
            eeCalcPartD: eeCalcPartDReducer,
            beautifulStep1,
            beautifulStep2,
            beautifulStep3,
            beautifulStep4,
            beautifulStepper,
        },
    })

export const wrapper = createWrapper(makeStore, {debug: true})