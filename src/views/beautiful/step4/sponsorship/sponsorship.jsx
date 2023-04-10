import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changeSponsorship} from "@/features/beautifulSlice/step4Slice";
import {useEffect, useState} from "react";
import ScorePad from "@/views/beautiful/scorePad";
import {sponsorshipScoreCalc} from "@/utility/beautiful/calculateScore";

const options = [
    {
        text: "我有00类的雇主担保",
        value: "0",
    },
    {
        text: "我有其它类的雇主担保",
        value: "1",
    },
    {
        text: "没有雇主担保",
        value: "2",
    },
]

const BeautifulSponsorship = () => {
    const dispatch = useDispatch()
    const step4 = useSelector(state => state.beautifulStep4)
    const [score, setScore] = useState("")
    const selectedValue = step4.sponsorship
    const handleClick = value => {
        dispatch(changeSponsorship(value))
    }
    // sponsorship score
    useEffect(() => {
        sponsorshipScoreCalc(step4)
            .then(score => {
                setScore(String(score))
            })
    }, [step4])

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}
                >
                    雇主担保
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
                              xs={12}
                              sm={12}
                              md={12}
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
export default BeautifulSponsorship