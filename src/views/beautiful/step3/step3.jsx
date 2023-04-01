import BeautifulEducation from "@/views/beautiful/step3/education/education";
import BeautifulLanguage from "@/views/beautiful/step3/language/language";
import BeautifulExperience from "@/views/beautiful/step3/experience/experience";


const Step3 = () => {

    return (
        <section>
            <h3>配偶因素</h3>
            <h3>Spouse factors</h3>
            <p>为了能够获得更准确的分数请认真完整的填写以下信息</p>
            <br/>
            <BeautifulEducation/>
            <BeautifulLanguage/>
            <BeautifulExperience/>
        </section>
    )
}
export default Step3