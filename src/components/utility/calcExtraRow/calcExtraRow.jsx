import styles from './calcExtraRow.module.css'

const CalcExtraRow = ({children, bgColor}) => {
    return(
        <table className={styles.calcExtraRow}
             style={{
                 backgroundColor: bgColor? `${bgColor}`: "white"
             }}
        >
            <tbody>
            <tr>
                <td className={styles.extraLine}>
                    {
                        children
                    }
                </td>
            </tr>
            </tbody>
        </table>
    )
}
export default CalcExtraRow