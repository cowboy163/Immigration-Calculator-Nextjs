import {InputAdornment, InputLabel, Paper, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "@/features/beautifulSlice/step2Slice";
import ScorePad from "@/views/beautiful/scorePad";

const BeautifulAge = ({register, errors}) => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.beautifulStep2.age)

    const handleChange = value => {
        dispatch(changeAge(value))
    }

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
                           endAdornment: <InputAdornment position="end"><ScorePad number={value}/></InputAdornment>,
                       }}
                       placeholder='请输入您的年龄'
                       fullWidth={true}
                       margin="dense"
            />
        </Paper>
    )
}
export default BeautifulAge