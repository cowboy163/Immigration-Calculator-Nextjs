import csvToArray from "@/utility/csvToArray";

const getAdditionalScore = (val, startIndex) => {
    const ruleLocation = '/csv/EE/partD/additional.csv'
    if (!val) {
        return
    }
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            const name = Object.keys(rules[0])
            let score = "0"
            // calculate yes or no option score
            if (val === 'yes') {
                score = rules[startIndex][name[1]]
            }
            // calculate clb language score
            if (typeof val === 'object' && val[0].length === 4 && val[1].length === 4) {
                let index = startIndex
                val[0].forEach(item => {
                    if (+item < 7) {
                        index = -1
                    }
                })
                if (index >= 0) {
                    val[1].forEach(item => {
                        if (+item < 5) {
                            index = index - 1
                        }
                    })
                    score = rules[index][name[1]]
                } else {
                    score = "0"
                }
            }
            // selection score (education)
            if (+val > 0) {
                if(+val === 1) {
                    score = rules[startIndex][name[1]]
                }
                if(+val > 1 && startIndex === 3) {
                    score = rules[startIndex + 1][name[1]]
                }
                if(+val > 1 && startIndex === 6) {
                    score = rules[startIndex - 1][name[1]]
                }
            }

            return score
        })
}
export default getAdditionalScore