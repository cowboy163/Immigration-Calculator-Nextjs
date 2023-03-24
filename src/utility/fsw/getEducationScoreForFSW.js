/*
 * @function getEducationScoreForFSW - get the score for the selection bars, this function use index to find the score
 * @param {string} val - the value input received, here I set it as "0" , "1", "2", which is their selection index
 * @param {string} ruleLocation - rules to calculate the score, cvs file, this is directory for the file
 */

import csvToArray from "@/utility/csvToArray";

const getEducationScoreForFSW = (val, ruleLocation) => {
    return csvToArray(ruleLocation).then(data => {
        if(!val) {
            return
        }
        let arrs = data.data
        let name = Object.keys(arrs[0])
        let index = +val - 1
        if(index === -1) {
            return "0"
        }
        if(index >= 0 && index < arrs.length) {
            return arrs[index][name[1]]
        }
        console.log("no result found in getEducationScoreForFSW")
    })
}
export default getEducationScoreForFSW