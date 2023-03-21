import csvToArray from "@/utility/csvToArray";
import getNum from "@/utility/getNum";
import getSumArray from "@/utility/getSumArray";

const getLangTotalScore = (CLB, ruleLocation, spouse) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            const name = Object.keys(rules[0])
            let score = []
            let spouseIndex = 2
            if(spouse === "yes") {
                spouseIndex = 1
            }
            rules.sort((a, b) => {return +a[name[1]] - +b[name[1]]})
            CLB.forEach((clb, index) => {
                rules.forEach((rule, i) => {
                    let flag = false
                    const range = getNum(rule[name[0]])
                    if(i === 0) {
                        if(+clb < +range[0]) {
                            score[index] = rule[name[spouseIndex]]
                            flag = true
                        }
                    } else if(i === rules.length - 1) {
                        if(!range[1] && +clb >= +range[0]) {
                            score[index] = rule[name[spouseIndex]]
                            flag = true
                        }
                    }
                    if((i > 0) && (i < rules.length - 1) && (!flag)) {
                        if(range.length === 1) {
                            if(+clb === +range[0]) {
                                score[index] = rule[name[spouseIndex]]
                            }
                        } else if (range.length === 2) {
                            if((+clb >= +range[0]) && (+clb <= +range[1])) {
                                score[index] = rule[name[spouseIndex]]
                            }
                        }
                    }
                })
            })
            return getSumArray(score)
        })
}
export default getLangTotalScore