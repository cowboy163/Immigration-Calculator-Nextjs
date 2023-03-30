import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {initiateBtn} from "@/features/beautifulSlice/stepSlice";
import {Field} from "redux-form";
import renderTextField from "@/views/beautiful/step2/age/renderTextField";

const Step2 = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initiateBtn())
    }, [dispatch])

    return(
        <section>
            <h3>核心/人力资本因素</h3>
            <h3>Core/human capital factors</h3>
            <p>为了能够获得更准确的分数请认真完整的填写以下信息</p>
            <form>
                <Field name="age"
                       component={renderTextField}
                       label="Age"
                       fullWidth
                />
            </form>
        </section>
    )
}
export default Step2