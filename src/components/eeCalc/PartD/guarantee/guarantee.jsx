import {useDispatch, useSelector} from "react-redux";
import {changeGuarantee, changeSubDScore} from "@/features/eeSlice/eeSlicePartD";
import {guaranteeData} from "@/data/eeCalc/eePartDData";
import {useEffect} from "react";
import getAdditionalScore from "@/utility/ee/partD/getAdditionalScore";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";

const GuaranteeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.eeCalcPartD.guarantee)
    const onChange = evt => {
        dispatch(changeGuarantee(evt.target.value))
    }
    const choiceData = {
        content: guaranteeData,
        onChange,
        selected,
    }
    // score
    useEffect(() => {
        const startIndex = 6
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
export default GuaranteeView