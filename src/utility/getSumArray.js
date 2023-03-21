const getSumArray = arr => {
    let sum = 0
    let flag = false
    arr.forEach(item => {
        if(item) {
            if(typeof item === 'string' || typeof item === 'number') {
                sum += +item
                flag = true
            } else if(typeof item === 'object') {
                sum += +getSumArray(item)
                flag = true
            }
        }
    })
    return flag? String(sum) : ""
}
export default getSumArray