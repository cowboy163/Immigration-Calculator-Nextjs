import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";

const SubScore = ({data}) => {
    return(
        <CalcSubTable>
            {
                data? (
                        typeof data !== "string"?
                            data.map((item, index) =>
                                <CalcSubTableRow key={index}>
                                    <CalcSubTableCol>
                                        {item}
                                    </CalcSubTableCol>
                                </CalcSubTableRow>
                            )
                            :
                            <CalcSubTableRow>
                                <CalcSubTableCol>
                                    {data}
                                </CalcSubTableCol>
                            </CalcSubTableRow>

                    )
                    :
                    <tr>
                        <td></td>
                    </tr>
            }
        </CalcSubTable>
    )
}
export default SubScore