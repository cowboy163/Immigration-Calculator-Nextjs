import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changeRelative} from "@/features/beautifulSlice/step4Slice";
import {useEffect, useState} from "react";
import {relativeScoreCalc} from "@/utility/beautiful/calculateScore";
import ScorePad from "@/views/beautiful/scorePad";

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

const BeautifulRelative = () => {
    const dispatch = useDispatch()
    const step4 = useSelector(state => state.beautifulStep4)
    const [score, setScore] = useState("")
    const selectedValue = step4.relative
    const handleClick = value => {
        dispatch(changeRelative(value))
    }
    // relative score
    useEffect(() => {
        relativeScoreCalc(step4)
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
                    兄弟姐妹在加拿大
                </InputLabel>
                <ScorePad text={score} paddingRight="1rem"/>
            </div>
            <p style={{marginBottom: "1rem"}}>申请人或配偶有18岁以上的兄弟姐妹是加拿大公民或永久居民且居住在加拿大</p>

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
export default BeautifulRelative