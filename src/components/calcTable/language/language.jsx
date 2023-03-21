import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";
import LanguageMid from "@/components/calcTable/language/languageMid/languageMid";
import LanguageBottom from "@/components/calcTable/language/languageBottom/languageBottom";

const Language = ({langData, secondLangNotShow}) => {
    return (
        <CalcSubTable>
            <ChoiceRow ChoiceData={langData.langTopData} rowSpan={4}/>
            {
                langData.langTopData.selected && <LanguageMid testData={langData.testData}/>
            }
            {
                (langData?.langTopData?.selected && !secondLangNotShow) && <LanguageBottom otherLangData={langData.otherLangData}/>
            }
            {
                langData?.otherLangData?.otherLangChoiceSelected === "yes" && <LanguageMid testData={langData.otherLangTestData}/>
            }

        </CalcSubTable>
    )
}
export default Language