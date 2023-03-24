import {useDispatch, useSelector} from "react-redux";
import {changeEducation, changeSubDScore} from "@/features/eeSlice/eeSlicePartD";
import {educationData} from "@/data/eeCalc/eePartDData";
import {useEffect} from "react";
import getAdditionalScore from "@/utility/ee/partD/getAdditionalScore";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.eeCalcPartD.education)
    const onChange = evt => {
        dispatch(changeEducation(evt.target.value))
    }
    const choiceData = {
        content: educationData,
        onChange,
        selected,
    }
    // score calculation
    useEffect(() => {
        const startIndex = 3
        if(selected) {
            getAdditionalScore(selected, startIndex)
                .then(data => {
                    dispatch(changeSubDScore([data, lineIndex]))
                })
        }
    }, [selected, dispatch, lineIndex])
    return(
        <CalcSubTable>
            <ChoiceRow ChoiceData={choiceData}/>
        </CalcSubTable>
    )
}
export default EducationView