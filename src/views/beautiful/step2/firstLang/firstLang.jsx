import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changeFirstLangTest, changeFirstLangTestScore, setStoredFirstLang} from "@/features/beautifulSlice/step2Slice";
import BeautifulTextField from "@/components/beautiful/textField";
import BeautifulError from "@/components/beautiful/error";
import {useEffect, useState} from "react";
import {firstLangScoreCalc} from "@/utility/beautiful/calculateScore";
import ScorePad from "@/views/beautiful/scorePad";

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

const FirstLang = ({register, errors, setValue}) => {
    const dispatch = useDispatch()
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const [score, setScore] = useState(["", "", "", ""])
    const firstLang = step2.firstLang

    // test option
    const selectedValue = firstLang.test
    const handleClick = value => {
        dispatch(changeFirstLangTest(value))
        errors.firstLangTest = undefined
    }
    useEffect(() => {
        setValue('firstLangTest', firstLang.test)
    }, [firstLang.test])

    // test score
    const testScore = firstLang.testScore
    const handleChange = (value, index) => {
        if (firstLang.test) {
            dispatch(changeFirstLangTestScore([value, index]))
        }
    }
    // store test scores
    useEffect(() => {
        dispatch(setStoredFirstLang())
    }, [firstLang])

    // each test score
    useEffect(() => {
        firstLangScoreCalc(step1, step2, true)
            .then(score => {
                let newArray = [score[1], score[2], score[0], score[3]]
                setScore(newArray)
            })
    }, [step1, step2])


    return (
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                第一语言
            </InputLabel>
            <p style={{marginBottom: "0.7rem"}}>选择您所参加过的语言考试或培训</p>

            <Grid container
                  spacing={2}
                  marginBottom="0.5rem"
                  className={errors.firstLangTest ? 'Mui-error' : ''}
            >
                <input type='hidden'
                       {...register('firstLangTest', {required: "请选择一项考试"})}
                />
                {
                    options.map((option, index) => (
                        <Grid item
                              xs={12}
                              sm={3}
                              md={3}
                              key={index}
                        >
                            <StyledButton variant={selectedValue === option.value ? 'contained' : 'outlined'}
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
                selectedValue && tests.map((option, index) => (
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
                                                name={`firstLangTestScore${index}`}
                                                handleChange={evt => handleChange(evt.target.value, index)}
                                                placeholder='输入分数'
                                                error={!!errors[`firstLangTestScore${index}`]}
                                                helperText={errors[`firstLangTestScore${index}`]?.message}
                                                inputProps={{...register(`firstLangTestScore${index}`,{required: "分数不能为空"})}}
                                                inputAdornment={<ScorePad text={score[index]} takePlace={true}/>}
                            />
                        </Grid>
                    </Grid>
                ))
            }
            {errors.firstLangTest && <BeautifulError text={errors.firstLangTest.message}/>}
        </Paper>
    )
}
export default FirstLang