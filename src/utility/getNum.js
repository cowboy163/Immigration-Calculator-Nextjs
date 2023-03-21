const getNum = str => {
    if(typeof str === 'string') {
        let numbers = str.match(/\d+(\.\d+)?/g)
        return numbers
    }
}
export default getNum