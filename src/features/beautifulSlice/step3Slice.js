import {createSlice} from "@reduxjs/toolkit";
import {numInput, numInputAndDot} from "@/utility/inputRule";

const step3Slice = createSlice({
    name: "step3",
    initialState: {
        education: "",
        firstLang: {
            test: "null",
            testScore: ["", "", "", ""],
        },
        exInCA: "",
    },
    reducers: {
        changeEducation: (state, action) => {
            state.education = action.payload
        },
        changeFirstLangTest: (state, action) => {
            state.firstLang.test = action.payload
            state.firstLang.testScore = ["", "", "", ""]
        },
        changeFirstLangTestScore: (state, action) => {
            const value = numInputAndDot(action.payload[0], 3)
            const index = action.payload[1]
            state.firstLang.testScore[index] = value
        },
        changeExInCA: (state, action) => {
            state.exInCA = numInput(action.payload, 1)
        },
    }
})

export const {
    changeEducation,
    changeFirstLangTest,
    changeFirstLangTestScore,
    changeExInCA,
} = step3Slice.actions

export default step3Slice.reducer