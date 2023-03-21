import styles from '../calcSubTable.module.css'

const CalcSubTableCol = ({children, rowSpan}) => {
    return (
        <td className={styles.calcSubTableCol}
            colSpan={rowSpan ? rowSpan : 1}
        >
            {children}
        </td>
    )
}
export default CalcSubTableCol