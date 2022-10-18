import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import {
    Box,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import { ActiveStatus } from "../../ActiveStatus";
import { PrimaryButton } from "../../PrimaryButton";

const StyledButton = styled(PrimaryButton)({
    color: "#7269ef",
    backgroundColor: "#fff",
    ":hover": {
        backgroundColor: "#f9f9f9",
    },
});

const FriendItem = ({ value }) => {
    const isActive = useSelector((state) => state.activeStatus.isActive);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogTitle, setDialogTitle] = React.useState("");

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpenDialog = (e) => {
        if (e.target.innerText === "Unfriend")
            setDialogTitle("Unfriend this person?");
        else setDialogTitle("Block this person?");
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setAnchorEl(null);
    };
    return (
        <Box
            key={value.id}
            sx={{
                my: "0.25rem",
                py: "0.75rem",
                pl: "0.75rem",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ":hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.02);",
                },
            }}
        >
            <Box className='primary-text-color'>
                {isActive ? (
                    <ActiveStatus
                        sx={{
                            mr: "0.75rem",
                        }}
                    >
                        <Avatar alt='' src={value.avatar} />
                    </ActiveStatus>
                ) : (
                    <Avatar
                        alt=''
                        src={value.avatar}
                        sx={{
                            mr: "0.75rem",
                        }}
                    />
                )}
                {value.name}
            </Box>
            <IconButton
                className='primary-text-color'
                size='small'
                onClick={handleOpenMenu}
                sx={{
                    ":hover": {
                        backgroundColor: "rgba(0, 0,0 , 0.0)",
                    },
                }}
            >
                <BsThreeDotsVertical />
            </IconButton>
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
                    onClick={handleOpenDialog}
                    className='primary-text-color'
                >
                    <ListItemIcon
                        sx={{
                            "& svg": {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        <PersonRemoveRoundedIcon size='small' />
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            "& span": {
                                fontSize: "0.875rem",
                            },
                        }}
                    >
                        Unfriend
                    </ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleOpenDialog}
                    className='primary-text-color'
                >
                    <ListItemIcon
                        sx={{
                            "& svg": {
                                fontSize: "1.25rem",
                            },
                        }}
                    >
                        <BlockRoundedIcon size='small' />
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            "& span": {
                                fontSize: "0.875rem",
                            },
                        }}
                    >
                        Block
                    </ListItemText>
                </MenuItem>
            </Menu>
            <Dialog
                sx={{
                    maxWidth: "30rem",
                    margin: "auto",
                }}
                open={openDialog}
                onClose={() => setOpenDialog(false)}
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    This action cannot be undone, are you sure you want to
                    continue?
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={handleCloseDialog}>
                        Agree
                    </StyledButton>
                    <StyledButton onClick={handleCloseDialog}>
                        Cancel
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default React.memo(FriendItem);
