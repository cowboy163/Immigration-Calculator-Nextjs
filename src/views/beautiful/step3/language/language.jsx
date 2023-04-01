import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import BeautifulTextField from "@/components/beautiful/textField";
import {changeFirstLangTest, changeFirstLangTestScore} from "@/features/beautifulSlice/step3Slice";
const options = [
    {
        text: "无",
        value: "null",
    },
    {
        text: '雅思',
        value: 'ielts',
    },
    {
        text: '思培',
        value: 'celpip',
    },
    {
        text: 'TEF',
        value: 'tef',
    },
    {
        text: 'TCF',
        value: 'tcf',
    },
]
const tests = ["阅读", "写作", "听力", "口语"]

const BeautifulLanguage = () => {
    const dispatch = useDispatch()
    const firstLang = useSelector(state => state.beautifulStep3.firstLang)

    // test option
    const selectedValue = firstLang.test
    const handleClick = value => {
        dispatch(changeFirstLangTest(value))
    }

    // test score
    const testScore = firstLang.testScore
    const handleChange = (value, index) => {
        if(firstLang.test && firstLang.test !== "null") {
            dispatch(changeFirstLangTestScore([value, index]))
        }
    }

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                配偶第一语言
            </InputLabel>
            <p style={{marginBottom: "0.7rem"}}>选择您配偶所参加过的语言考试或培训</p>

            <Grid container
                  spacing={2}
                  marginBottom="0.5rem"
            >
                {
                    options.map((option, index) => (
                        <Grid item
                              xs={12}
                              sm={2.4}
                              md={2.4}
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
                tests.map((option, index) => (
                    <Grid key={index}
                          container
                          spacing={0}
                          alignItems="center"
                          justifyContent="center"
                    >
                        <Grid item xs={1}
                        >
                            <InputLabel>
                                {option}
                            </InputLabel>
                        </Grid>
                        <Grid item
                              xs={11}
                        >
                            <BeautifulTextField value={testScore[index]}
                                                handleChange={evt => handleChange(evt.target.value, index)}
                                                placeholder={firstLang.test === "null"? '0' : '输入分数'}
                            />
                        </Grid>
                    </Grid>
                ))
            }

        </Paper>
    )
}
export default BeautifulLanguage