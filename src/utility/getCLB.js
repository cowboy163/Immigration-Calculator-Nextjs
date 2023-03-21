/*
 * @function getCLB - get the CLB score as array format: ["5", "6", "5", "5"]
 * @param {object} language - language information include tests and scores
 * @param {string} ruleLocation
 */

import csvToArray from "@/utility/csvToArray";
import getNum from "@/utility/getNum";

const getCLB = (language, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            let CLB = []
            const name = Object.keys(rules[0])
            const score = language.testScore
            const arrangedScore = [score[2], score[0], score[1], score[3]]
            rules.forEach((item, index) => {
                arrangedScore.forEach((test, i) => {
                    let testIndex = i + 1
                    let range = getNum(item[name[testIndex]])
                    let flag = false
                    if(index === 0) {
                        if(+test >= +range[0]) {
                            CLB[i] = getNum(item[name[0]])[0]
                            flag = true
                        }
                    } else if (index === rules.length - 1) {
                        if(+test < +range[0]) {
                            CLB[i] = "0"
                            flag = true
                        }
                    }
                    if(!flag) {
                        if(index > 0) {
                            let rangeUpper = getNum(rules[index - 1][name[testIndex]])[0]
                            if((+test >= +range[0]) && (+test < +rangeUpper)) {
                                CLB[i] = getNum(item[name[0]])[0]
                            }
                        }

                    }
                })
            })
            return CLB
        })
}
export default getCLB