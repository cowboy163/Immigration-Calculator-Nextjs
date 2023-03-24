import {createSlice} from "@reduxjs/toolkit";

export const eeSlicePartD = createSlice({
    name: "eeCalcPartD",
    initialState: {
        relativeOption: "",
        subScoreD: ["", "", "", "", ""],
        education: "",
        guarantee: "",
        provincialNomination: "",
    },
    reducers: {
        changeRelatives: (state, action) => {
            state.relativeOption = action.payload
        },
        changeEducation: (state, action) => {
            state.education = action.payload
        },
        changeGuarantee: (state, action) => {
            state.guarantee = action.payload
        },
        changeProvincialNomination: (state, action) => {
            state.provincialNomination = action.payload
        },
        changeSubDScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.subScoreD[index] = score
        },
    },
})

export const {
    changeRelatives,
    changeEducation,
    changeGuarantee,
    changeProvincialNomination,
    changeSubDScore,
} = eeSlicePartD.actions
export default eeSlicePartD.reducer