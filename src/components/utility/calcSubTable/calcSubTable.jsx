import styles from './calcSubTable.module.css'
const CalcSubTable = ({children}) => {
    return(
        <table className={styles.calcSubTable}>
            <tbody>
            {
                children
            }
            </tbody>
        </table>
    )
}
export default CalcSubTable