import {Grid, InputLabel, Paper} from "@mui/material";
import {StyledButton} from "@/views/beautiful/step2/education/education";
import {useDispatch, useSelector} from "react-redux";
import {changeEducation} from "@/features/beautifulSlice/step4Slice";

const options = [
    {
        text: "我有学制3年以上的加拿大学历，或者加拿大的硕士、博士学历",
        value: "0",
    },
    {
        text: "我有学制1-2年的加拿大学历",
        value: "1",
    },
    {
        text: "没有上述学历",
        value: "2",
    },
]

const BeautifulEducation = () => {
    const dispatch = useDispatch()
    const selectedValue = useSelector(state => state.beautifulStep4.education)
    const handleClick = value => {
        dispatch(changeEducation(value))
    }

    return(
        <Paper elevation={3}
               style={{padding: "1rem", margin: "1rem 0"}}
        >
            <InputLabel style={{color: "#1975d1", marginBottom: "0.1rem"}}>
                加拿大学历
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
                              sm={12}
                              md={12}
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
        </Paper>
    )
}
export default BeautifulEducation