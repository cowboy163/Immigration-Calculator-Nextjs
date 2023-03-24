const getScore = (val, rules, index) => {
    let score = ""
    let name = Object.keys(rules[0])
    if(+val < rules[0][name[index]][0]) {
        return "0"
    }
    if(+val > rules[rules.length - 1][name[index]][1]) {
        return rules[rules.length - 1][name[5]]
    }
    rules.forEach(item => {
        if(+val >= item[name[index]][0] && +val <= item[name[index]][1]) {
            score = item[name[5]]
        }
    })
    return score
}
export default getScore