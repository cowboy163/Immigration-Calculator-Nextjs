import {Button} from "@mui/material";

const BeautifulButton = ({buttonType, handleClick, children, disabled}) => {
    return (
        <Button variant="contained"
                type={buttonType ? buttonType : "button"}
                onClick={
                    handleClick && handleClick
                }
                fullWidth={true}
                disabled={disabled}
        >
            {children}
        </Button>
    )
}
export default BeautifulButton