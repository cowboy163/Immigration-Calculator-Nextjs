import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const CustomDialog = ({control, content, handleClose}) => {
    return(
        <Dialog open={control}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"信息"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    确认
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default CustomDialog