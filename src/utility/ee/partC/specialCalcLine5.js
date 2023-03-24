import csvToArray from "@/utility/csvToArray";

const specialCalcLine5 = (selection, clb, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            const name = Object.keys(rules[0])
            let nameIndex = -1
            let score = ""

            // check clb to ensure which nameIndex use
            if (clb && clb[0] && clb[0] !== "") {
                clb.forEach(item => {
                    if (+item < 7) {
                        nameIndex = -2
                    }
                })
                if (nameIndex === -1) {
                    clb.forEach(item => {
                        if (+item < 9) {
                            nameIndex = 1
                        }
                    })
                }
                if (nameIndex === -1) {
                    nameIndex = 2
                }
            }

            // find score through selection
            if (nameIndex > 0 && selection === 'yes') {
                score = rules[0][name[nameIndex]]
            } else {
                score = "0"
            }
            return score
        })
}
export default specialCalcLine5