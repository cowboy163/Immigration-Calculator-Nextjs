import {InputAdornment, TextField} from "@mui/material";

const BeautifulTextField = ({value, handleChange, placeholder, inputAdornment}) => {
    return(
        <TextField
            hiddenLabel={true}
            type="text"
            value={value}
            onChange={handleChange}
            InputProps={{
                style: {
                    background: '#f5f5f5',
                    height: '2.2rem',
                    padding: "0.2rem 0.5rem",
                    borderRadius: "0.3rem",
                },
                disableUnderline: true,
                endAdornment: <InputAdornment position="end">{inputAdornment && inputAdornment}</InputAdornment>,
            }}
            placeholder={placeholder}
            fullWidth={true}
            margin="dense"
            variant="standard"
        />
    )
}
export default BeautifulTextField