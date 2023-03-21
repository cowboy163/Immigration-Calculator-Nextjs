import styles from '../calcSubTable.module.css'

const CalcSubTableRow = ({children}) => {
    return(
        <tr className={styles.calcSubTableRow}>
            {
                children
            }
        </tr>
    )
}
export default CalcSubTableRow