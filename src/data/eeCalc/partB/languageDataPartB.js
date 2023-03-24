const testCategory = ["阅读", "写作", "听力", "口语"]

const engTest = [
    {
        text: "雅思G类（IELTS - General）",
        value: "ielts",
        group: "englishTestPartB",
    },
    {
        text: "思培（CELPIP）",
        value: "celpip",
        group: "englishTestPartB",
    },
]

const frTest = [
    {
        text: "TEF Canada",
        value: "tef",
        group: "frenchTestPartB",
    },
    {
        text: "TCF Canada",
        value: "tcf",
        group: "frenchTestPartB",
    },
]

const languageOption = [
    {
        text: "英语",
        value: "english",
        group: "languagePartB",
        test: engTest,
    },
    {
        text: "法语",
        value: "french",
        group: "languagePartB",
        test: frTest,
    }
]

const languageDataPartB = {
    options: languageOption,
    testCategory,
}

// other language data
const otherLanguageSelectionPartB = [
    {
        text: "是",
        value: "yes",
        group: "otherLangPartB",
    },
    {
        text: "否",
        value: "no",
        group: "otherLangPartB",
    },
]

export {
    languageDataPartB,
    otherLanguageSelectionPartB,
}