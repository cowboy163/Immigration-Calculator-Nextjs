/*
 * @function simpleScoreCalc - simple way to get score for yes/no question
 * @param {string} val - input value of yes/no question, either "yes" or "no"
 * @param {string} score - how much score get for "yes" option
 */
const simpleScoreCalc = (val, score) => {
    return val === "yes"? String(score) : "0"
}
export default simpleScoreCalc