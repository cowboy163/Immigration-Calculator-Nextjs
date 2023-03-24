import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import SelectBar from "@/components/utility/selectBar/selectBar";

const ExperiencePartB = ({eeExData}) => {
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    加拿大境内工作年数
                </CalcSubTableCol>
                <CalcSubTableCol>
                    <SelectBar
                        value={eeExData.eeExInControl.value}
                        onChange={eeExData.eeExInControl.onChange}
                        content={eeExData.eeExInControl.content}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default ExperiencePartB