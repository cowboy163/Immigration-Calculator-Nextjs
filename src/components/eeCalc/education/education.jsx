import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {changeEducation, changeSubScore} from "@/features/eeSlice/eeSlicePartA";
import Education from "@/components/calcTable/education/education";
import educationData from "@/data/eeCalc/educationData";
import getEducationScore from "@/utility/ee/getEducationScore";

const EducationView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.eeCalcPartA.education)
    const spouse = useSelector(state => state.eeCalcPartA.spouseChoice)
    const handleChange = evt => {
        dispatch(changeEducation(evt.target.value))
    }
    useEffect(() => {
        const ruleLocation = 'csv/EE/education.csv'
        getEducationScore(selectValue, ruleLocation, spouse)
            .then(data => {
                dispatch(changeSubScore([data, lineIndex]))
            })
    }, [selectValue, dispatch, lineIndex, spouse])

    return(
        <Education content={educationData}
                   onChange={evt => {handleChange(evt)}}
                   value={selectValue}
        />
    )
}
export default EducationView