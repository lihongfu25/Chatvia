import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    Box,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import { ActiveStatus } from "../../ActiveStatus";

const FriendItem = ({ value }) => {
    const isActive = useSelector((state) => state.activeStatus.isActive);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            key={value.id}
            sx={{
                my: "0.25rem",
                py: "0.75rem",
                pl: "0.75rem",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ":hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.02);",
                },
            }}
        >
            <Box>
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
                onClose={handleCloseMenu}
                sx={{
                    ".css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                        {
                            width: "10rem",
                        },
                }}
            >
                <MenuItem
                    onClick={handleCloseMenu}
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
                                fontSize: "0.9rem",
                            },
                        }}
                    >
                        Unfriend
                    </ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleCloseMenu}
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
                                fontSize: "0.9rem",
                            },
                        }}
                    >
                        Block
                    </ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default FriendItem;
