import {createSlice} from "@reduxjs/toolkit";
import {numInput, numInputAndDot} from "@/utility/inputRule";

const step2Slice = createSlice({
    name: "step2",
    initialState: {
        age: "",
        education: "",
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
        secondLangChoice: "no",
        secondLang: {
            test: "",
            enTest: "",
            frTest: "",
            testScore: ["", "", "", ""],
        },
        storedSecondLang: {
            ielts: ["", "", "", ""],
            celpip: ["", "", "", ""],
            tef: ["", "", "", ""],
            tcf: ["", "", "", ""],
        },
        exInCA: "",
        exOutCA: "",
        certification: "no",
    },
    reducers: {
        changeAge: (state, action) => {
            let value = numInput(action.payload, 3)
            if(+value > 150) {
                value = "150"
            }
            state.age = value
        },
        changeEducation: (state, action) => {
            state.education = action.payload
        },
        changeFirstLangTest: (state, action) => {
            const testName = action.payload
            state.firstLang.test = testName
            const score = [...state.storedFirstLang[`${testName}`]]
            state.firstLang.testScore = score
            // English or French
            if(testName.charAt(0) === 't') {
                state.secondLang.test = state.secondLang.enTest
            } else {
                state.secondLang.test = state.secondLang.frTest
            }
            // second lang score
            if(state.secondLang.test) {
                const secScore = [...state.storedSecondLang[`${state.secondLang.test}`]]
                state.secondLang.testScore = secScore
            }
        },
        changeFirstLangTestScore: (state, action) => {
            const value = numInputAndDot(action.payload[0], 3)
            const index = action.payload[1]
            state.firstLang.testScore[index] = value
        },
        changeSecondLangTest: (state, action) => {
            const testName = action.payload
            state.secondLang.test = testName
            if(testName.charAt(0) === 't') {
                state.secondLang.frTest = testName
            } else {
                state.secondLang.enTest = testName
            }
            const score = [...state.storedSecondLang[`${testName}`]]
            state.secondLang.testScore = score
        },
        changeSecondLangTestScore: (state, action) => {
            const value = numInputAndDot(action.payload[0], 3)
            const index = action.payload[1]
            state.secondLang.testScore[index] = value
        },
        changeExInCA: (state, action) => {
            state.exInCA = numInput(action.payload, 1)
        },
        changeExOutCA: (state, action) => {
            state.exOutCA = numInput(action.payload, 1)
        },
        changeCertification: (state, action) => {
            state.certification = action.payload
        },
        setStoredFirstLang: (state, action) => {
            const testName = state.firstLang.test
            const testScore = [...state.firstLang.testScore]
            state.storedFirstLang[`${testName}`] = [...testScore]
        },
        setSecondLangChoice: (state, action) => {
            state.secondLangChoice = action.payload
        },
        setStoredSecondLang: (state, action) => {
            const testName = state.secondLang.test
            const testScore = [...state.secondLang.testScore]
            state.storedSecondLang[`${testName}`] = [...testScore]
        },
    }
})

export const {
    changeAge,
    changeEducation,
    changeFirstLangTest,
    changeFirstLangTestScore,
    changeSecondLangTest,
    changeSecondLangTestScore,
    changeExInCA,
    changeExOutCA,
    changeCertification,
    setStoredFirstLang,
    setSecondLangChoice,
    setStoredSecondLang,
} = step2Slice.actions

export default step2Slice.reducer