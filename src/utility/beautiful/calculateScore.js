import getAgeScore from "@/utility/ee/getAgeScore";
import {NOT_SINGLE} from "@/consts/consts";
import getEducationScore from "@/utility/ee/getEducationScore";
import getLanguageScore from "@/utility/ee/getLanguageScore";

const calculateScore = async (step1, step2, step3, step4) => {
    // console.log('step1', step1)
    // console.log('step2', step2)
    // console.log('step3', step3)
    // console.log('step4', step4)
    let totalScore = 0

    // applicant age score
    const age = step2.age
    const ageRuleLocation = 'csv/EE/age.csv'
    let spouse = "no"
    if (step1.single === String(NOT_SINGLE)) {
        spouse = "yes"
    }
    totalScore += await getAgeScore(age, ageRuleLocation, spouse)
        .then(score => {
            return +score
        })

    // applicant education score
    const educationRuleLocation = 'csv/EE/education.csv'
    const education = step2.education
    totalScore += await getEducationScore(education, educationRuleLocation, spouse)
        .then(score => {
            return +score
        })

    // applicant first language score
    const firstLang = step2.firstLang
    if (firstLang.test) {
        totalScore += await getLanguageScore(firstLang, spouse)
            .then(score => {
                return +score
            })
    }

    // applicant second language score
    const secondLang = step2.secondLang
    if (secondLang.test !== 'null') {
        const secondLangRuleLocation = '/csv/EE/secondLang.csv'
        totalScore += await getLanguageScore(secondLang, spouse, secondLangRuleLocation)
            .then(score => {
                return +score
            })
    }

    // applicant work experience in CA score
    const exInCA = +step2.exInCA > 5 ? 5 : step2.exInCA
    const exInCaRuleLocation = '/csv/EE/experience/canadaExperience.csv'
    if (+exInCA > 0) {
        totalScore += await getEducationScore(exInCA, exInCaRuleLocation, spouse)
            .then(score => {
                return +score
            })
    }

    if (spouse !== "no") {
        // applicant's spouse education score
        const spouseEducation = step3.education
        const seRuleLocation = '/csv/EE/spouse/education.csv'
        totalScore += await getEducationScore(spouseEducation, seRuleLocation, spouse)
            .then(score => {
                console.log('spouse education score ===>', score)
                return +score
            })
    }


    console.log('total score check ===> ', totalScore)
}
export default calculateScore