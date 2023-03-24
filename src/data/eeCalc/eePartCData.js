import EducationPartCView from "@/components/eeCalc/PartC/education/education";
import ExperiencePartCView from "@/components/eeCalc/PartC/experience/experience";
import CertificatePartCView from "@/components/eeCalc/PartC/certificate/certificate";
import ExtraView from "@/components/eeCalc/PartC/extra/extra";

const header = "C. 技能适应性分数 SKILL TRANSFERABILITY FACTORS（最高 100 分）"
const extra = () => <ExtraView/>
const body = [
    {
        title: "教育",
        content: (lineIndex) => <EducationPartCView lineIndex={lineIndex}/>,
    },
    {
        title: "海外工作经验",
        content: (lineIndex) => <ExperiencePartCView lineIndex={lineIndex}/>,
    },
    {
        title: "行业证书",
        content: (lineIndex) => <CertificatePartCView lineIndex={lineIndex}/>,
    },
]

const eePartCData = {
    header,
    body,
    part: "C",
    extra,
}

// top option data
const topOption = [
    {
        text: "是",
        value: "yes",
        group: "topOption"
    },
    {
        text: "否",
        value: "no",
        group: "topOption"
    },
]
const topOptionContent = {
    description: () => <p>您是否有加拿大毕业证书</p>,
    options: topOption,
}

// content
const contentPartC = {
    education: ["教育经历 + 语言加分", "教育经历 + 加拿大工作经验加分"],
    experience: ["海外工作经验 + 语言加分", "海外工作经验 + 加拿大工作经验加分"],
    certificate: ["行业证书 + 语言加分"],
}

export {
    eePartCData,
    topOptionContent,
    contentPartC,
}
