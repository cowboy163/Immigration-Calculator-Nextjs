import {Alert, AlertTitle} from "@mui/material";

const BeautifulError = ({text}) => {
    return (
        <Alert
            severity="error"
        >
            <AlertTitle>{text}</AlertTitle>
        </Alert>
        )
}
export default BeautifulError