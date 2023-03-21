const getSumOfStr = (str1, str2) => {
    let total = ""
    if(str1 || (str1 && str2)) {
        total = +str1 + +str2
        return String(total)
    }
    return total
}
export default getSumOfStr