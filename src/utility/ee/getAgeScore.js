import getAgeIndex from "@/utility/ee/getAgeIndex";
import csvToArray from "@/utility/csvToArray";

const getAgeScoreForEE = async (val, ruleLocation, spouse) => {
    return csvToArray(ruleLocation).then(data => {
        if(!val) {
            return
        }
        let arrs = data.data
        let name = Object.keys(arrs[0])
        let index = getAgeIndex(arrs, val)
        if(index) {
            if(spouse === "yes") {
                return arrs[index][name[1]]
            }
            return arrs[index][name[2]]
        }
    })
}

export default getAgeScoreForEE