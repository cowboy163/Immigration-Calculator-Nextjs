/*
 * @function getRuleLocation - transform locationArray into location string
 * @param {string[]} locationArray - array includes the location pieces
 */

const getRuleLocation = locationArray => {
    let dir = '/csv'

    if(!locationArray) {
        return 'no param for getRuleLocation()'
    }
    if(typeof locationArray === "string") {
        return `${dir}/${locationArray}.csv`
    }
    if(typeof locationArray === "object") {
        locationArray.forEach(item => {
            dir = dir + '/' + item
        })
        dir = dir + '.csv'
        return dir
    }
    return 'error param for getRuleLocation()'
}
export default getRuleLocation