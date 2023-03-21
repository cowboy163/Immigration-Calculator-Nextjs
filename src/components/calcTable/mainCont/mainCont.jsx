/*
 * interface item {title: string, content: () => ReactNode,}
 * interface data {header: string, body: item}
 */
import styles from './mainCont.module.css'
import SubScore from "@/components/calcTable/mainCont/subScore";

const MainCont = ({header, body, subScore, extra}) => {
    return (
        <table className={styles.mainCont}>
            <thead>
            <tr className={styles.styledRow}>
                <th colSpan={Object.getOwnPropertyNames(body[0]).length + 1}>{header}</th>
            </tr>
            </thead>

            <tbody>
            {
                extra && <tr className={styles.mainCont}>
                    <td className={styles.styledCol}
                        colSpan={Object.getOwnPropertyNames(body[0]).length + 1}
                    >
                        {
                            extra()
                        }
                    </td>
                </tr>
            }
            {
                body.map((item, index) =>
                    <tr key={index} className={styles.styledRow}>
                        <td className={styles.styledCol}>
                            {item.title}
                        </td>
                        <td className={styles.styledCol}>
                            {item.content(index)}
                        </td>
                        {/*{*/}
                        {/*    subScore && <td className="styledCol">*/}
                        {/*        {subScore? subScore[index]:""}*/}
                        {/*    </td>*/}
                        {/*}*/}
                        <td className={styles.styledCol}>
                            {subScore? <SubScore data={subScore[index]}/> : ""}
                        </td>


                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

export default MainCont