import {useDispatch, useSelector} from "react-redux";
import {changeRelatives, changeSubDScore} from "@/features/eeSlice/eeSlicePartD";
import {relativesData} from "@/data/eeCalc/eePartDData";
import {useEffect} from "react";
import getAdditionalScore from "@/utility/ee/partD/getAdditionalScore";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";

const RelativesView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const onChange = evt => {
        const val = evt.target.value
        dispatch(changeRelatives(val))
    }
    const selected = useSelector(state => state.eeCalcPartD.relativeOption)
    const choiceData = {
        content: relativesData,
        selected,
        onChange,
    }
    // score
    useEffect(() => {
        if(selected) {
            const startIndex = 0
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
export default RelativesView