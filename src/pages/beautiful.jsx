import Layout from "@/components/layout/layout";
import Head from "next/head";
import CalcStepper from "@/components/stepper/stepper";
import {useEffect, useState} from "react";
import beautifulData from "@/data/beautiful/beautifulData";
import {Button} from "@mui/material";
import styles from '@/styles/beautiful.module.css'
import useBeautifulValidation from "@/views/beautiful/beautifulValidation";
import {useSelector} from "react-redux";
import calculateScore from "@/utility/beautiful/calculateScore";
import {SINGLE} from "@/consts/consts";

const Beautiful = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [buttonText, setButtonText] = useState("下一步")
    const [length, setLength] = useState(beautifulData[1].length)
    const validateStep = useBeautifulValidation(activeStep)
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const step3 = useSelector(state => state.beautifulStep3)
    const step4 = useSelector(state => state.beautifulStep4)
    const {pass, error} = validateStep()

    const handleClick = () => {
        if (activeStep < length - 1 && pass) {
            setActiveStep(activeStep + 1)
        } else if (!pass) {
            alert(error)
        } else if (pass && activeStep === length - 1) {
            alert("calculate the score")
            calculateScore(step1, step2, step3, step4)
        }
    }
    useEffect(() => {
        if (activeStep === length - 1) {
            setButtonText("提交打分")
        }
    }, [activeStep])

    useEffect(() => {
        if(step1.single === String(SINGLE)) {
            setLength(beautifulData[0].length)
        } else {
            setLength(beautifulData[1].length)
        }
    }, [step1.single])

    return (
        <Layout>
            <Head>
                <title>Immigration Score Calculator</title>
                <meta name="description" content="Calculate FSW score"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className="container">
                <div className={styles.calcStepper}>
                    <CalcStepper numOfSteps={length} activeStep={activeStep}/>
                </div>
                <div className={styles.beautifulMain}>
                    <div className={styles.content}>
                        {
                            step1.single === SINGLE ?
                                beautifulData[0][activeStep]()
                                :
                                beautifulData[1][activeStep]()
                        }
                    </div>
                </div>
                <div className={styles.bottomBtnOut}>
                    <div className={styles.bottomBtnIn}>
                        <Button variant="contained"
                                onClick={() => handleClick()}
                                fullWidth={true}
                            // disabled={!beautifulValidation(activeStep).pass}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
                <Button variant="contained"
                        onClick={() => {
                            calculateScore(step1, step2, step3, step4)
                        }}
                >
                    TEST
                </Button>
            </div>
        </Layout>
    )
}
export default Beautiful