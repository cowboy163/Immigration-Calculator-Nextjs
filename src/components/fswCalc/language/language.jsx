import {useDispatch, useSelector} from "react-redux";
import {
    changeLangTest,
    changeLanguage,
    changeOtherLang, changeOtherLangScore, changeOtherLangTest,
    changeScore,
    changeTestScore
} from "@/features/fswSlice/fswSlice";
import {languageData, otherLanguageSelection} from "@/data/languageData";
import {useEffect, useState} from "react";
import getRuleLocation from "@/utility/getRuleLocation";
import getLanguageScoreForFSW from "@/utility/fsw/getLanguageScoreForFSW";
import Language from "@/components/calcTable/language/language";

const LanguageView = ({lineIndex}) => {
    const dispatch = useDispatch()

    // language-top data
    const langSelected = useSelector(state => state.fswCalc.language.selected)
    const langChange = evt => {
        const val = evt.target.value
        const index = lineIndex
        const optionIndex = evt.target.attributes.index.value
        dispatch(changeLanguage([val, index, optionIndex]))
    }
    const langTopData = {
        content: languageData,
        selected: langSelected,
        onChange: langChange,
    }

    // test data
    const testSelected = useSelector(state => state.fswCalc.language.test)
    const langIndex = useSelector(state => state.fswCalc.language.optionIndex)
    const testChange = evt => {
        const val = evt.target.value
        dispatch(changeLangTest(val))
    }
    const testOptions = languageData.options[+langIndex].test
    const testChoiceData = {
        content: {options: testOptions},
        selected: testSelected,
        onChange: testChange,
    }
    // score data
    const scoreChange = evt => {
        let val = evt.target.value
        let inputIndex = evt.target.attributes.index.value
        dispatch(changeTestScore([val, inputIndex]))
    }
    const score = useSelector(state => state.fswCalc.language.testScore)
    const testScore = {
        score,
        scoreChange,
    }
    const testData = {
        testChoiceData: testChoiceData,
        testCategory: languageData.testCategory,
        testScore,
    }

    // calculate language score
    const language = useSelector(state => state.fswCalc.language)
    const [firstLangScore, setFirstLangScore] = useState("")
    const [secondLangScore, setSecondLangScore] = useState("")
    useEffect(() => {
        let dir = ['languageForFSW', 'firstLanguage', language.selected, language.test]
        let ruleLocation = getRuleLocation(dir)
        if(language.test && language.test !== "") {
            getLanguageScoreForFSW(language, ruleLocation)
                .then(data => {
                    setFirstLangScore(data)
                })
        }
    }, [language])

    // calculate other language score
    const otherLang = useSelector(state => state.fswCalc.otherLang)
    useEffect(() => {
        let dir = ['languageForFSW', 'secondLanguage', otherLang.test]
        let ruleLocation = getRuleLocation(dir)
        if(otherLang.test && otherLang.test !== "") {
            getLanguageScoreForFSW(otherLang, ruleLocation)
                .then(data => {
                    setSecondLangScore(data)
                })
        }
    }, [otherLang])

    useEffect(() => {
        if(firstLangScore || (firstLangScore && secondLangScore)) {
            let totalLangScore = +firstLangScore + +secondLangScore
            totalLangScore = String(totalLangScore)
            dispatch(changeScore([totalLangScore, lineIndex]))
        } else {
            dispatch(changeScore(["0", lineIndex]))
        }
    }, [firstLangScore, secondLangScore, dispatch, lineIndex])

    // second language data
    const otherLangChoiceSelected = useSelector(state => state.fswCalc.otherLang.selected)
    const otherLangChoiceChange = evt => {
        let val = evt.target.value
        dispatch(changeOtherLang(val))
    }
    const otherLangChoice = {
        content: {options: otherLanguageSelection},
        selected: otherLangChoiceSelected,
        onChange: otherLangChoiceChange,
    }
    const otherLangData = {
        otherLangChoice,
        otherLangChoiceSelected,
    }
    // other language test choice
    const otherLangTestSelected = useSelector(state => state.fswCalc.otherLang.test)
    const otherLangTestChange = evt => {
        const val = evt.target.value
        dispatch(changeOtherLangTest(val))
    }
    let otherLangTestOptions = {}
    if (langIndex === "0") {
        otherLangTestOptions = languageData.options[1].test
    } else {
        otherLangTestOptions = languageData.options[0].test
    }
    const otherLangTestChoiceData = {
        content: {options: otherLangTestOptions},
        selected: otherLangTestSelected,
        onChange: otherLangTestChange,
    }
    // other language test score
    const otherLangScoreChange = evt => {
        let val = evt.target.value
        let inputIndex = evt.target.attributes.index.value
        dispatch(changeOtherLangScore([val, inputIndex]))
    }
    const otherLangScore = useSelector(state => state.fswCalc.otherLang.testScore)
    const otherLangTestScore = {
        score: otherLangScore,
        scoreChange: otherLangScoreChange,
    }
    const otherLangTestData = {
        testChoiceData: otherLangTestChoiceData,
        testCategory: languageData.testCategory,
        testScore: otherLangTestScore,
    }

    const langData = {
        langTopData,
        testData,
        otherLangData,
        otherLangTestData,
    }

    return (
        <Language langData={langData}/>
    )
}
export default LanguageView