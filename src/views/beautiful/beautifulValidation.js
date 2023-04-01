import {useSelector} from "react-redux";
import {NOT_SINGLE, SINGLE} from "@/consts/consts";

const useBeautifulValidation = (step) => {
    const single = useSelector(state => state.beautifulStep1.single)
    const step2 = useSelector(state => state.beautifulStep2)
    const step3 = useSelector(state => state.beautifulStep3)
    const step4 = useSelector(state => state.beautifulStep4)

    const validateStep = () => {
        let res = {
            pass: false,
            error: "",
        }
        switch (step) {
            case 0:
                if(single === String(SINGLE) || single === String(NOT_SINGLE)) {
                    res.pass = true
                } else {
                    res.error = "请选择婚姻状况"
                }
                break
            case 1:
                if(!step2.age) {
                    res.error = "请输入年龄"
                    return res
                }
                if(!step2.education) {
                    res.error = "请选择一个学历"
                    return res
                }
                if(!step2.firstLang.test) {
                    res.error = "请选择一个语言考试"
                    return res
                }
                step2.firstLang.testScore.forEach(item => {
                    if(item === "" || !item) {
                        res.error = "请输入有效的考试成绩"
                        return res
                    }
                })
                if(step2.secondLang.test !== "null") {
                    if((step2.firstLang.test.charAt(0) === step2.secondLang.test.charAt(0)) || (step2.firstLang.test.charAt(0) !== "t" && step2.secondLang.test.charAt(0) !== "t")){
                        res.error = "第二门语言需要选择不同的语种"
                        return res
                    }
                    step2.secondLang.testScore.forEach(item => {
                        if(item === "" || !item) {
                            res.error = "请输入有效的第二门语言成绩"
                            return res
                        }
                    })
                }
                if(!step2.certification) {
                    res.error = "是否有加拿大联邦或省技能证书"
                    return res
                }
                if(res.error.length === 0) {
                    res.pass = true
                }
                break
            case 2:
                if(!step3.education) {
                    res.error = "请选择一个学历"
                    return res
                }
                if(step3.firstLang.test !== "null") {
                    step3.firstLang.testScore.forEach(item => {
                        if(item === "" || !item) {
                            res.error = "请输入有效的语言成绩"
                            return res
                        }
                    })
                }
                if(res.error.length === 0) {
                    res.pass = true
                }
                break
            case 3:
                if(!step4.pnp) {
                    res.error = "请选择是否有省提名"
                    return res
                }
                if(!step4.sponsorship) {
                    res.error = "请选择是否有雇主担保"
                    return res
                }
                if(!step4.education) {
                    res.error = "请选择是否有加拿大学历"
                    return res
                }
                if(!step4.relative) {
                    res.error = "请选择是否有兄弟姐妹在加拿大"
                    return res
                }
                if(res.error.length === 0) {
                    res.pass = true
                }
                break
            default:
                break
        }
        return res
    }
    return validateStep
}
export default useBeautifulValidation