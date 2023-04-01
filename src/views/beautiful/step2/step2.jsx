import BeautifulAge from "@/views/beautiful/step2/age/age";
import BeautifulEducation from "@/views/beautiful/step2/education/education";
import FirstLang from "@/views/beautiful/step2/firstLang/firstLang";
import SecondLang from "@/views/beautiful/step2/secondLang/secondLang";
import BeautifulExperience from "@/views/beautiful/step2/experience/experience";
import BeautifulCertification from "@/views/beautiful/step2/certification/certification";

const Step2 = () => {

    return (
        <section>
            <h3>核心/人力资本因素</h3>
            <h3>Core/human capital factors</h3>
            <p>为了能够获得更准确的分数请认真完整的填写以下信息</p>
            <br/>
            <BeautifulAge/>
            <BeautifulEducation/>
            <FirstLang/>
            <SecondLang/>
            <BeautifulExperience/>
            <BeautifulCertification/>
        </section>
    )
}
export default Step2