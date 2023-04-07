import useBeautifulStep from "@/views/beautiful/beautifulStep";
import {useDispatch, useSelector} from "react-redux";
import {setActiveStep} from "@/features/beautifulSlice/stepperSlice";

const useHandlePrev = () => {
    const dispatch = useDispatch()
    const getStepStatus = useBeautifulStep()
    const activeStep = useSelector(state => state.beautifulStepper.activeStep)
    const {prev} = getStepStatus()
    const prevStep = () => {
        if(prev.flag) {
            dispatch(setActiveStep(activeStep - 1))
            window.scrollTo({top: 0})
        }
    }
    return prevStep
}
export default useHandlePrev