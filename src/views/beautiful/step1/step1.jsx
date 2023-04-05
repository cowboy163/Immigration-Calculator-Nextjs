import styles from "./step1.module.css"
import {NOT_SINGLE, SINGLE} from "@/consts/consts";
import {useDispatch, useSelector} from "react-redux";
import {changeSingle} from "@/features/beautifulSlice/step1Slice";
import {useForm} from "react-hook-form";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import BeautifulError from "@/components/beautiful/error";
import useHandleNext from "@/views/beautiful/handleNext";
import BottomBtns from "@/views/beautiful/bottomBtns";
import {useEffect} from "react";
import {StyledButton} from "@/views/beautiful/step2/education/education";

const Step1 = () => {
    const dispatch = useDispatch()
    const single = useSelector(state => state.beautifulStep1.single)
    const handleNext = useHandleNext()
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm()

    const handleClick = value => {
        dispatch(changeSingle(value))
        errors.choice = undefined
    }

    const onSubmit = () => {
        handleNext()
    }

    useEffect(() => {
        setValue("choice", single)
    }, [single])

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>请问您目前的状态是？</h3>
                <p>单身和已婚人士打分的规则会有所不同</p>
                <input type='hidden'
                       {...register('choice', {required: "请选择一个选项"})}
                />
                <div className={styles.buttonAreaOut}
                >
                    <div
                        className={styles.buttonAreaIn}
                        onClick={evt => handleClick(evt.target.value)}
                    >
                        <div className={styles.btn}>
                            <StyledButton
                                variant={single === NOT_SINGLE? 'contained' : 'outlined'}
                                value={NOT_SINGLE}
                                selected={single === NOT_SINGLE}
                                fullWidth
                            >
                                已婚或有伴侣
                            </StyledButton>
                        </div>
                        <div className={styles.btn}>
                            <StyledButton
                                variant={single === SINGLE? 'contained' : 'outlined'}
                                value={SINGLE}
                                selected={single === SINGLE}
                                fullWidth
                            >
                                单身
                            </StyledButton>
                        </div>
                        {errors.choice && <BeautifulError text={errors.choice.message}/>}
                    </div>
                </div>

                <BottomBtns/>
            </form>
        </section>
    )
}
export default Step1