import RelativesView from "@/components/eeCalc/PartD/relatives/relatives";
import GuaranteeView from "@/components/eeCalc/PartD/guarantee/guarantee";
import ProvincialNominationView from "@/components/eeCalc/PartD/provincialNomination/provincialNomination";
import LanguageView from "@/components/eeCalc/PartD/language/language";
import EducationView from "@/components/eeCalc/PartD/education/education";

const header = "D. 额外加分（最高 600 分）"
const body = [
    {
        title: "兄弟姐妹",
        content: (lineIndex) => <RelativesView lineIndex={lineIndex}/>,
    },
    {
        title: "语言",
        content: (lineIndex) => <LanguageView lineIndex={lineIndex}/>,
    },
    {
        title: "加拿大教育经历",
        content: (lineIndex) => <EducationView lineIndex={lineIndex}/>,
    },
    {
        title: "雇主担保",
        content: (lineIndex) => <GuaranteeView lineIndex={lineIndex}/>,
    },
    {
        title: "省提名",
        content: (lineIndex) => <ProvincialNominationView lineIndex={lineIndex}/>,
    },
]

const eePartDData = {
    header,
    body,
    part: "D",
}

// relatives data
const relativesOptions = [
    {
        text: "无",
        value: "no",
        group: "relativesOptions",
    },
    {
        text: "有",
        value: "yes",
        group: "relativesOptions",
    },
]
const relativesData = {
    description: () => <p>您是否有加拿大永久居民（PR）或公民（Citizen）的兄弟姐妹？</p>,
    options: relativesOptions,
}

// education data
const educationOptions= [
    {
        text: "从未",
        value: "0",
        group: "educationOptionPartD",
    },
    {
        text: "1 ~ 2 年本科或专科",
        value: "1",
        group: "educationOptionPartD",
    },
    {
        text: "3 年及以上本科或专科",
        value: "2",
        group: "educationOptionPartD",
    },
    {
        text: "1 年及以上硕士或博士",
        value: "3",
        group: "educationOptionPartD",
    },

]
const educationData = {
    description: () => <p>您在加拿大接受的高等教育水平最高为？</p>,
    options: educationOptions,
}

// Guarantee Data
const guaranteeOptions= [
    {
        text: "无",
        value: "0",
        group: "guaranteeOptionPartD",
    },
    {
        text: "TEER 0 ~ 3 级（非 00 大类）",
        value: "1",
        group: "guaranteeOptionPartD",
    },
    {
        text: "TEER 00 大类",
        value: "2",
        group: "guaranteeOptionPartD",
    },
]
const guaranteeData = {
    description: () => <p>您是否有 <span>LMIA</span>？</p>,
    options: guaranteeOptions,
}

// Provincial Nomination Data
const provincialNominationOptions= [
    {
        text: "无",
        value: "0",
        group: "provincialNominationOptionPartD",
    },
    {
        text: "有",
        value: "1",
        group: "provincialNominationOptionPartD",
    },
]
const provincialNominationData = {
    description: () => <p>您是否有省提名？</p>,
    options: provincialNominationOptions,
}


export {
    eePartDData,
    relativesData,
    educationData,
    guaranteeData,
    provincialNominationData,
}