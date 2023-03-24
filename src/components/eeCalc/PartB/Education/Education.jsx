import {useDispatch, useSelector} from "react-redux";
import {changeEducation, changeSubBScore} from "@/features/eeSlice/eeSlicePartB";
import {useEffect} from "react";
import getEducationScore from "@/utility/ee/getEducationScore";
import educationDataPartB from "@/data/eeCalc/partB/educationDataPartB";
import Education from "@/components/calcTable/education/education";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.eeCalcPartB.education)
    const handleChange = evt => {
        dispatch(changeEducation(evt.target.value))
    }
    useEffect(() => {
        const ruleLocation = '/csv/EE/spouse/education.csv'
        getEducationScore(selectValue, ruleLocation, "yes")
            .then(data => {
                dispatch(changeSubBScore([data, lineIndex]))
            })
    }, [selectValue, dispatch, lineIndex])

    return(
        <Education content={educationDataPartB}
                   onChange={evt => {handleChange(evt)}}
                   value={selectValue}
        />
    )
}
export default EducationView