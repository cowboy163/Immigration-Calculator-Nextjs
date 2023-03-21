import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import SelectBar from "@/components/utility/selectBar/selectBar";

const Education = ({content, onChange, value}) => {
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <SelectBar content={content}
                               onChange={onChange}
                               value={value}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>

    )
}
export default Education