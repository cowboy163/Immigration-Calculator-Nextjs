import csvToArray from "@/utility/csvToArray";
import fixAgeRange from "@/utility/fsw/fixAgeRange";
import rangeCheck from "@/utility/fsw/rangeCheck";

const getAgeScoreForFSW = async (val, ruleLocation) => {
    return csvToArray(ruleLocation).then(data => {
        if(!val) {
            return
        }
        let arrs = data.data
        let name = Object.keys(arrs[0])
        let index= -1
        arrs.forEach((item, i) => {
            let range = fixAgeRange(item[name[0]])
            if(rangeCheck(range, val)) {
                index = i
            }
        })
        if(index >= 0) {
            return arrs[index][name[1]]
        }
        console.log("no result found in getAgeScoreForFSW()")
    })
}

export default getAgeScoreForFSW