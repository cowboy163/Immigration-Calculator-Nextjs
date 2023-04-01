import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changeCertification} from "@/features/beautifulSlice/step2Slice";
const options = [
    {
        text: "有",
        value: "yes",
    },
    {
        text: "无",
        value: "no",
    },
]

const BeautifulCertification = () => {
    const dispatch = useDispatch()
    const selectedValue = useSelector(state => state.beautifulStep2.certification)
    const handleClick = value => {
        dispatch(changeCertification(value))
    }

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                加拿大联邦或省技能证书
            </InputLabel>

            <Grid container
                  spacing={2}
                  marginBottom="1rem"
                  marginTop="1rem"
            >
                {
                    options.map((option, index) => (
                        <Grid item
                              xs={12}
                              sm={6}
                              md={6}
                              key={index}
                        >
                            <StyledButton variant={selectedValue === option.value? 'contained' : 'outlined'}
                                          onClick={() => handleClick(option.value)}
                                          selected={selectedValue === option.value}
                                          fullWidth
                            >
                                {option.text}
                            </StyledButton>
                        </Grid>

                    ))
                }
            </Grid>
            <p style={{marginBottom: "0.7rem"}}>技能证书不直接产生分数，但在后续交叉项会有加分</p>
        </Paper>
    )
}
export default BeautifulCertification