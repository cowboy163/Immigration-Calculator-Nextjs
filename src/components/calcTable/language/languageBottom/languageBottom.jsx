import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";

const LanguageBottom = ({otherLangData}) => {
    return(
        <>
            <CalcSubTableRow>
                <CalcSubTableCol rowSpan={4}>
                    <div className="centerText">
                        您是否有另一门语言的成绩
                    </div>
                </CalcSubTableCol>
            </CalcSubTableRow>
            <ChoiceRow ChoiceData={otherLangData?.otherLangChoice}
                       rowSpan={4}
            />

        </>
    )
}
export default LanguageBottom