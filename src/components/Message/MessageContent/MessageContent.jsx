import React from "react";
import { styled } from "@mui/material/styles";
import {
    Box,
    Menu,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Typography,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const StyledTypography = styled(Typography)({
    margin: 0,
    padding: "4px 16px ",
    minWidth: 80,
    ":hover": {
        backgroundColor: "#f1f1f1",
    },
});

const MessageContent = ({ content, time }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDeleteForm, setOpenDeleteForm] = React.useState(false);

    const handleOpenDeleteForm = () => {
        setOpenDeleteForm(true);
    };

    const handleCloseDeleteForm = () => {
        setOpenDeleteForm(false);
        setAnchorEl(null);
    };
    return (
        <Box
            className='row'
            sx={{
                "& p": {
                    margin: 0,
                },
            }}
        >
            <p>
                {content}
                <span className='message-time'>{time}</span>
            </p>

            <MoreVertOutlinedIcon
                className='message-option action-text-color'
                onClick={(e) => setAnchorEl(e.currentTarget)}
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                sx={{
                    "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
                        fontSize: "14px",
                    },
                }}
            >
                <StyledTypography paragraph onClick={handleOpenDeleteForm}>
                    Delete
                </StyledTypography>
                <StyledTypography paragraph onClick={() => setAnchorEl(null)}>
                    Forward
                </StyledTypography>
            </Menu>
            <Dialog
                open={openDeleteForm}
                onClose={handleCloseDeleteForm}
                sx={{
                    maxWidth: 400,
                    margin: "auto",
                }}
            >
                <DialogTitle>Delete this message?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This action cannot be undone, are you sure you want to
                        delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteForm}>Agree</Button>
                    <Button onClick={handleCloseDeleteForm}>Disagree</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MessageContent;
