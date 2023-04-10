import {Grid, InputLabel, Paper} from "@mui/material";
import BeautifulTextField from "@/components/beautiful/textField";
import {useDispatch, useSelector} from "react-redux";
import {changeExInCA, changeExOutCA} from "@/features/beautifulSlice/step2Slice";
import {useEffect, useState} from "react";
import ScorePad from "@/views/beautiful/scorePad";
import {exInCaCalc} from "@/utility/beautiful/calculateScore";

const BeautifulExperience = () => {
    const dispatch = useDispatch()
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const [score, setScore] = useState("")
    const exInCA = step2.exInCA
    const exOutCA = step2.exOutCA
    const handleExInCaChange = value => {
        dispatch(changeExInCA(value))
    }
    const handleExOutCaChange = value => {
        dispatch(changeExOutCA(value))
    }

    // experience in CA score
    useEffect(() => {
        exInCaCalc(step1, step2)
            .then(score => {
                setScore(String(score))
            })
    }, [step1, step2])
    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <InputLabel style={{color: "#1975d1", marginBottom: "0.5rem"}}
                >
                    工作经验
                </InputLabel>
                <ScorePad text={score} paddingRight="1rem"/>
            </div>
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
            <Grid container
                  spacing={0}
            >
                <Grid item
                      xs={4}
                >
                    <InputLabel>
                        非加拿大工作经验
                        <br/>
                        （可以不连续）
                    </InputLabel>
                </Grid>
                <Grid item
                      xs={8}
                >
                    <BeautifulTextField value={exOutCA}
                                        placeholder="0"
                                        handleChange={evt => handleExOutCaChange(evt.target.value)}
                                        inputAdornment="年"
                    />
                </Grid>
            </Grid>
        </Paper>
)
}
export default BeautifulExperience