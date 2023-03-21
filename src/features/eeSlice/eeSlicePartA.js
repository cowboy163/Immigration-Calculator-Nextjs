import {createSlice} from "@reduxjs/toolkit";
import {numInput, numInputAndDot} from "@/utility/inputRule";

export const eeSlice = createSlice({
    name: "eeCalc",
    initialState: {
        age: "",
        education: "",
        language: {
            selected: "",
            optionIndex: "",
            test: "",
            testScore: ["","","",""]
        },
        otherLang: {
            selected: "",
            test: "",
            testScore: ["","","",""]
        },
        experience: ["", ""],
        subScoreA: [],
        spouseChoice: "",
    },
    reducers: {
        changeAge: (state,action)=>{
            let val = action.payload
            val = numInput(val, 2)
            state.age = val
        },
        changeEducation: (state,action) => {
            state.education = action.payload[0]
        },
        changeLanguage: (state, action) => {
            let val = action.payload[0]
            let lineIndex = action.payload[1]
            let optionIndex = action.payload[2]

            state.language.selected = val
            state.language.optionIndex = optionIndex
            state.language.test = ""
            state.language.testScore = eeSlice.getInitialState().language.testScore
            state.otherLang.selected = ""
            state.subScoreA[lineIndex] = "0"
        },
        changeTest: (state, action) => {
            state.language.test = action.payload
            state.language.testScore = eeSlice.getInitialState().language.testScore
        },
        changeScore: (state, action) => {
            let val = action.payload[0]
            val = numInputAndDot(val, 3)
            let inputIndex = action.payload[1]
            state.language.testScore[inputIndex] = val
        },
        changeOtherLang:(state, action) => {
            state.otherLang.selected = action.payload
            if(state.otherLang.selected !== "yes") {
                state.otherLang.test = ""
                state.otherLang.testScore = ["", "", "", ""]
            }
        },
        changeOtherLangTest: (state, action) => {
            state.otherLang.test = action.payload
            state.otherLang.testScore = eeSlice.getInitialState().otherLang.testScore
        },
        changeOtherLangScore: (state, action) => {
            let val = action.payload[0]
            val = numInputAndDot(val, 3)
            let inputIndex = action.payload[1]
            state.otherLang.testScore[inputIndex] = val
        },
        changeInEx: (state, action) => {
            state.experience[0] = action.payload
        },
        changeOutEx: (state, action) => {
            state.experience[1] = action.payload
        },
        changeSpouseChoice: (state, action) => {
            state.spouseChoice = action.payload
        },
        changeSubScore: (state, action) => {
            const score = action.payload[0]
            const index = action.payload[1]
            state.subScoreA[index] = score
        }
    }
})

export const {
    changeAge,
    changeEducation,
    changeLanguage,
    changeTest,
    changeScore,
    changeOtherLang,
    changeOtherLangTest,
    changeOtherLangScore,
    changeInEx,
    changeOutEx,
    changeSpouseChoice,
    changeSubScore,
} = eeSlice.actions

export default eeSlice.reducer