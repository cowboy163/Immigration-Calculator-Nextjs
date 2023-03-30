/*
 * @function getEmptyArray - get an array with elements of ""
 * @param {number} lengthOfArray - the length of array
 */

const getEmptyArray = (lengthOfArray) => {
    let arr = []
    for(let i = 0; i < lengthOfArray; i++) {
        arr.push("")
    }
    return arr
}
export default getEmptyArray