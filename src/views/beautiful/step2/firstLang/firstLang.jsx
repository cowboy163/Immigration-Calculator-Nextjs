import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changeFirstLangTest, changeFirstLangTestScore} from "@/features/beautifulSlice/step2Slice";
import {useEffect} from "react";
import BeautifulTextField from "@/components/beautiful/textField";
const options = [
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

const FirstLang = () => {
    const dispatch = useDispatch()
    const firstLang = useSelector(state => state.beautifulStep2.firstLang)

    // test option
    const selectedValue = firstLang.test
    const handleClick = value => {
        dispatch(changeFirstLangTest(value))
    }

    // test score
    const testScore = firstLang.testScore
    const handleChange = (value, index) => {
        dispatch(changeFirstLangTestScore([value, index]))
    }

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                第一语言
            </InputLabel>
            <p style={{marginBottom: "0.7rem"}}>选择您所参加过的语言考试或培训</p>

            <Grid container
                  spacing={2}
            >
                {
                    options.map((option, index) => (
                        <Grid item
                              xs={12}
                              sm={3}
                              md={3}
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
                    <div key={index}>
                        <InputLabel>
                            {option}
                        </InputLabel>
                        <BeautifulTextField value={testScore[index]}
                                            handleChange={evt => handleChange(evt.target.value, index)}
                                            placeholder='输入分数'
                        />
                    </div>
                ))
            }

        </Paper>
    )
}
export default FirstLang