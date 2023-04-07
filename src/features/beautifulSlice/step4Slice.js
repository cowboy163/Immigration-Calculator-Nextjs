import {createSlice} from "@reduxjs/toolkit";

const step4Slice = createSlice({
    name: "step4",
    initialState: {
        pnp: "no",
        sponsorship: "2",
        education: "2",
        relative: "no",
    },
    reducers: {
        changePnp: (state, action) => {
            state.pnp = action.payload
        },
        changeSponsorship: (state, action) => {
            state.sponsorship = action.payload
        },
        changeEducation: (state, action) => {
            state.education = action.payload
        },
        changeRelative: (state, action) => {
            state.relative = action.payload
        },
    }
})

export const {
    changePnp,
    changeSponsorship,
    changeEducation,
    changeRelative,
} = step4Slice.actions

export default step4Slice.reducer