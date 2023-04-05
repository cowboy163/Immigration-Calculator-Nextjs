import getAgeScore from "@/utility/ee/getAgeScore";
import {NOT_SINGLE} from "@/consts/consts";
import getEducationScore from "@/utility/ee/getEducationScore";
import getLanguageScore from "@/utility/ee/getLanguageScore";
import getRuleLocation from "@/utility/getRuleLocation";
import getCLB from "@/utility/getCLB";
import specialCalcLine1 from "@/utility/ee/partC/specialCalcLine1";
import specialCalcLine2 from "@/utility/ee/partC/specialCalcLine2";
import specialCalcLine3 from "@/utility/ee/partC/specialCalcLine3";
import specialCalcLine4 from "@/utility/ee/partC/specialCalcLine4";
import specialCalcLine5 from "@/utility/ee/partC/specialCalcLine5";
import getAdditionalScore from "@/utility/ee/partD/getAdditionalScore";

const calculateScore = async (step1, step2, step3, step4) => {
    let totalScore = 0

    // applicant age score
    const age = step2.age
    const ageRuleLocation = 'csv/EE/age.csv'
    let spouse = "no"
    if (step1.single === String(NOT_SINGLE)) {
        spouse = "yes"
    }
    if(age) {
        totalScore += await getAgeScore(age, ageRuleLocation, spouse)
            .then(score => {
                return +score
            })
    } else {
        console.log("error, missing age")
    }

    // applicant education score
    const educationRuleLocation = 'csv/EE/education.csv'
    const education = step2.education
    if(education) {
        totalScore += await getEducationScore(education, educationRuleLocation, spouse)
            .then(score => {
                return +score
            })
    } else {
        console.log('error, missing education')
    }

    // applicant first language score
    const firstLang = step2.firstLang
    if (firstLang.test) {
        totalScore += await getLanguageScore(firstLang, spouse)
            .then(score => {
                return +score
            })
    } else {
        console.log("error, missing first language")
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
        if(spouseEducation) {
            totalScore += await getEducationScore(spouseEducation, seRuleLocation, spouse)
                .then(score => {
                    return +score
                })
        } else {
            console.log('error, missing spouse education')
        }


        // applicant's spouse language score
        const slRuleLocation = '/csv/EE/spouse/language.csv'
        const spouseLang = step3.firstLang
        if(spouseLang.test !== "null") {
            totalScore += await  getLanguageScore(spouseLang, spouse, slRuleLocation)
                .then(score => {
                    return +score
                })
        }

        // applicant's spouse work experience in CA score
        const seInCA = +step3.exInCA > 5 ? 5 : step3.exInCA
        const seInCaRuleLocation = '/csv/EE/spouse/experience.csv'
        if (+seInCA > 0) {
            totalScore += await getEducationScore(seInCA, seInCaRuleLocation, spouse)
                .then(score => {
                    return +score
                })
        }
    }

    // step4 score
    // education + language
    let firstLangClb = []
    let secondLangClb = []
    // get clb score for languages
    if(step2.firstLang.test) {
        const dir = ['EE', 'language', step2.firstLang.test]
        const ruleLocation = getRuleLocation(dir)
        firstLangClb = await getCLB(step2.firstLang, ruleLocation)
            .then(clb => {
                return clb
            })
        const newRuleLocation = '/csv/EE/partC/education1.csv'
        if(step2.education) {
            totalScore += await specialCalcLine1(step2.education, firstLangClb, newRuleLocation)
                .then(score => {
                    return +score
                })
        }
    }
    if(step2.secondLang.test && step2.secondLang.test !== "null") {
        const dir = ['EE', 'language', step2.secondLang.test]
        const ruleLocation = getRuleLocation(dir)
        secondLangClb = await getCLB(step2.secondLang, ruleLocation)
            .then(clb => {
                return clb
            })
    }
    // education + work experience in Canada
    if(step2.education) {
        const ruleLocation = '/csv/EE/partC/education2.csv'
        totalScore += await specialCalcLine2(step2.education, step2.exInCA, ruleLocation)
            .then(score => {
                return +score
            })
    }

    // work experience outside Canada + language
    if(step2.exOutCA && step2.exOutCA !== "0") {
        const ruleLocation = '/csv/EE/partC/experience1.csv'
        const exOutCA = +step2.exOutCA > 2 ? 2 : 1
        totalScore += await specialCalcLine3(exOutCA, firstLangClb, ruleLocation)
            .then(score => {
                return +score
            })

        // work experience outside Canada + work experience inside Canada
        const newRuleLocation = '/csv/EE/partC/experience2.csv'
        totalScore += await specialCalcLine4(exOutCA, step2.exInCA, newRuleLocation)
            .then(score => {
                return +score
            })
    }

    // certificate and language
    if(step2.certification === "yes") {
        const ruleLocation = '/csv/EE/partC/certificate.csv'
        totalScore += await specialCalcLine5(step2.certification, firstLangClb, ruleLocation)
            .then(score => {
                return +score
            })
    }

    // relative
    if(step4.relative === "yes") {
        const startIndex = 0
        totalScore += await getAdditionalScore(step4.relative, startIndex)
            .then(score => {
                return +score
            })
    } else if(step4.relative !== "no") {
        console.log("error, missing relatives")
    }

    // language
    if(step2.firstLang.test.charAt(0) === 't' || step2.secondLang.test.charAt(0) === 't') {
        let val = [firstLangClb, secondLangClb]
        if(step2.secondLang.test.charAt(0) === 't') {
            val = [secondLangClb, firstLangClb]
        }
        const startIndex = 2
        totalScore += await getAdditionalScore(val, startIndex)
            .then(score => {
                return +score
            })
    }

    // education in Canada
    if(step4.education && step4.education !== "2") {
        let education = "1"
        if(step4.education === "0") {
            education = "2"
        }
        const startIndex = 3
        totalScore += await getAdditionalScore(education, startIndex)
            .then(score => {
                return +score
            })
    } else if(!step4.education) {
        console.log("error, missing education in Canada")
    }

    // sponsorship
    if(step4.sponsorship && step4.sponsorship !== "2") {
        const startIndex = 6
        let sponsorship = "1"
        if(step4.sponsorship === "0") {
            sponsorship = "2"
        }
        totalScore += await getAdditionalScore(sponsorship, startIndex)
            .then(score => {
                return +score
            })
    } else if (!step4.sponsorship) {
        console.log("error, missing employee sponsorship")
    }

    // PNP
    if(step4.pnp && step4.pnp !== "no") {
        const startIndex = 7
        totalScore += await getAdditionalScore(step4.pnp, startIndex)
            .then(score => {
                return +score
            })
    } else if (!step4.pnp) {
        console.log("error, missing Provincial Nominee Selection")
    }
    return totalScore
}
export default calculateScore