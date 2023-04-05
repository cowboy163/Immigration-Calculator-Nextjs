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
        secondLang: {
            test: "null",
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
        certification: "",
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
            state.firstLang.test = action.payload
            state.firstLang.testScore = ["", "", "", ""]
        },
        changeFirstLangTestScore: (state, action) => {
            const value = numInputAndDot(action.payload[0], 3)
            const index = action.payload[1]
            state.firstLang.testScore[index] = value
        },
        changeSecondLangTest: (state, action) => {
            state.secondLang.test = action.payload
            state.secondLang.testScore = ["", "", "", ""]
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
} = step2Slice.actions

export default step2Slice.reducer