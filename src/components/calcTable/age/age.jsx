/*
 * @param {string} inputValue - input value
 * @param {callback} onChange
 * @param {number} lineIndex - the number of rows, start from 0
 */

import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import Input from "@/components/utility/input/input";

const Age = ({inputValue, onChange}) => {
    return (
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <Input placeholder="年龄"
                           value={inputValue}
                           onChange={onChange}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>

    )
}
export default Age