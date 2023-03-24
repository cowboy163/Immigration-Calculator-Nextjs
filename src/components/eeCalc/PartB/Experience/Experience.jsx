import {useDispatch, useSelector} from "react-redux";
import {changeInEx, changeSubBScore} from "@/features/eeSlice/eeSlicePartB";
import eeExperienceData from "@/data/eeCalc/eeExperienceData";
import {useEffect} from "react";
import getEducationScore from "@/utility/ee/getEducationScore";
import ExperiencePartB from "@/components/calcTable/experiencePartB/experiencePartB";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // eeEx Part2 in Canada control
    const eeExValue = useSelector(state => state.eeCalcPartB.experience)
    const eeExInChange = evt => {
        let val = evt.target.value
        dispatch(changeInEx(val))
    }
    const eeExInControl = {
        value: eeExValue,
        onChange: eeExInChange,
        content: eeExperienceData[2],
    }
    const eeExData = {
        eeExInControl,
    }
    // score calculation
    useEffect(() => {
        const ruleLocation = '/csv/EE/spouse/experience.csv'
        getEducationScore(eeExValue, ruleLocation, "yes")
            .then(data => {
                dispatch(changeSubBScore([data, lineIndex]))
            })
    }, [eeExValue, dispatch, lineIndex])

    return(
        <ExperiencePartB eeExData={eeExData}/>
    )
}
export default ExperienceView