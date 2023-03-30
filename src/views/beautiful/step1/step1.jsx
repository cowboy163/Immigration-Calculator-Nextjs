import {Button} from "@mui/material";
import styles from "./step1.module.css"
import {NOT_SINGLE, SINGLE} from "@/consts/consts";
import {useDispatch, useSelector} from "react-redux";
import {changeSingle} from "@/features/beautifulSlice/step1Slice";
import {useEffect} from "react";
import {changeDisableBtn, initiateBtn} from "@/features/beautifulSlice/stepSlice";

const Step1 = () => {
    const dispatch = useDispatch()
    const single = useSelector(state => state.beautifulStep1.single)
    const handleClick = value => {
        dispatch(changeSingle(value))
    }

    useEffect(() => {
        dispatch(initiateBtn())
    }, [dispatch])

    useEffect(() => {
        if(single) {
            dispatch(changeDisableBtn())
        }
    }, [single])

    return(
        <section>
            <h3>请问您目前的状态是？</h3>
            <p>单身和已婚人士打分的规则会有所不同</p>
            <div className={styles.buttonAreaOut}>
                <div onClick={evt => handleClick(evt.target.value)}
                     className={styles.buttonAreaIn}
                >
                    <div className={styles.btn}>
                        <Button variant={single === String(NOT_SINGLE)? 'contained' : 'outlined'}
                                color="primary"
                                value={NOT_SINGLE}
                                sx={{
                                    bgcolor: single === String(NOT_SINGLE)? '#2196f3' : 'transparent'
                                }}
                                fullWidth={true}
                        >
                            已婚或有伴侣
                        </Button>
                    </div>
                    <div className={styles.btn}>
                        <Button variant={single === String(SINGLE)? 'contained' : 'outlined'}
                                color="primary"
                                value={SINGLE}
                                sx={{
                                    bgcolor: single === String(SINGLE)? '#2196f3' : 'transparent'
                                }}
                                fullWidth={true}
                        >
                            单身
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Step1