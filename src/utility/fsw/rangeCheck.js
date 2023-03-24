/*
 * @function rangeCheck - check if the input in the range, return true or false
 * @param {string} str - describe the range, e.g. "15 - 30"
 * @param {string} val - input value which will be checked if in the range
 */
const rangeCheck = (str, val) => {
    let range = str.match(/\d+(\.\d+)?/g)
    let min = -1
    let max = -1
    let input = +val
    if(!min || !range) {
        return "ageRangeCheck function param error"
    }
    min = +range[0]
    max = +range[1]
    if(max) {
        return (min <= input) && (max >= input)
    }
    return input === min
}

export default rangeCheck