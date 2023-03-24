import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import RatioSelect from "@/components/utility/ratioSelect/ratioSelect";

const Extra = ({extraData}) => {
    const {onChange, selected, content} = extraData
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <RatioSelect onChange={onChange}
                                 selected={selected}
                                 content={content}
                    />
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default Extra