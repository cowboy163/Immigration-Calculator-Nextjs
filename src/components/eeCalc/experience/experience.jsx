import {useDispatch, useSelector} from "react-redux";
import {changeInEx, changeOutEx, changeSubScore} from "@/features/eeSlice/eeSlicePartA";
import eeExperienceData from "@/data/eeCalc/eeExperienceData";
import {useEffect} from "react";
import getEducationScore from "@/utility/ee/getEducationScore";
import Experience from "@/components/calcTable/experience/experience";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // eeEx in Canada control
    const eeExValue = useSelector(state => state.eeCalcPartA.experience)
    const eeExInValue = eeExValue[0]
    const eeExInChange = evt => {
        let val = evt.target.value
        dispatch(changeInEx(val))
    }
    const eeExInControl = {
        value: eeExInValue,
        onChange: eeExInChange,
        content: eeExperienceData[0],
    }
    // eeEx out Canada control
    const eeExOutValue = eeExValue[1]
    const eeExOutChange = evt => {
        let val = evt.target.value
        dispatch(changeOutEx(val))
    }
    const eeExOutControl = {
        value: eeExOutValue,
        onChange: eeExOutChange,
        content: eeExperienceData[1],
    }
    const eeExData = {
        eeExInControl,
        eeExOutControl,
    }

    // score calculation
    const spouse = useSelector(state => state.eeCalcPartA.spouseChoice)
    useEffect(() => {
        const ruleLocation = '/csv/EE/experience/canadaExperience.csv'
        getEducationScore(eeExInValue, ruleLocation, spouse)
            .then(data => {
                dispatch(changeSubScore([data, lineIndex]))
            })
    }, [eeExInValue, spouse, dispatch, lineIndex])

    return(
        <Experience eeExData={eeExData}/>
    )
}
export default ExperienceView