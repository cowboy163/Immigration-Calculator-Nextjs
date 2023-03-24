import csvToArray from "@/utility/csvToArray";

const specialCalcLine1 = (education, clb, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            const name = Object.keys(rules[0])
            let nameIndex = -1
            let score = ""

            // check clb to ensure which nameIndex use
            if(clb && clb[0] && clb[0] !== "") {
                clb.forEach(item => {
                    if(+item < 7) {
                        nameIndex = -2
                    }
                })
                if(nameIndex === -1) {
                    clb.forEach(item => {
                        if(+item < 9) {
                            nameIndex = 1
                        }
                    })
                }
                if(nameIndex === -1) {
                    nameIndex = 2
                }
            }

            // find score
            if(nameIndex > 0) {
                if(+education < 2) {
                    score = rules[0][name[nameIndex]]
                } else if(education >= 2 && education < 5) {
                    score = rules[1][name[nameIndex]]
                } else {
                    let index = +education - 3
                    score = rules[index][name[nameIndex]]
                }
            } else {
                score = "0"
            }
            return score
        })
}
export default specialCalcLine1