import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const renderRadioGroup = ({input, meta, ...rest}) => (
    <FormControl component="fieldset" error={meta.touched && meta.error}>
        <FormLabel component="legend">
            Education
        </FormLabel>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel control={<Radio/>}
                              label="高中以下"
                              value="高中以下"
            />
            <FormControlLabel control={<Radio/>}
                              label="高中"
                              value="高中"
            />
            <FormControlLabel control={<Radio/>}
                              label="1年大专"
                              value="1年大专"
            />
            <FormControlLabel control={<Radio/>}
                              label="2年大专"
                              value="2年大专"
            />
            <FormControlLabel control={<Radio/>}
                              label="3年以上大专或本科"
                              value="3年以上大专或本科"
            />
            <FormControlLabel control={<Radio/>}
                              label="双专业（3+1年以上）"
                              value="双专业（3+1年以上）"
            />
            <FormControlLabel control={<Radio/>}
                              label="硕士学位或专业学位"
                              value="硕士学位或专业学位"
            />
            <FormControlLabel control={<Radio/>}
                              label="博士学位"
                              value="博士学位"
            />
        </RadioGroup>
    </FormControl>
)
export default renderRadioGroup