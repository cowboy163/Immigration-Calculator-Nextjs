import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import specialCalcLine3 from "@/utility/ee/partC/specialCalcLine3";
import {changeCScore} from "@/features/eeSlice/eeSlicePartC";
import specialCalcLine4 from "@/utility/ee/partC/specialCalcLine4";
import {contentPartC} from "@/data/eeCalc/eePartCData";
import PartC from "@/components/calcTable/partC/partC";

const ExperiencePartCView = ({lineIndex}) => {
    const clb = useSelector(state => state.eeCalcPartC.clb)
    const exOut = useSelector(state => state.eeCalcPartA.experience[1])
    const exIn = useSelector(state => state.eeCalcPartA.experience[0])
    const dispatch = useDispatch()
    // line 1 score
    useEffect(() => {
        if(exOut) {
            const ruleLocation = '/csv/EE/partC/experience1.csv'
            specialCalcLine3(exOut, clb, ruleLocation)
                .then(data => {
                    const localIndex = 0
                    dispatch(changeCScore([data, lineIndex, localIndex]))
                })
        }
    }, [clb, exOut, dispatch, lineIndex])
    // line 2 score
    useEffect(() => {
        if(exOut) {
            const ruleLocation = '/csv/EE/partC/experience2.csv'
            specialCalcLine4(exOut, exIn, ruleLocation)
                .then(data => {
                    const localIndex = 1
                    dispatch(changeCScore([data, lineIndex, localIndex]))
                })
        }
    }, [exIn, exOut, dispatch, lineIndex])

    return(
        <PartC data={contentPartC.experience}/>
    )
}
export default ExperiencePartCView