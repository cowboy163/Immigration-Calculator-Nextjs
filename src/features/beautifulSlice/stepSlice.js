import {createSlice} from "@reduxjs/toolkit";

const stepSlice = createSlice({
    name: "step",
    initialState: {
        disableBtn: true,
    },
    reducers: {
        changeDisableBtn: (state, action) => {
            state.disableBtn = false
        },
        initiateBtn: (state, action) => {
            state.disableBtn = true
        },
    }
})

export const {
    changeDisableBtn,
    initiateBtn,
} = stepSlice.actions

export default stepSlice.reducer