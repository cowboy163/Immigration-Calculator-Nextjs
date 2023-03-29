import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import getSumArray from "@/utility/getSumArray";
import styles from "@/styles/Home.module.css"
import CalcTable from "@/components/calcTable/calcTable";
import {FSWData} from "@/data/fswCalc/FSWData";
import Layout from "@/components/layout/layout";
import Head from "next/head";

const FSWCalcView = () => {
    const score = useSelector(state => state.fswCalc.score)
    const [totalScore, setTotalScore] = useState("")
    useEffect(() => {
        if (score) {
            setTotalScore(String(getSumArray(score)))
        }
    }, [score])
    return (
        <Layout>
            <Head>
                <title>Immigration Score Calculator</title>
                <meta name="description" content="Calculate FSW score" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.calcPage}>
                <div className="container">
                    <div className={styles.calcPage}>
                        <CalcTable data={FSWData}
                                   subScore={score}
                        />
                    </div>
                    <h1 className={styles.totalScore}>
                        您的FSW分数为：{totalScore}
                    </h1>
                </div>
            </div>
        </Layout>

    )
}
export default FSWCalcView