import BeautifulEducation from "@/views/beautiful/step3/education/education";
import BeautifulLanguage from "@/views/beautiful/step3/language/language";
import BeautifulExperience from "@/views/beautiful/step3/experience/experience";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import useHandleNext from "@/views/beautiful/handleNext";
import handleErrorSubmit from "@/views/beautiful/handleErrorSubmit";
import BottomBtns from "@/views/beautiful/bottomBtns";
import FirstLangChoice from "@/views/beautiful/step3/language/firstLangChoice";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {useEffect} from "react";


const Step3 = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm()
    const langFlag = useSelector(state => state.beautifulStep3.firstLangChoice)
    const handleNext = useHandleNext()

    const onSubmit = () => {
        handleNext()
    }

    // useAutoAnimate
    const [parent, enableAnimations] = useAutoAnimate()
    useEffect(() => {
        if(langFlag) {
            enableAnimations(true)
        }
    }, [langFlag])

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit, handleErrorSubmit)}>
                <h3>配偶因素</h3>
                <h3>Spouse factors</h3>
                <p>为了能够获得更准确的分数请认真完整的填写以下信息</p>
                <br/>
                <BeautifulEducation
                    register={register}
                    errors={errors}
                    setValue={setValue}
                />
                <div ref={parent}>
                    <FirstLangChoice/>
                    {
                        langFlag === "yes" &&
                        <BeautifulLanguage
                            register={register}
                            errors={errors}
                            setValue={setValue}
                        />
                    }
                </div>
                <BeautifulExperience/>
                <BottomBtns/>
            </form>
        </section>
    )
}
export default Step3