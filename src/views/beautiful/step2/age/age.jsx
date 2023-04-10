import {InputAdornment, InputLabel, Paper, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "@/features/beautifulSlice/step2Slice";
import ScorePad from "@/views/beautiful/scorePad";
import {useEffect, useState} from "react";
import {ageScoreCalc} from "@/utility/beautiful/calculateScore";

const BeautifulAge = ({register, errors}) => {
    const dispatch = useDispatch()
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const value = step2.age
    const [score, setScore] = useState("")

    const handleChange = value => {
        dispatch(changeAge(value))
    }

    // age score
    useEffect(() => {
        ageScoreCalc(step1, step2)
            .then(score => {
                setScore(String(score))
            })
    }, [step1, step2])

    return (
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1"}}>
                年龄
            </InputLabel>
            <TextField name="age"
                       error={!!errors.age}
                       id="outlined-error"
                       helperText={errors.age?.message}
                       hiddenLabel={true}
                       type="text"
                       value={value}
                       onChange={evt => handleChange(evt.target.value)}
                       InputProps={{
                           inputProps: {
                               ...register('age', {required: '年龄不能为空'})
                           },
                           style: {
                               background: '#f5f5f5',
                               height: '2.2rem',
                               borderRadius: "0.3rem",
                           },
                           endAdornment: <InputAdornment position="end"><ScorePad text={score} paddingRight="0"/></InputAdornment>,
                       }}
                       placeholder='请输入您的年龄'
                       fullWidth={true}
                       margin="dense"
            />
        </Paper>
    )
}
export default BeautifulAge