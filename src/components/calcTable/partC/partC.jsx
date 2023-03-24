import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";

const PartC = ({data}) => {
    return(
        <CalcSubTable>
            {
                data && data.map((item, index) =>
                    <CalcSubTableRow key={index}>
                        <CalcSubTableCol>
                            {item}
                        </CalcSubTableCol>
                    </CalcSubTableRow>
                )
            }
        </CalcSubTable>
    )
}
export default PartC