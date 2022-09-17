import React from "react";
import {
    Box,
    Typography,
    Menu,
    MenuItem,
    Divider,
    Switch,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [actionState, setActionState] = React.useState(true);
    // const [customState, setCustomState] = React.useState("");

    const handleChange = (e) => {
        setActionState(e.target.checked);
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant='h6' className='primary-text-color'>
                    My Profile
                </Typography>
                <MoreVertOutlinedIcon
                    fontSize='small'
                    className='primary-text-color'
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{
                        cursor: "pointer",
                    }}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    sx={{
                        left: "-181px",
                        ".css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                            {
                                minWidth: "200px",
                            },
                        "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
                            fontSize: "16px",
                        },
                    }}
                >
                    <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
                    <MenuItem
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        Action State
                        <Switch checked={actionState} onChange={handleChange} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => setAnchorEl(null)}>
                        Custom State
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default Profile;
