import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Age from "@/components/calcTable/age/age";
import {changeAge, changeSubScore} from "@/features/eeSlice/eeSlicePartA";
import getAgeScore from "@/utility/ee/getAgeScore";

const AgeView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const age = useSelector(state => state.eeCalcPartA.age)
    const spouse = useSelector(state => state.eeCalcPartA.spouseChoice)
    const handleChange = evt => {
        let val = evt.target.value
        dispatch(changeAge(val))
    }

    useEffect(() => {
        const ruleLocation = 'csv/EE/age.csv'
        getAgeScore(age, ruleLocation, spouse).then(score => {
            dispatch(changeSubScore([score, lineIndex]))
        })
    }, [age, dispatch, lineIndex, spouse])

    return(
        <Age inputValue={age}
             onChange={evt => {handleChange(evt)}}
        />
    )
}
export default AgeView