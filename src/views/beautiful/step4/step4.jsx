import BeautifulPnp from "@/views/beautiful/step4/pnp/pnp";
import BeautifulSponsorship from "@/views/beautiful/step4/sponsorship/sponsorship";
import BeautifulEducation from "@/views/beautiful/step4/education/education";
import BeautifulRelative from "@/views/beautiful/step4/relative/relative";
import BottomBtns from "@/views/beautiful/bottomBtns";
import {useForm} from "react-hook-form";

const Step4 = () => {
    const {
        handleSubmit,
    } = useForm()
    const onSubmit = () => {
        console.log('submit')
    }

    return (
        <section>
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