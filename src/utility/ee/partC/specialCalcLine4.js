import csvToArray from "@/utility/csvToArray";

const specialCalcLine4 = (exOut, exIn, ruleLocation) => {
    return csvToArray(ruleLocation)
        .then(data => {
            const rules = data.data
            const name = Object.keys(rules[0])
            let nameIndex = -1
            let score = ""

            // check work experience.jsx in CA to ensure which nameIndex use
            if(+exIn > 1) {
                nameIndex = 2
            } else if(+exIn === 1) {
                nameIndex = 1
            } else {
                nameIndex = -2
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
export default specialCalcLine4