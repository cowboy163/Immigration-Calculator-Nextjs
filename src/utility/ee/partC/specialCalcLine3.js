import csvToArray from "@/utility/csvToArray";

const specialCalcLine3 = (exOut, clb, ruleLocation) => {
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

            // compare with work experience.jsx outside of CA to get score
            if(nameIndex > 0) {
                score = rules[+exOut][name[nameIndex]]
            } else {
                score = "0"
            }
            return score
        })
}
export default specialCalcLine3