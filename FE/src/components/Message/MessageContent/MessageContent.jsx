import React from "react";
import {
    Box,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
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
                    ".css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                        {
                            width: "10rem",
                        },
                }}
            >
                <MenuItem
                    onClick={() => setAnchorEl(null)}
                    className='primary-text-color'
                >
                    <ListItemIcon
                        sx={{
                            "& svg": {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        <ContentCopyRoundedIcon size='small' />
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            "& span": {
                                fontSize: "0.875rem",
                            },
                        }}
                    >
                        Copy
                    </ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleOpenDeleteForm}
                    className='primary-text-color'
                >
                    <ListItemIcon
                        sx={{
                            "& svg": {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        <DeleteRoundedIcon size='small' />
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            "& span": {
                                fontSize: "0.875rem",
                            },
                        }}
                    >
                        Delete
                    </ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchorEl(null)}
                    className='primary-text-color'
                >
                    <ListItemIcon
                        sx={{
                            "& svg": {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        <ForwardRoundedIcon size='small' />
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            "& span": {
                                fontSize: "0.875rem",
                            },
                        }}
                    >
                        Forward
                    </ListItemText>
                </MenuItem>
            </Menu>
            <Dialog
                open={openDeleteForm}
                onClose={handleCloseDeleteForm}
                sx={{
                    maxWidth: "30rem",
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

export default React.memo(MessageContent);
