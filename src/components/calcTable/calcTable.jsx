import CalcOther from "@/components/calcTable/calcOther/calcOther";
import SecScore from "@/components/calcTable/secScore/secScore";
import MainCont from "@/components/calcTable/mainCont/mainCont";

const CalcTable= ({data, subScore, secScore, other}) => {
    const {header, body, part, extra} = data
    return(
        <div>
            <MainCont header={header} body={body} subScore={subScore} extra={extra}/>
            {
                part && <SecScore part={part} secScore={secScore}/>
            }
            {
                other?.content?.options[0]?.text && <CalcOther other={other}/>
            }
        </div>
    )
}

export default CalcTable