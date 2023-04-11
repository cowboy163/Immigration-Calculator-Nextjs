import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {
    changeSecondLangTest, changeSecondLangTestScore, setStoredSecondLang
} from "@/features/beautifulSlice/step2Slice";
import BeautifulTextField from "@/components/beautiful/textField";
import {useEffect, useRef, useState} from "react";
import BeautifulError from "@/components/beautiful/error";
import {secondLangScoreCalc} from "@/utility/beautiful/calculateScore";
import ScorePad from "@/views/beautiful/scorePad";
import autoAnimate from "@formkit/auto-animate";
const firstEngOptions = [
    {
        text: 'TEF',
        value: 'tef',
    },
    {
        text: 'TCF',
        value: 'tcf',
    },
]
const firstFrOptions = [
    {
        text: '雅思',
        value: 'ielts',
    },
    {
        text: '思培',
        value: 'celpip',
    },
]
const tests = ["阅读", "写作", "听力", "口语"]

const SecondLang = ({register, errors, setValue}) => {
    const dispatch = useDispatch()
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const [score, setScore] = useState(["", "", "", ""])
    const secondLang = step2.secondLang
    const firstLangTest = step2.firstLang.test

    // test option
    const selectedValue = secondLang.test
    const handleClick = value => {
        dispatch(changeSecondLangTest(value))
        errors.secondLangTest = undefined
    }

    useEffect(() => {
        setValue("secondLangTest", secondLang.test)
    }, [secondLang.test])

    // test score
    const testScore = secondLang.testScore
    const handleChange = (value, index) => {
        if(secondLang.test) {
            dispatch(changeSecondLangTestScore([value, index]))
        }
    }

    // option state
    const [options, setOptions] = useState(firstEngOptions)
    useEffect(() => {
        if(firstLangTest.charAt(0) === "t") {
            setOptions(firstFrOptions)
        } else {
            setOptions(firstEngOptions)
        }
    }, [firstLangTest])

    // store test scores
    useEffect(() => {
        dispatch(setStoredSecondLang())
    }, [secondLang])

    // each test score
    useEffect(() => {
        secondLangScoreCalc(step1, step2, true)
            .then(score => {
                let newArray = [score[1], score[2], score[0], score[3]]
                setScore(newArray)
            })
    }, [step1, step2])

    // dropdown
    const parent = useRef(null)
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
               ref={parent}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "1rem"}}>
                第二语言
            </InputLabel>

            <Grid container
                  spacing={2}
                  marginBottom="0.5rem"
                  className={errors.secondLangTest? 'Mui-error' : ''}
            >
                <input type='hidden'
                       {...register('secondLangTest', {required: '请选择一项考试'})}
                />
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
                secondLang.test && tests.map((option, index) => (
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
                                                placeholder={secondLang.test === "null"? '0' : '输入分数'}
                                                name={`secondLangTestScore${index}`}
                                                error={!!errors[`secondLangTestScore${index}`]}
                                                helperText={errors[`secondLangTestScore${index}`]?.message}
                                                inputProps={{...register(`secondLangTestScore${index}`, {required:"分数不能为空"})}}
                                                inputAdornment={<ScorePad text={score[index]} takePlace={true}/>}
                            />
                        </Grid>
                    </Grid>
                ))
            }
            {errors.secondLangTest && <BeautifulError text={errors.secondLangTest.message}/>}
        </Paper>
    )
}
export default SecondLang