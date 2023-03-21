const inOptions = [
    {
        text: "无加拿大境内工作经验或工作不满1年",
        value: "0",
    },
    {
        text: "已满1年",
        value: "1",
    },
    {
        text: "已满2年",
        value: "2",
    },
    {
        text: "已满3年",
        value: "3",
    },
    {
        text: "已满4年",
        value: "4",
    },
    {
        text: "已满5年或以上",
        value: "5",
    },
]
const outOptions = [
    {
        text: "无加拿大境外工作经验",
        value: "0"
    },
    {
        text: "1至2年",
        value: "1"
    },
    {
        text: "3年或以上",
        value: "2"
    },
]
const eeExperienceIn = {
    description: "—— 请选择您在加拿大境内的工作年数 ——",
    options: inOptions,
}
const eeExperienceOut = {
    description: "—— 请选择您在加拿大境外的工作年数 ——",
    options: outOptions,
}
const eeExperienceInPartB = {
    description: "—— 请选择您的配偶 / 伴侣在加拿大境内的工作年数 ——",
    options: inOptions,
}
const eeExperienceData = [
    eeExperienceIn,
    eeExperienceOut,
    eeExperienceInPartB,
]
export default eeExperienceData

