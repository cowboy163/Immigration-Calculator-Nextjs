import {useDispatch, useSelector} from "react-redux";
import {changeExperience, changeScore} from "@/features/fswSlice/fswSlice";
import fswExperienceData from "@/data/fswCalc/fswExperienceData";
import {useEffect} from "react";
import getRuleLocation from "@/utility/getRuleLocation";
import getEducationScoreForFSW from "@/utility/fsw/getEducationScoreForFSW";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import SelectBar from "@/components/utility/selectBar/selectBar";

const ExperienceView = ({lineIndex}) => {
    const dispatch = useDispatch()
    // fswEx in Canada control
    const fswExperience = useSelector(state => state.fswCalc.experience)
    const fswExperienceChange = evt => {
        let val = evt.target.value
        dispatch(changeExperience(val))
    }
    const fswExperienceControl = {
        value: fswExperience,
        onChange: fswExperienceChange,
        content: fswExperienceData,
    }
    useEffect(() => {
        const ruleLocation = getRuleLocation(['FSW', 'experience'])
        getEducationScoreForFSW(fswExperience, ruleLocation)
            .then(data => {
                dispatch(changeScore([data, lineIndex]))
            })
    }, [fswExperience, dispatch, lineIndex])

    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <SelectBar
                        value={fswExperienceControl.value}
                        onChange={fswExperienceControl.onChange}
                        content={fswExperienceControl.content}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default ExperienceView