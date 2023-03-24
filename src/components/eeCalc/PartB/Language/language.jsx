import {useDispatch, useSelector} from "react-redux";
import {changeLanguage, changeScore, changeSubBScore, changeTest} from "@/features/eeSlice/eeSlicePartB";
import {languageDataPartB} from "@/data/eeCalc/partB/languageDataPartB";
import {useEffect} from "react";
import getLanguageScore from "@/utility/ee/getLanguageScore";
import Language from "@/components/calcTable/language/language";

const LanguageView = ({lineIndex}) => {
    const dispatch = useDispatch()

    // language-top data
    const langSelected = useSelector(state => state.eeCalcPartB.language.selected)
    const langChange = evt => {
        const val = evt.target.value
        const index = lineIndex
        const optionIndex = evt.target.attributes.index.value
        dispatch(changeLanguage([val, index, optionIndex]))
    }
    const langTopData = {
        content: languageDataPartB,
        selected: langSelected,
        onChange: langChange,
    }

    // test data
    const testSelected = useSelector(state => state.eeCalcPartB.language.test)
    const langIndex = useSelector(state => state.eeCalcPartB.language.optionIndex)
    const testChange = evt => {
        const val = evt.target.value
        dispatch(changeTest(val))
    }
    const testOptions = languageDataPartB.options[+langIndex].test
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
    const score = useSelector(state => state.eeCalcPartB.language.testScore)
    const testScore = {
        score,
        scoreChange,
    }

    const testData = {
        testChoiceData: testChoiceData,
        testCategory: languageDataPartB.testCategory,
        testScore,
    }

    const langData = {
        langTopData,
        testData,
    }

    // section B score calculation
    const language = useSelector(state => state.eeCalcPartB.language)
    useEffect(() => {
        const spouse = 'yes'
        const clbRule = '/csv/EE/spouse/language.csv'
        if(language.test) {
            getLanguageScore(language, spouse, clbRule)
                .then(score => {
                    dispatch(changeSubBScore([score, lineIndex]))
                })
        }
    }, [language, dispatch, lineIndex])

    return (
        <Language langData={langData} secondLangNotShow={true}/>
    )
}
export default LanguageView
