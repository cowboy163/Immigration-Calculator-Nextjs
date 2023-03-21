import {useDispatch, useSelector} from "react-redux";
import styles from "@/styles/Home.module.css"
import CalcTable from "@/components/calcTable/calcTable";
import {eePartAData} from "@/data/eeCalc/eePartAData";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import SamplePage from "@/components/samplePage/samplePage";
import {useEffect, useState} from "react";
import getSumArray from "@/utility/getSumArray";

const EECalc = () => {
    const dispatch = useDispatch()

    // CalcOther data
    // const spouseChoice = useSelector(state => state?.eeCalc?.spouseChoice)
    // const spouseChoiceChange = evt => {
    //     const val = evt.target.value
    //     dispatch(changeSpouseChoice(val))
    // }
    // const spouseChoiceData = {
    //     content: spouseChoiceContent,
    //     selected: spouseChoice,
    //     onChange: spouseChoiceChange,
    // }

    // subScore
    const subScoreA = useSelector(state => state.eeCalcPartA.subScoreA)
    // const subScoreB = useSelector(state => state.eeCalcPartB.subScoreB)
    // const subScoreC = useSelector(state => state.eeCalcPartC.subScoreC)
    // const subScoreD = useSelector(state => state.eeCalcPartD.subScoreD)

    // part A section score
    const [secScoreA, setSecScoreA] = useState("")
    useEffect(() => {
        setSecScoreA(getSumArray(subScoreA))
    }, [subScoreA])

    // part B section score
    // const [secScoreB, setSecScoreB] = useState("")
    // useEffect(() => {
    //     setSecScoreB(getSumArray(subScoreB))
    // }, [subScoreB])

    // part C section score
    // const [secScoreC, setSecScoreC] = useState("")
    // useEffect(() => {
    //     setSecScoreC(getSumArray(subScoreC))
    // }, [subScoreC])

    // part D section score
    // const [secScoreD, setSecScoreD] = useState("")
    // useEffect(() => {
    //     setSecScoreD(getSumArray(subScoreD))
    // }, [subScoreD])

    // total score
    // const [totalScore, setTotalScore] = useState("")
    // useEffect(() => {
    //     if (secScoreA || secScoreB || secScoreD) {
    //         let newArray = [secScoreA, secScoreB, secScoreC, secScoreD]
    //         setTotalScore(String(getSumArray(newArray)))
    //     }
    // }, [secScoreA, secScoreB, secScoreC, secScoreD])

    // const secScoreA = "100"
    // const subScoreA = "200"
    const spouseChoiceData = "no"

    return (
        <Layout>
            <Head>
                <title>Immigration Score Calculator</title>
                <meta name="description" content="Calculate EE score" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <div className='container'>
                    {/*Part A*/}
                    <div className={styles.calcPage}>
                        <CalcTable data={eePartAData}
                                   secScore={secScoreA}
                                   subScore={subScoreA}
                                   other={spouseChoiceData}
                        />
                        {/*Part B*/}
                        {
                            // spouseChoice === "yes" && <calcTable data={eePartBData}
                            //                                      subScore={subScoreB}
                            //                                      secScore={secScoreB}
                            // />
                        }
                    </div>
                    {/*Part C*/}
                    {/*<div className="eeCalcPage">*/}
                    {/*    <calcTable data={eePartCData}*/}
                    {/*               secScore={secScoreC}*/}
                    {/*               subScore={subScoreC}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*Part D*/}
                    {/*<div className="eeCalcPage">*/}
                    {/*    <calcTable data={eePartDData}*/}
                    {/*               secScore={secScoreD}*/}
                    {/*               subScore={subScoreD}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<h1 className="totalScore">*/}
                    {/*    您的EE分数为：{totalScore}*/}
                    {/*</h1>*/}
                </div>
            </div>
        </Layout>

    )
}
export default EECalc