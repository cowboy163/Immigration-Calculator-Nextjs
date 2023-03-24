/*
 * @function fixAgeRange - fix the format of the range for age
 * @param {string} input - receive range string and return it with correct range format
 */

const fixAgeRange = (input) => {
    if(!input) {
        console.log('fixAgeRange param is missing')
        return
    }
    let newRes = ""
    let str = input.toLowerCase()
    let letters = str.match(/[a-z]+/g)
    let numbers = str.match(/\d+(\.\d+)?/g)
    if(numbers && numbers.length < 3 && !letters) {
        return input
    }
    if(letters && numbers && numbers.length === 1) {
        letters.forEach(item => {
            if(item === 'under') {
                newRes = '0-' + numbers[0]
                return
            }
            if(item === 'older') {
                newRes = numbers[0] + '-99'
            }
        })
    }
    if(newRes !== "") {
        return newRes
    }
    console.log('fixAgeRange error')
}
export default fixAgeRange