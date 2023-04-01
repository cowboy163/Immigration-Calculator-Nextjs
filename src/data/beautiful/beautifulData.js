import Step1 from "@/views/beautiful/step1/step1";
import Step2 from "@/views/beautiful/step2/step2";
import Step3 from "@/views/beautiful/step3/step3";
import Step4 from "@/views/beautiful/step4/step4";

const singleData = [
    () => <Step1/>,
    () => <Step2/>,
    () => <Step4/>,
]

const notSingleData = [
    () => <Step1/>,
    () => <Step2/>,
    () => <Step3/>,
    () => <Step4/>,
]
const beautifulData = [
    singleData,
    notSingleData,
]
export default beautifulData