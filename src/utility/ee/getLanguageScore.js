import getRuleLocation from "@/utility/getRuleLocation";
import getCLB from "@/utility/getCLB";
import getLangTotalScore from "@/utility/ee/getLangTotalScore";

const getLanguageScore = (language, spouse, clbRule) => {
    if(language.test) {
        const dir = ['EE', 'language', language.test]
        const ruleLocation = getRuleLocation(dir)

        return getCLB(language, ruleLocation)
            .then(CLB => {
                let clbRuleLocation = ""
                if(!clbRule) {
                    clbRuleLocation = '/csv/EE/firstLang.csv'
                    if(language.selected === "yes") {
                        clbRuleLocation = '/csv/EE/secondLang.csv'
                    }
                } else {
                    clbRuleLocation = clbRule
                }

                return getLangTotalScore(CLB, clbRuleLocation, spouse)
                    .then(score => {
                        return score
                    })
            })

    }
}
export default getLanguageScore