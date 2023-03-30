import {FormControl, FormHelperText, Input, InputLabel} from "@mui/material";

const renderTextField = ({
                             input,
                             label,
                             placeholder,
                             meta: {touched, error},
                             ...custom
                         }) => (
    <FormControl fullWidth error={touched && error}>
        <InputLabel>{label}</InputLabel>
        <Input {...input} {...custom}/>
        {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
)

export default renderTextField