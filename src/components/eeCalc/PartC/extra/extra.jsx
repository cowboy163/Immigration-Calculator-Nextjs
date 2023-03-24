import {useDispatch, useSelector} from "react-redux";
import {changeTopOption} from "@/features/eeSlice/eeSlicePartC";
import {topOptionContent} from "@/data/eeCalc/eePartCData";
import Extra from "@/components/calcTable/extra/extra";

const ExtraView = () => {
    const dispatch = useDispatch()
    const topOption = useSelector(state => state.eeCalcPartC.topOption)
    const onChange = evt => {
        dispatch(changeTopOption(evt.target.value))
    }
    const selected = topOption
    const content = topOptionContent
    const extraData = {
        onChange,
        selected,
        content,
    }

    return(
        <Extra extraData={extraData}/>
    )
}
export default ExtraView