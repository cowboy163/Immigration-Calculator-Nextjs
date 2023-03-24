import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getAdditionalScore from "@/utility/ee/partD/getAdditionalScore";
import {changeSubDScore} from "@/features/eeSlice/eeSlicePartD";
import CalcSubTable from "@/components/utility/calcSubTable/calcSubTable";
import CalcSubTableRow from "@/components/utility/calcSubTable/calcSubTableRow/calcSubTableRow";
import CalcSubTableCol from "@/components/utility/calcSubTable/calcSubTableCol/calcSubTableCol";

const LanguageView = ({lineIndex}) => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.eeCalcPartA.language)
    const otherLang = useSelector(state => state.eeCalcPartA.otherLang)
    const clb = useSelector(state => state.eeCalcPartC.clb)
    const otherClb = useSelector(state => state.eeCalcPartC.otherClb)
    useEffect(() => {
        if(language.selected === 'french') {
            const val = [clb, otherClb]
            const startIndex = 2
            getAdditionalScore(val, startIndex)
                .then(data => {
                    dispatch(changeSubDScore([data, lineIndex]))
                })
        }
    }, [language, otherLang, clb, otherClb, dispatch, lineIndex])
    return(
        <CalcSubTable>
            <CalcSubTableRow>
                <CalcSubTableCol>
                    <div className="centerText">
                        <p>您法语的每项分数是否都达到NCLC 7？</p>
                        <p>（该部分自动计算）</p>
                    </div>
                </CalcSubTableCol>
            </CalcSubTableRow>
        </CalcSubTable>
    )
}
export default LanguageView