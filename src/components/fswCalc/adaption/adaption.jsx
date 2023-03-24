import {useDispatch, useSelector} from "react-redux";
import {changeAdaption, changeScore} from "@/features/fswSlice/fswSlice";
import {useEffect} from "react";
import simpleScoreCalc from "@/utility/simpleScoreCalc";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import {adaptionContents} from "@/data/fswCalc/adaptionData";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";

const AdaptionView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.fswCalc.adaptionValue)
    const handleChange = (evt, index) => {
        const val = evt.target.value
        dispatch(changeAdaption([val, index]))
    }
    useEffect(() => {
        let score = 0
        let flag = false
        selected.forEach(item => {
            score += +simpleScoreCalc(item, 5)
            if(item !== "") {
                flag = true
            }
        })
        score = +score > 10? String(10) : String(score)
        if(flag) {
            dispatch(changeScore([score, lineIndex]))
        }
    }, [selected, dispatch, lineIndex])
    return(
        <CalcSubTable>
            {
                adaptionContents && adaptionContents?.map((item, index) =>
                    <ChoiceRow ChoiceData={
                        {
                            onChange: evt => {handleChange(evt, index)},
                            selected: selected[index],
                            content: item,
                        }
                    }
                               key={index}
                    />
                )
            }
        </CalcSubTable>
    )
}
export default AdaptionView