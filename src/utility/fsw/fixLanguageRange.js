const fixLanguageRange = (val) => {
    if(!val) {
        return 'no param for fixLanguageRange()'
    }
    if(typeof val === 'string') {
        let numbers = val.match(/\d+(\.\d+)?/g)
        // console.log('fix language range check ===> ', numbers)
        if(numbers.length === 1){
            return [+numbers[0], +numbers[0] + 0.4]
        }
        if(numbers.length === 2) {
            return [+numbers[0], +numbers[1] + 0.4]
        }
    }
}
export default fixLanguageRange