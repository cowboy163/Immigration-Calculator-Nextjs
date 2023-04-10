import {Button, Grid, InputLabel, Paper, styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation} from "@/features/beautifulSlice/step2Slice";
import {useEffect, useState} from "react";
import BeautifulError from "@/components/beautiful/error";
import ScorePad from "@/views/beautiful/scorePad";
import {educationScoreCalc} from "@/utility/beautiful/calculateScore";

const options = ["高中以下", "高中", "1年大专", "2年大专", "3年以上大专或本科", "双专业（3 + 1年以上）", "硕士学位或专业学位", "博士学位"]
export const StyledButton = styled(Button)(({theme, selected}) => ({
    borderRadius: "0.3rem",
    border: `2px solid ${selected? theme.palette.primary.main : `rgba(0, 0, 0, 0.1)`}`,
    color: selected? '#fff' : 'rgba(0, 0, 0, 0.3)',
    backgroundColor: selected? theme.palette.primary.dark : 'transparent',
    '&:hover': {
        backgroundColor: selected? theme.palette.primary.dark : 'rgba(0, 0, 0, 0.12)',
        border: `2px solid ${selected? theme.palette.primary.main : `rgba(0, 0, 0, 0.2)`}`,
    },
    '&.MuiButton-contained': {
        backgroundColor: '#2196f3',
        color: '#fff',
    },
}))

const BeautifulEducation = ({register, setValue, errors}) => {
    const dispatch = useDispatch()
    const selectedValue = useSelector(state => state.beautifulStep2.education)
    const handleChange = value => {
        dispatch(changeEducation(String(value)))
        errors.education = undefined
    }
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const [score, setScore] = useState("")

    // education score
    useEffect(() => {
        educationScoreCalc(step1, step2)
            .then(score => {
                setScore(String(score))
            })
    }, [step1, step2])

    useEffect(() => {
        setValue('education', selectedValue)
    }, [selectedValue])

    return (
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <InputLabel style={{color: "#1975d1", marginBottom: "0.5rem"}}
                >
                    学历
                </InputLabel>
                <ScorePad text={score} paddingRight="1rem"/>
            </div>
            <br/>
                <Grid container
                      spacing={2}
                      className={errors.education? 'Mui-error' : ''}
                >
                    <input type="hidden"
                           {...register('education', {required: "请选择一个选项"})}
                    />
                        {
                            options.map((option, index) => (
                                    <Grid item
                                          xs={12}
                                          sm={6}
                                          md={6}
                                          key={index}
                                    >
                                        <StyledButton variant={selectedValue === String(index)? 'contained' : 'outlined'}
                                                      onClick={() => handleChange(index)}
                                                      selected={selectedValue === String(index)}
                                                      fullWidth
                                        >
                                            {option}
                                        </StyledButton>
                                    </Grid>
                                )
                            )
                        }
                </Grid>
            <br/>
            {errors.education && <BeautifulError text={errors.education.message}/>}
        </Paper>

    )
}
export default BeautifulEducation