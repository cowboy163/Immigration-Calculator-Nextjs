import BeautifulPnp from "@/views/beautiful/step4/pnp/pnp";
import BeautifulSponsorship from "@/views/beautiful/step4/sponsorship/sponsorship";
import BeautifulEducation from "@/views/beautiful/step4/education/education";
import BeautifulRelative from "@/views/beautiful/step4/relative/relative";
import BottomBtns from "@/views/beautiful/bottomBtns";
import {useForm} from "react-hook-form";
import CustomDialog from "@/components/dialog/dialog";
import {useState} from "react";
import calculateScore from "@/utility/beautiful/calculateScore";
import {useSelector} from "react-redux";

const Step4 = () => {
    const [control, setControl] = useState(false)
    const [content, setContent] = useState("")
    const step1 = useSelector(state => state.beautifulStep1)
    const step2 = useSelector(state => state.beautifulStep2)
    const step3 = useSelector(state => state.beautifulStep3)
    const step4 = useSelector(state => state.beautifulStep4)
    const {
        handleSubmit,
    } = useForm()
    const onSubmit = () => {
        console.log('submit')
        calculateScore(step1, step2, step3, step4)
            .then(totalScore => {
                setContent(String("您的总分是：" + totalScore))
                setControl(true)
            })
    }

    return (
        <section>
            <CustomDialog
                handleClose={() => setControl(false)}
                control={control}
                content={content}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>附加分</h3>
                <h3>Additional points</h3>
                <p>为了能够获得更准确的分数请认真完整的填写以下信息</p>
                <br/>
                <BeautifulPnp/>
                <BeautifulSponsorship/>
                <BeautifulEducation/>
                <BeautifulRelative/>
                <BottomBtns/>
            </form>
        </section>
    )
}
export default Step4