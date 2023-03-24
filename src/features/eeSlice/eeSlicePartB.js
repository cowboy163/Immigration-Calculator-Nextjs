import {createSlice} from "@reduxjs/toolkit";
import {numInputAndDot} from "@/utility/inputRule";

export const eeSlicePartB = createSlice({
    name: "eeCalcPartB",
    initialState: {
        education: "",
        language: {
            selected: "",
            optionIndex: "",
            test: "",
            testScore: ["","","",""]
        },
        experience: "",
        subScoreB: [],
    },
    reducers: {
        changeEducation: (state,action) => {
            state.education = action.payload
        },
        changeLanguage: (state, action) => {
            let val = action.payload[0]
            let lineIndex = action.payload[1]
            let optionIndex = action.payload[2]

            state.language.selected = val
            state.language.optionIndex = optionIndex
            state.language.test = ""
            state.language.testScore = eeSlicePartB.getInitialState().language.testScore
            state.subScoreB[lineIndex] = "0"
        },
        changeTest: (state, action) => {
            state.language.test = action.payload
            state.language.testScore = eeSlicePartB.getInitialState().language.testScore
        },
        changeScore: (state, action) => {
            let val = action.payload[0]
            val = numInputAndDot(val, 3)
            let inputIndex = action.payload[1]
            state.language.testScore[inputIndex] = val
        },
        changeInEx: (state, action) => {
            state.experience = action.payload
        },
        changeSubBScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.subScoreB[index] = score
        },
    }
})

export const {
    changeEducation,
    changeLanguage,
    changeTest,
    changeScore,
    changeInEx,
    changeSubBScore,
} = eeSlicePartB.actions

export default eeSlicePartB.reducer