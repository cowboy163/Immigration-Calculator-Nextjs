import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changePnp} from "@/features/beautifulSlice/step4Slice";
import ScorePad from "@/views/beautiful/scorePad";
import {useEffect, useState} from "react";
import {pnpScoreCalc} from "@/utility/beautiful/calculateScore";

const options = [
    {
        text: "有",
        value: "yes",
    },
    {
        text: "无",
        value: "no",
    },
]

const BeautifulPnp = () => {
    const dispatch = useDispatch()
    const step4 = useSelector(state => state.beautifulStep4)
    const [score, setScore] = useState("")
    const selectedValue = step4.pnp
    const handleClick = value => {
        dispatch(changePnp(value))
    }

    // PNP score
    useEffect(() => {
        pnpScoreCalc(step4)
            .then(score => {
                setScore(String(score))
            })
    }, [step4])

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <InputLabel style={{color: "#1975d1", marginBottom: "0.5rem"}}
                >
                    省提名
                </InputLabel>
                <ScorePad text={score} paddingRight="1rem"/>
            </div>

            <Grid container
                  spacing={2}
                  marginBottom="1rem"
                  marginTop="1rem"
            >
                {
                    options.map((option, index) => (
                        <Grid item
                              xs={6}
                              sm={6}
                              md={6}
                              key={index}
                        >
                            <StyledButton variant={selectedValue === option.value? 'contained' : 'outlined'}
                                          onClick={() => handleClick(option.value)}
                                          selected={selectedValue === option.value}
                                          fullWidth
                            >
                                {option.text}
                            </StyledButton>
                        </Grid>

                    ))
                }
            </Grid>
        </Paper>
    )
}
export default BeautifulPnp