import CalcExtraRow from "@/components/utility/calcExtraRow/calcExtraRow";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";

const SecScore = ({part, secScore}) => {
    return(
        <CalcExtraRow>
            <CalcSubTable>
                <CalcSubTableRow>
                    <CalcSubTableCol>
                        <p className="centerText">
                            {part}部分得分: {secScore}
                        </p>
                    </CalcSubTableCol>
                </CalcSubTableRow>
            </CalcSubTable>
        </CalcExtraRow>
    )
}
export default SecScore