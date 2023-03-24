import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import getSumArray from "@/utility/getSumArray";
import styles from "@/styles/Home.module.css"
import CalcTable from "@/components/calcTable/calcTable";
import {FSWData} from "@/data/fswCalc/FSWData";

const FSWCalcView = () => {
    const score = useSelector(state => state.fswCalc.score)
    const [totalScore, setTotalScore] = useState("")
    useEffect(() => {
        if (score) {
            setTotalScore(String(getSumArray(score)))
        }
    }, [score])
    return (
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
    )
}
export default FSWCalcView