import {useDispatch, useSelector} from "react-redux";
import {
    changeLanguage,
    changeOtherLang, changeOtherLangScore, changeOtherLangTest,
    changeScore,
    changeSubScore,
    changeTest
} from "@/features/eeSlice/eeSlicePartA";
import {languageData, otherLanguageSelection} from "@/data/languageData";
import {useEffect, useState} from "react";
import getLanguageScore from "@/utility/ee/getLanguageScore";
import getSumOfStr from "@/utility/getSumOfStr";
import Language from "@/components/calcTable/language/language";

const LanguageView = ({lineIndex}) => {
    const dispatch = useDispatch()

    // language-top data
    const langSelected = useSelector(state => state.eeCalcPartA.language.selected)
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
    const testSelected = useSelector(state => state.eeCalcPartA.language.test)
    const langIndex = useSelector(state => state.eeCalcPartA.language.optionIndex)
    const testChange = evt => {
        const val = evt.target.value
        dispatch(changeTest(val))
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
        dispatch(changeScore([val, inputIndex]))
    }
    const score = useSelector(state => state.eeCalcPartA.language.testScore)
    const testScore = {
        score,
        scoreChange,
    }
    const testData = {
        testChoiceData: testChoiceData,
        testCategory: languageData.testCategory,
        testScore,
    }
    // calculate language section score
    const [firstLangScore, setFirstLangScore] = useState("")
    const [secondLangScore, setSecondLangScore] = useState("")
    const language = useSelector(state => state.eeCalcPartA.language)
    const spouse = useSelector(state => state.eeCalcPartA.spouseChoice)
    useEffect(() => {
        if(language.test) {
            getLanguageScore(language, spouse)
                .then(score => {
                    setFirstLangScore(score)
                })
        }
    }, [language, spouse])

    // calculate other language score
    const otherLang = useSelector(state => state.eeCalcPartA.otherLang)
    useEffect(() => {
        if(otherLang.test && otherLang.selected === "yes") {
            getLanguageScore(otherLang, spouse)
                .then(score => {
                    setSecondLangScore(score)
                })
        }
    }, [otherLang, spouse])

    useEffect(() => {
        const total = getSumOfStr(firstLangScore, secondLangScore)
        if(total && total !== "") {
            dispatch(changeSubScore([total, lineIndex]))
        }
    }, [firstLangScore, secondLangScore, dispatch, lineIndex])

    // second language data
    const otherLangChoiceSelected = useSelector(state => state.eeCalcPartA.otherLang.selected)
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
    const otherLangTestSelected = useSelector(state => state.eeCalcPartA.otherLang.test)
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
    const otherLangScore = useSelector(state => state.eeCalcPartA.otherLang.testScore)
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