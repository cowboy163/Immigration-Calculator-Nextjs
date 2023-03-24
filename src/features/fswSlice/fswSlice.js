import {createSlice} from "@reduxjs/toolkit";
import {numInput, numInputAndDot} from "@/utility/inputRule";
import simpleScoreCalc from "@/utility/simpleScoreCalc";

export const fswSlice = createSlice({
    name: "fswCalc",
    initialState: {
        age: "",
        education: "",
        language: {
            selected: "",
            optionIndex: "",
            test: "",
            testScore: ["","","",""],
        },
        otherLang: {
            selected: "",
            test: "",
            testScore: ["","","",""]
        },
        experience: "",
        invitation: "",
        score: ["","","","","",""],
        adaptionValue: ["","","","","","",""],
    },
    reducers: {
        changeAge: (state, action) => {
            let val = action.payload
            val = numInput(val, 2)
            state.age = val
        },
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
            state.language.testScore = fswSlice.getInitialState().language.testScore
            state.otherLang.selected = ""
            state.score[lineIndex] = "0"
        },
        changeLangTest: (state, action) => {
            // update language test
            state.language.testScore = fswSlice.getInitialState().language.testScore
            state.language.test = action.payload
        },
        changeTestScore: (state, action) => {
            let val = action.payload[0]
            val = numInputAndDot(val, 3)
            let inputIndex = action.payload[1]
            state.language.testScore[inputIndex] = val
        },
        changeOtherLang: (state, action) => {
            state.otherLang.selected = action.payload
            if(state.otherLang.selected !== "yes") {
                state.otherLang.test = ""
                state.otherLang.testScore = ["", "", "", ""]
            }
        },
        changeOtherLangTest: (state, action) => {
            state.otherLang.test = action.payload
            state.otherLang.testScore = fswSlice.getInitialState().otherLang.testScore
        },
        changeOtherLangScore: (state, action) => {
            let val = action.payload[0]
            val = numInputAndDot(val, 3)
            let inputIndex = action.payload[1]
            state.otherLang.testScore[inputIndex] = val
        },
        changeExperience: (state, action) => {
            state.experience = action.payload
        },
        changeInvitation: (state, action) => {
            let val = action.payload[0]
            state.invitation = val
            const lineIndex = action.payload[1]
            state.score[lineIndex] = simpleScoreCalc(val, "10")
        },
        changeAdaption: (state, action) => {
            let val = action.payload[0]
            const optionIndex = action.payload[1]
            state.adaptionValue[optionIndex] = val
        },
        changeScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.score[index] = score
        }

    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
    changeLangTest,
    changeTestScore,
    changeOtherLang,
    changeOtherLangTest,
    changeOtherLangScore,
    changeExperience,
    changeInvitation,
    changeAdaption,
    changeScore,
} = fswSlice.actions

export default fswSlice.reducer