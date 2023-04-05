import commonStyles from "@/styles/beautiful.module.css";
import BeautifulButton from "@/components/beautiful/button";
import useHandlePrev from "@/views/beautiful/handlePrev";
import useBeautifulStep from "@/views/beautiful/beautifulStep";

const BottomBtns = () => {
    const handlePrev = useHandlePrev()
    const getStepStatus = useBeautifulStep()
    const {next, prev} = getStepStatus()
    return(
        <div className={commonStyles.bottomBtnOut}>
            <div className={commonStyles.bottomBtnIn}>
                <BeautifulButton handleClick={handlePrev}
                                 disabled={!prev.flag}
                >
                    {prev.text}
                </BeautifulButton>
            </div>
            <div className={commonStyles.bottomBtnIn}>
                <BeautifulButton
                    buttonType="submit"
                    disabled={!next.flag}
                >
                    {next.text}
                </BeautifulButton>
            </div>
        </div>
    )
}
export default BottomBtns