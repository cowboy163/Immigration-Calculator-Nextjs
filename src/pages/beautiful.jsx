import Layout from "@/components/layout/layout";
import Head from "next/head";
import CalcStepper from "@/components/stepper/stepper";
import {useEffect, useState} from "react";
import beautifulData from "@/data/beautiful/beautifulData";
import {Button} from "@mui/material";
import styles from '@/styles/beautiful.module.css'
import {useSelector} from "react-redux";

const Beautiful = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [buttonText, setButtonText] = useState("下一步")
    const disableBtn = useSelector(state => state.beautifulStep.disableBtn)

    const handleClick = () => {
        if(activeStep < beautifulData.length - 1) {
            setActiveStep(activeStep + 1)
        }
    }
    useEffect(() => {
        if(activeStep === beautifulData.length - 1) {
            setButtonText("完成")
        }
    }, [activeStep])

    return(
        <Layout>
            <Head>
                <title>Immigration Score Calculator</title>
                <meta name="description" content="Calculate FSW score" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <div className={styles.calcStepper}>
                    <CalcStepper numOfSteps={beautifulData.length} activeStep={activeStep}/>
                </div>
                <div className={styles.beautifulMain}>
                    {
                        beautifulData[activeStep]()
                    }
                </div>
                <div className={styles.bottomBtnOut}>
                    <div className={styles.bottomBtnIn}>
                        <Button variant="contained"
                                onClick={() => handleClick()}
                                fullWidth={true}
                                disabled={disableBtn}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Beautiful