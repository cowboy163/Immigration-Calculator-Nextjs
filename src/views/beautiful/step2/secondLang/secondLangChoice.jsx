import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {setSecondLangChoice} from "@/features/beautifulSlice/step2Slice";
import BeautifulError from "@/components/beautiful/error";
import {useEffect, useState} from "react";

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

const SecondLangChoice = () => {
    const dispatch = useDispatch()
    const selectedValue = useSelector(state => state.beautifulStep2.secondLangChoice)
    const firstLangTest = useSelector(state => state.beautifulStep2.firstLang.test)
    const [errorFlag, setErrorFlag] = useState(false)
    const handleClick = value => {
        if(firstLangTest) {
            dispatch(setSecondLangChoice(value))
        } else {
            dispatch(setSecondLangChoice("no"))
            setErrorFlag(true)
        }
    }
    useEffect(() => {
        if(firstLangTest) {
            setErrorFlag(false)
        }
    }, [firstLangTest])

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                是否有第二语言
            </InputLabel>

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
            {
                errorFlag && <BeautifulError text="请先选择第一语言"/>
            }
        </Paper>
    )
}
export default SecondLangChoice