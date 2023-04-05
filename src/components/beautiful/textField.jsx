import {InputAdornment, TextField} from "@mui/material";
import {forwardRef} from "react";

const BeautifulTextField = forwardRef(({name, value, handleChange, placeholder, inputAdornment, error, helperText, register, required}, ref) => {
    return(
        <TextField
            name={name}
            hiddenLabel={true}
            type="text"
            value={value}
            onChange={handleChange}
            InputProps={{
                style: {
                    background: '#f5f5f5',
                    height: '2.2rem',
                    borderRadius: "0.3rem",
                },
                endAdornment: <InputAdornment position="end">{inputAdornment && inputAdornment}</InputAdornment>,
                inputProps: required && {
                    ...register(name, {required: required})
                }
            }}
            // inputRef={ref}
            placeholder={placeholder}
            fullWidth={true}
            margin="dense"
            error={error && error}
            helperText={helperText && helperText}
        />
    )
})
export default BeautifulTextField