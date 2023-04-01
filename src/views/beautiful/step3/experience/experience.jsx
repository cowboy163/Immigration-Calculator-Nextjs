import {Grid, InputLabel, Paper} from "@mui/material";
import BeautifulTextField from "@/components/beautiful/textField";
import {useDispatch, useSelector} from "react-redux";
import {changeExInCA} from "@/features/beautifulSlice/step3Slice";

const BeautifulExperience = () => {
    const dispatch = useDispatch()
    const exInCA = useSelector(state => state.beautifulStep3.exInCA)
    const handleExInCaChange = value => {
        dispatch(changeExInCA(value))
    }
    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                配偶工作经验
            </InputLabel>
            <p style={{marginBottom: "1rem"}}>工作经验必须是NOC的O、A或者B类</p>
            <Grid container
                  spacing={0}
                  marginBottom="0.5rem"
            >
                <Grid item
                      xs={4}
                >
                    <InputLabel>
                        加拿大工作经验
                        <br/>
                        （可以不连续）
                    </InputLabel>
                </Grid>
                <Grid item
                      xs={8}
                >
                    <BeautifulTextField value={exInCA}
                                        placeholder="0"
                                        handleChange={evt => handleExInCaChange(evt.target.value)}
                                        inputAdornment="年"
                    />
                </Grid>
            </Grid>
        </Paper>
)
}
export default BeautifulExperience