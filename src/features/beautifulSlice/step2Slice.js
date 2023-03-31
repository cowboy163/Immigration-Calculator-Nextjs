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
        }
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
        },
        changeFirstLangTestScore: (state, action) => {
            const value = numInputAndDot(action.payload[0])
            const index = action.payload[1]
            state.firstLang.testScore[index] = value
        }
    }
})

export const {
    changeAge,
    changeEducation,
    changeFirstLangTest,
    changeFirstLangTestScore,
} = step2Slice.actions

export default step2Slice.reducer