import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Box,
    Typography,
    Menu,
    MenuItem,
    Divider,
    Switch,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { ActiveStatus } from "../ActiveStatus";
import { activeStatusToggle } from "../ActiveStatus/activeStatusSlice";
import { Input } from "../Input";
import Avatar from "../../assets/img/DSC_0036-1.jpg";
const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [actionState, setActionState] = React.useState(true);
    const [edit, setEdit] = React.useState(false);
    const [expanded, setExpanded] = React.useState("about");
    // const [customState, setCustomState] = React.useState("");

    const isActive = useSelector((state) => state.activeStatus.isActive);

    const dispatch = useDispatch();

    const handleOpenEdit = () => {
        setEdit(true);
        setAnchorEl(null);
    };
    const handleChangeStatus = (e) => {
        setActionState(e.target.checked);
        setAnchorEl(null);
        dispatch(activeStatusToggle());
    };

    const handleExpanded = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    p: 3,
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
                    <MenuItem onClick={handleOpenEdit}>Edit Profile</MenuItem>
                    <MenuItem
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        Active State
                        <Switch
                            checked={actionState}
                            onChange={handleChangeStatus}
                        />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => setAnchorEl(null)}>
                        Custom State
                    </MenuItem>
                </Menu>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 3,
                }}
            >
                <Box
                    sx={{
                        "& img": {
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                        },
                    }}
                >
                    <img alt='' src={Avatar} />
                </Box>
                <Typography
                    variant='h6'
                    className='primary-text-color'
                    sx={{
                        marginTop: 1,
                    }}
                >
                    Lê Hồng Phú
                </Typography>
                {isActive && (
                    <ActiveStatus
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        sx={{
                            "& .css-dd6pjh-MuiBadge-badge": {
                                left: -16,
                                top: "50%",
                                transform: "translateY(-50%)",
                            },
                        }}
                    >
                        Active
                    </ActiveStatus>
                )}
            </Box>
            <Divider />
            <Box
                sx={{
                    p: 3,
                }}
            >
                <p
                    className='primary-text-color'
                    style={{
                        margin: "0 0 20px",
                    }}
                >
                    This is simply a pseudocode, in fact you can change it
                    easily depending on your intended use. I hope this notice
                    can make it easy for you to use.
                </p>
                <Accordion
                    expanded={expanded === "about"}
                    onChange={handleExpanded("about")}
                    className='primary-text-color'
                    sx={{
                        boxShadow: "0 0 2px 1px #f0f0f0",
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                            sx={{
                                fontSize: 15,
                                display: "flex",
                            }}
                        >
                            <PersonOutlineOutlinedIcon
                                fontSize='small'
                                sx={{
                                    marginRight: 1,
                                }}
                            />
                            About
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Input label='Name' isEdit={edit} />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default Profile;
