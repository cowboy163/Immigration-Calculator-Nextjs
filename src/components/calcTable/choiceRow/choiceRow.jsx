/*
 * @typedef {object} ChoiceData
 *
 */

import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import RatioSelect from "@/components/utility/ratioSelect/ratioSelect";

const ChoiceRow = ({ChoiceData, rowSpan}) => {
    return(
        <CalcSubTableRow>
            <CalcSubTableCol rowSpan={rowSpan}>
                <div className='centerText'>
                    <RatioSelect content={ChoiceData?.content}
                                 selected={ChoiceData?.selected}
                                 onChange={ChoiceData?.onChange}
                    />
                </div>

            </CalcSubTableCol>
        </CalcSubTableRow>
    )
}
export default ChoiceRow