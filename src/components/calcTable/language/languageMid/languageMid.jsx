import ChoiceRow from "@/components/calcTable/choiceRow/choiceRow";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import Input from "@/components/utility/input/input";

const LanguageMid = ({testData}) => {
    return(
        <>
            <ChoiceRow ChoiceData={testData?.testChoiceData} rowSpan={4}/>
            <CalcSubTableRow>
                {
                    testData?.testCategory.map((item, index) =>
                        <CalcSubTableCol key={index}>
                            <div className="centerText">
                                {item}
                            </div>
                        </CalcSubTableCol>
                    )
                }
            </CalcSubTableRow>
            <CalcSubTableRow>
                {
                    testData?.testCategory.map((item, index) =>
                        <CalcSubTableCol key={index}>
                            <div className="centerText">
                                <Input onChange={testData.testScore.scoreChange}
                                       value={testData.testScore.score[index]}
                                       index={index}
                                />
                            </div>
                        </CalcSubTableCol>
                    )
                }
            </CalcSubTableRow>
        </>
    )
}
export default LanguageMid