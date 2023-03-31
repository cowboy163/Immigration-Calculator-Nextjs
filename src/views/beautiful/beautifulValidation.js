import {useSelector} from "react-redux";
import {NOT_SINGLE, SINGLE} from "@/consts/consts";

const beautifulValidation = (step) => {
    const single = useSelector(state => state.beautifulStep1.single)
    switch (step) {
        case 0:
            return single === String(SINGLE) || single === String(NOT_SINGLE);
        default:
            return false
    }
}
export default beautifulValidation