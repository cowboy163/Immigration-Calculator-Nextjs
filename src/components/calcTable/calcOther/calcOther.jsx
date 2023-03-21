import CalcExtraRow from "@/components/utility/calcExtraRow/calcExtraRow";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";
import RatioSelect from "@/components/utility/ratioSelect/ratioSelect";

const CalcOther = ({other}) => {
    const {content, selected, onChange} = other
    return(
        <CalcExtraRow bgColor="#faf9e6">
            <CalcSubTable>
                <CalcSubTableRow>
                    <CalcSubTableCol>
                        <div className="centerText">
                            <RatioSelect content={content}
                                         selected={selected}
                                         onChange={onChange}
                            />
                        </div>
                    </CalcSubTableCol>
                </CalcSubTableRow>
            </CalcSubTable>
        </CalcExtraRow>
    )
}
export default CalcOther