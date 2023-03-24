import {useDispatch, useSelector} from "react-redux";
import {changeProvincialNomination, changeSubDScore} from "@/features/eeSlice/eeSlicePartD";
import {provincialNominationData} from "@/data/eeCalc/eePartDData";
import {useEffect} from "react";
import getAdditionalScore from "@/utility/ee/partD/getAdditionalScore";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";

const ProvincialNominationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.eeCalcPartD.provincialNomination)
    const onChange = evt => {
        dispatch(changeProvincialNomination(evt.target.value))
    }
    const choiceData = {
        content: provincialNominationData,
        onChange,
        selected,
    }
    // score
    useEffect(() => {
        const startIndex = 7
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
export default ProvincialNominationView