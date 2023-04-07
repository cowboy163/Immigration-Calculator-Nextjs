import {InputAdornment, TextField} from "@mui/material";

const BeautifulTextField =({name, value, handleChange, placeholder, inputAdornment, error, helperText, inputProps}) => {
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
                inputProps: inputProps && inputProps,
            }}
            placeholder={placeholder}
            fullWidth={true}
            margin="dense"
            error={error && error}
            helperText={helperText && helperText}
        />
    )
}
export default BeautifulTextField