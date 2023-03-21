import csvToArray from "@/utility/csvToArray";

const getEducationScore = (val, ruleLocation, spouse) => {
    return csvToArray(ruleLocation).then(data => {
        if(!val) {
            return
        }
        let arrs = data.data
        let name = Object.keys(arrs[0])
        let index = +val
        if(index === -1) {
            return "0"
        }
        if(index >= 0 && index < arrs.length) {
            if(spouse === "yes") {
                return arrs[index][name[1]]
            }
            return arrs[index][name[2]]
        }
        console.log("no result found in getEducationScoreForFSW")
    })
}
export default getEducationScore