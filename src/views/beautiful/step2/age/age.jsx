import {InputLabel, Paper, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeAge} from "@/features/beautifulSlice/step2Slice";

const BeautifulAge = () => {
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
            <TextField
                hiddenLabel={true}
                type="text"
                value={value}
                onChange={evt => handleChange(evt.target.value)}
                InputProps={{
                    style: {
                        background: '#f5f5f5',
                        height: '2.2rem',
                        padding: "0.2rem 0.5rem",
                        borderRadius: "0.3rem",
                    },
                    disableUnderline: true
                }}
                placeholder='请输入您的年龄'
                fullWidth={true}
                margin="dense"
                variant="standard"
            />
        </Paper>
    )
}
export default BeautifulAge