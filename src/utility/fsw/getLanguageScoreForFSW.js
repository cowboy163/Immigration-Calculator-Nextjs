import csvToArray from "@/utility/csvToArray";
import fixLanguageRange from "@/utility/fsw/fixLanguageRange";
import getScore from "@/utility/fsw/getScore";

const getLanguageScoreForFSW = (val, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const score = val.testScore
            const arrangedScore = [score[3], score[2], score[0], score[1]]
            let secScore = 0
            let zeroFlag = false
            let arrs = data.data
            let name = Object.keys(arrs[0])
            let newData = arrs.map(item => {
                for (let i = 1; i < name.length - 1; i++) {
                    item = {...item, [name[i]]: fixLanguageRange(item[name[i]])}
                }
                return item
            })
            if(val.selected === "yes") {
                arrangedScore.forEach((item, index) => {
                    secScore = getScore(item, newData, index + 1)
                    if (+getScore(item, newData, index + 1) === 0) {
                        zeroFlag = true
                    }
                })
            } else {
                arrangedScore.forEach((item, index) => {
                    secScore += +getScore(item, newData, index + 1)
                    if (+getScore(item, newData, index + 1) === 0) {
                        zeroFlag = true
                    }
                })
            }
            return zeroFlag? 0 : secScore
        })
}

export default getLanguageScoreForFSW