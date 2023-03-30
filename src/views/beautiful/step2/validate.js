const validate = values => {
    const errors = {}
    if (!values.age) {
        errors.age = "需要填写年龄"
    } else if (isNaN(Number(values.age))) {
        errors.age = "需要输入数字"
    }
    if (!values.education) {
        errors.education = '需要选择您的学历'
    }
    return errors
}

export default validate