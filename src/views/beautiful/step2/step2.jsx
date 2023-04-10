import BeautifulAge from "@/views/beautiful/step2/age/age";
import BeautifulEducation from "@/views/beautiful/step2/education/education";
import FirstLang from "@/views/beautiful/step2/firstLang/firstLang";
import SecondLang from "@/views/beautiful/step2/secondLang/secondLang";
import BeautifulExperience from "@/views/beautiful/step2/experience/experience";
import BeautifulCertification from "@/views/beautiful/step2/certification/certification";
import BottomBtns from "@/views/beautiful/bottomBtns";
import {useForm} from "react-hook-form";
import SecondLangChoice from "@/views/beautiful/step2/secondLang/secondLangChoice";
import {useSelector} from "react-redux";
import useHandleNext from "@/views/beautiful/handleNext";
import handleErrorSubmit from "@/views/beautiful/handleErrorSubmit";
import ScorePad from "@/views/beautiful/scorePad";

const Step2 = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm()
    const secLangFlag = useSelector(state => state.beautifulStep2.secondLangChoice)
    const handleNext = useHandleNext()

    const onSubmit = () => {
        handleNext()
    }
    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit, handleErrorSubmit)}>
                <h3>核心/人力资本因素</h3>
                <h3>Core/human capital factors</h3>
                <p>为了能够获得更准确的分数请认真完整的填写以下信息</p>
                <br/>
                <BeautifulAge
                    register={register}
                    errors={errors}
                />
                <BeautifulEducation
                    register={register}
                    errors={errors}
                    setValue={setValue}
                />
                <FirstLang
                    register={register}
                    errors={errors}
                    setValue={setValue}
                />
                <SecondLangChoice/>
                {
                    secLangFlag === "yes" &&
                    <SecondLang
                        register={register}
                        errors={errors}
                        setValue={setValue}
                    />
                }
                <BeautifulExperience/>
                <BeautifulCertification/>
                <BottomBtns/>
            </form>

        </section>
    )
}
export default Step2