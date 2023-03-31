import {createSlice} from "@reduxjs/toolkit";

const step1Slice = createSlice({
    name: "step1",
    initialState: {
        single: null,
    },
    reducers: {
        changeSingle: (state, action) => {
            state.single = action.payload
        }
    }
})

export const {
    changeSingle,
} = step1Slice.actions

export default step1Slice.reducer