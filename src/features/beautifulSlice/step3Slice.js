import {createSlice} from "@reduxjs/toolkit";
import {numInput, numInputAndDot} from "@/utility/inputRule";

const step3Slice = createSlice({
    name: "step3",
    initialState: {
        education: "",
        firstLangChoice: "no",
        firstLang: {
            test: "",
            testScore: ["", "", "", ""],
        },
        storedFirstLang: {
            ielts: ["", "", "", ""],
            celpip: ["", "", "", ""],
            tef: ["", "", "", ""],
            tcf: ["", "", "", ""],
        },
        exInCA: "",
    },
    reducers: {
        changeEducation: (state, action) => {
            state.education = action.payload
        },
        changeFirstLangTest: (state, action) => {
            const testName = action.payload
            state.firstLang.test = testName
            const score = [...state.storedFirstLang[`${testName}`]]
            state.firstLang.testScore = score
        },
        changeFirstLangTestScore: (state, action) => {
            const value = numInputAndDot(action.payload[0], 3)
            const index = action.payload[1]
            state.firstLang.testScore[index] = value
        },
        changeExInCA: (state, action) => {
            state.exInCA = numInput(action.payload, 1)
        },
        setFirstLangChoice: (state, action) => {
            state.firstLangChoice = action.payload
        },
        setStoredFirstLang: (state, action) => {
            const testName = state.firstLang.test
            const testScore = [...state.firstLang.testScore]
            state.storedFirstLang[`${testName}`] = [...testScore]
        },
    }
})

export const {
    changeEducation,
    changeFirstLangTest,
    changeFirstLangTestScore,
    changeExInCA,
    setFirstLangChoice,
    setStoredFirstLang,
} = step3Slice.actions

export default step3Slice.reducer