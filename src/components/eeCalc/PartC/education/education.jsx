import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getRuleLocation from "@/utility/getRuleLocation";
import getCLB from "@/utility/getCLB";
import {changeClb, changeCScore, changeOtherClb} from "@/features/eeSlice/eeSlicePartC";
import specialCalcLine1 from "@/utility/ee/partC/specialCalcLine1";
import specialCalcLine2 from "@/utility/ee/partC/specialCalcLine2";
import {contentPartC} from "@/data/eeCalc/eePartCData";
import PartC from "@/components/calcTable/partC/partC";

const EducationPartCView = ({lineIndex}) => {
    const education = useSelector(state => state.eeCalcPartA.education)
    const language = useSelector(state => state.eeCalcPartA.language)
    const otherLanguage = useSelector(state => state.eeCalcPartA.otherLang)
    const clb = useSelector(state => state.eeCalcPartC.clb)
    const exIn = useSelector(state => state.eeCalcPartA.experience[0])
    const dispatch = useDispatch()
    // get clb score
    useEffect(() => {
        if(language.test) {
            const dir = ['EE', 'language', language.test]
            const ruleLocation = getRuleLocation(dir)
            getCLB(language, ruleLocation)
                .then(clb => {
                    dispatch(changeClb(clb))
                })
        }
    }, [language, dispatch])
    // get other clb score
    useEffect(() => {
        if(otherLanguage.test) {
            const dir = ['EE', 'language', otherLanguage.test]
            const ruleLocation = getRuleLocation(dir)
            getCLB(otherLanguage, ruleLocation)
                .then(clb => {
                    dispatch(changeOtherClb(clb))
                })
        }
    }, [otherLanguage, dispatch])
    // line 1 score
    useEffect(() => {
        const ruleLocation = '/csv/EE/partC/education1.csv'
        if(education) {
            specialCalcLine1(education, clb, ruleLocation)
                .then(data => {
                    const localIndex = 0
                    dispatch(changeCScore([data, lineIndex, localIndex]))
                })
        }
    }, [education, clb, dispatch, lineIndex])

    // line2 score
    useEffect(() => {
        const ruleLocation = '/csv/EE/partC/education2.csv'
        if(education) {
            specialCalcLine2(education, exIn, ruleLocation)
                .then(data => {
                    const localIndex = 1
                    dispatch(changeCScore([data, lineIndex, localIndex]))
                })
        }
    }, [education, exIn, dispatch, lineIndex])

    return(
        <PartC data={contentPartC.education}/>
    )
}
export default EducationPartCView