import {createSlice} from "@reduxjs/toolkit";

export const eeSlicePartC = createSlice({
    name: "eeCalcPartC",
    initialState: {
        topOption: "",
        subScoreC: [["", ""], ["", ""], [""]],
        clb: [],
        otherClb: [],
    },
    reducers: {
        changeTopOption: (state, action) => {
            state.topOption = action.payload
        },
        changeCScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            let localIndex = action.payload[2]
            if(localIndex || localIndex === 0) {
                state.subScoreC[index][localIndex] = score
                state.subScoreC[index] = state.subScoreC[index].map(item => item ? item : "0")
            } else {
                state.subScoreC[index] = score
            }
        },
        changeClb: (state, action) => {
            state.clb = action.payload
        },
        changeOtherClb: (state, action) => {
            state.otherClb = action.payload
        },
    },
})

export const {
    changeTopOption,
    changeCScore,
    changeClb,
    changeOtherClb,
} = eeSlicePartC.actions

export default eeSlicePartC.reducer