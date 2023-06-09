import Layout from "@/components/layout/layout";
import Head from "next/head";
import CalcStepper from "@/components/stepper/stepper";
import {useEffect, useState} from "react";
import beautifulData from "@/data/beautiful/beautifulData";
import styles from '@/styles/beautiful.module.css'
import useBeautifulValidation from "@/views/beautiful/beautifulValidation";
import {useDispatch, useSelector} from "react-redux";
import calculateScore from "@/utility/beautiful/calculateScore";
import {SINGLE} from "@/consts/consts";
import {setStepLength} from "@/features/beautifulSlice/stepperSlice";

const Beautiful = () => {
    const dispatch = useDispatch()
    const activeStep = useSelector(state => state.beautifulStepper.activeStep)
    const length = useSelector(state => state.beautifulStepper.stepLength)
    const step1 = useSelector(state => state.beautifulStep1)

    useEffect(() => {
        if (step1.single === String(SINGLE)) {
            dispatch(setStepLength(beautifulData[0].length))
        } else {
            dispatch(setStepLength(beautifulData[1].length))
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
            </div>
        </Layout>
    )
}
export default Beautiful