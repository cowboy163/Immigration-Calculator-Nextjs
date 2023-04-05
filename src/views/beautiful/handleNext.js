import useBeautifulStep from "@/views/beautiful/beautifulStep";
import {useDispatch, useSelector} from "react-redux";
import {setActiveStep} from "@/features/beautifulSlice/stepperSlice";

const useHandleNext = () => {
    const dispatch = useDispatch()
    const getStepStatus = useBeautifulStep()
    const activeStep = useSelector(state => state.beautifulStepper.activeStep)
    const {next} = getStepStatus()
    const nextStep = () => {
        if(next.flag) {
            dispatch(setActiveStep(activeStep + 1))
        }
    }
    return nextStep
}
export default useHandleNext