const getAgeIndex = (arrs, val) => {
    let scoreIndex = -1
    let name = Object.keys(arrs[0])
    if(!arrs) {
        return
    }
    arrs.forEach((item, index) => {
        let str =item[name[0]].toLowerCase()
        // let letters = str.match(/[a-z]+/g)
        let numbers = str.match(/\d+(\.\d+)?/g)

        if(index === 0 && numbers.length === 1) {
            if(+val <= +numbers[0]) {
                scoreIndex = index
            }
        } else if(index === arrs.length - 1 && numbers.length === 1) {
            if(+val >= +numbers[0]) {
                scoreIndex = index
            }
        } else if(numbers.length === 1) {
            if(val === numbers[0]) {
                scoreIndex = index
            }
        } else if(numbers.length === 2) {
            if(+val >= numbers[0] && +val <= numbers[1]) {
                scoreIndex = index
            }
        }
    })
    if(scoreIndex >= 0) {
        return scoreIndex
    }
    console.log('fixAgeRange error')
}
export default getAgeIndex