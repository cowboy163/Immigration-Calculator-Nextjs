import {createSlice} from "@reduxjs/toolkit";
import beautifulData from "@/data/beautiful/beautifulData";

const stepperSlice = createSlice({
    name: "stepper",
    initialState: {
        activeStep: 0,
        stepLength: beautifulData[1].length,
    },
    reducers: {
        setActiveStep: (state, action) => {
            state.activeStep = action.payload
        },
        setStepLength: (state, action) => {
            state.stepLength = action.payload
        }
    }
})

export const {
    setActiveStep,
    setStepLength,
} = stepperSlice.actions

export default stepperSlice.reducer