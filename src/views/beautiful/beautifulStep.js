/*
 * @function useBeautifulStep - custom hook to determine the status of next/prev button
 */
import {useSelector} from "react-redux";

const useBeautifulStep = () => {
    const activeStep = useSelector(state => state.beautifulStepper.activeStep)
    const stepLength = useSelector(state => state.beautifulStepper.stepLength)

    const getStepStatus = () => {
        let res = {
            next: {
                text: "下一页",
                flag: true,
            },
            prev: {
                text: "上一页",
                flag: false,
            }
        }
        if(activeStep > 0) {
            res.prev.flag = true
        }
        if(activeStep === stepLength - 1) {
            res.next = {
                text: "计算总分",
                flag: false,
            }
        }
        return res
    }

    return getStepStatus
}
export default useBeautifulStep