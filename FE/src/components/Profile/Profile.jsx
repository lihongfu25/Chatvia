import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { styled } from "@mui/material/styles";
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
    Input as MuiInput,
    Button,
    IconButton,
    Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { ActiveStatus } from "../ActiveStatus";
import {
    activeStatusToggle,
    activeStatusChange,
} from "../ActiveStatus/activeStatusSlice";
import {
    userChangeName,
    userChangeEmail,
    userChangeAddress,
} from "../../redux/store/userSlice";
import { Input } from "../Input";
import Avatar from "../../assets/img/DSC_0036-1.jpg";

const getCurTime = () => {
    let today = new Date();

    const minute =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    let hour,
        desc = "AM";
    if (today.getHours() > 12) {
        hour = today.getHours() - 12;
        desc = "PM";
    } else hour = today.getHours();

    return (
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate() +
        " " +
        hour +
        ":" +
        minute +
        " " +
        desc
    );
};

const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: "1.75rem",
    height: "1rem",
    padding: 0,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: "0.9375rem",
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(0.5625rem)",
        },
    },
    "& .MuiSwitch-switchBase": {
        padding: "0.125rem",
        "&.Mui-checked": {
            transform: "translateX(0.75rem)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#177ddc" : "#7269ef",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 0.125rem 0.25rem 0 rgb(0 35 11 / 20%)",
        width: "0.75rem",
        height: "0.75rem",
        borderRadius: "0.375rem",
        transition: theme.transitions.create(["width"], {
            duration: 200,
        }),
    },
    "& .MuiSwitch-track": {
        borderRadius: "0.5rem",
        opacity: 1,
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,.35)"
                : "rgba(0,0,0,.25)",
        boxSizing: "border-box",
    },
}));
const StyledButton = styled(Button)({
    backgroundColor: "#7269ef",
    color: "#fff",
    ":hover": {
        backgroundColor: "rgba(114,105,239, 0.8)",
    },
    ":disabled": {
        backgroundColor: "rgba(114,105,239, 0.5)",
        color: "#fff",
    },
});

const Profile = () => {
    const isActive = useSelector((state) => state.activeStatus.isActive);
    const activeStatus = useSelector((state) => state.activeStatus.value);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showActiveStatus, setShowActiveStatus] = React.useState(isActive);
    const [edit, setEdit] = React.useState(false);
    const [expanded, setExpanded] = React.useState("about");
    const [customStatus, setCustomStatus] = React.useState(false);
    const [status, setStatus] = React.useState(activeStatus);
    const [curTime, setCurTime] = React.useState(getCurTime());
    const [editing, setEditing] = React.useState([
        {
            label: "Name",
            isEditing: false,
        },
        {
            label: "Email",
            isEditing: false,
        },
        {
            label: "Address",
            isEditing: false,
        },
    ]);

    React.useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurTime(getCurTime());
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    const statusRef = React.useRef();
    const saveChangeBtn = React.useRef();

    React.useEffect(() => {
        setStatus(activeStatus);
    }, [activeStatus]);

    React.useEffect(() => {
        statusRef.current?.firstChild.focus();
        const handleListenKeyPress = (e) => {
            if (e.key === "Enter") {
                dispatch(activeStatusChange(status));
                setCustomStatus(false);
            }
        };
        if (customStatus) {
            statusRef.current?.firstChild.addEventListener("blur", () => {
                setCustomStatus(false);
                setStatus(activeStatus);
            });
            window.addEventListener("keypress", handleListenKeyPress);
        }
        return () => {
            window.removeEventListener("keypress", handleListenKeyPress);
            statusRef.current?.firstChild.removeEventListener("blur", () => {
                setCustomStatus(false);
                setStatus(activeStatus);
            });
        };
    }, [customStatus, status]);
    const handleOpenEdit = () => {
        setEdit(true);
        setAnchorEl(null);
    };
    const handleCustomStatus = () => {
        setCustomStatus(true);
        setAnchorEl(null);
    };
    const handleChangeStatus = (e) => {
        setShowActiveStatus(e.target.checked);
        setAnchorEl(null);
        dispatch(activeStatusToggle());
    };
    const handleExpanded = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChangeName = (value) => {
        dispatch(userChangeName(value));
    };
    const handleChangeEmail = (value) => {
        dispatch(userChangeEmail(value));
    };
    const handleChangeAddress = (value) => {
        dispatch(userChangeAddress(value));
    };
    const handleComplatedEdit = () => {
        setEdit(false);
    };

    return (
        <>
            <Box
                sx={{
                    p: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                }}
            >
                <Typography variant='h6' className='primary-text-color'>
                    Profile
                </Typography>
                <Tooltip title='More'>
                    <IconButton
                        sx={{
                            p: 0,
                            color: "#7F8487",
                            ":hover": {
                                backgroundColor: "inherit",
                            },
                        }}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                        <BsThreeDotsVertical className='chatvia-icon-small' />
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    sx={{
                        left: -201,
                        ".css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                            {
                                minWidth: "13.75rem",
                            },
                        "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
                            fontSize: "1rem",
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
                        Active Status
                        <StyledSwitch
                            checked={showActiveStatus}
                            onChange={handleChangeStatus}
                        />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCustomStatus}>
                        Custom Status
                    </MenuItem>
                </Menu>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                }}
            >
                <Box
                    sx={{
                        "& img": {
                            width: "6.25rem",
                            height: "6.25rem",
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
                        marginTop: "0.5rem",
                    }}
                >
                    Lê Hồng Phú
                </Typography>
                <Box
                    className='primary-text-color'
                    sx={{
                        display: "flex",
                    }}
                >
                    {isActive && (
                        <ActiveStatus
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            sx={{
                                "& .css-dd6pjh-MuiBadge-badge": {
                                    left: "-1rem",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                },
                            }}
                        ></ActiveStatus>
                    )}
                    {customStatus === true ? (
                        <MuiInput
                            variant='standard'
                            color='secondary'
                            placeholder='Enter status'
                            ref={statusRef}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            sx={{
                                width: "10rem",
                                ".css-1x51dt5-MuiInputBase-input-MuiInput-input":
                                    {
                                        paddingLeft: "0.75rem",
                                    },
                            }}
                        />
                    ) : (
                        activeStatus
                    )}
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    p: "1.5rem",
                }}
            >
                <p
                    className='primary-text-color'
                    style={{
                        margin: "0 0 1.25rem",
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
                                fontSize: "0.9375rem",
                                display: "flex",
                            }}
                        >
                            <PersonRoundedIcon
                                fontSize='small'
                                sx={{
                                    marginRight: "0.5rem",
                                }}
                            />
                            About
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Input
                            label='Name'
                            isEdit={edit}
                            value={user.name}
                            onSubmit={handleChangeName}
                            setEditing={setEditing}
                        />
                        <Input
                            label='Email'
                            isEdit={edit}
                            value={user.email}
                            onSubmit={handleChangeEmail}
                            setEditing={setEditing}
                        />
                        <Input label='Time' value={curTime} />
                        <Input
                            label='Location'
                            isEdit={edit}
                            value={user.address}
                            onSubmit={handleChangeAddress}
                            setEditing={setEditing}
                        />
                        {edit !== false && (
                            <StyledButton
                                ref={saveChangeBtn}
                                disableElevation
                                onClick={handleComplatedEdit}
                                disabled={
                                    editing.filter(
                                        (element) => element.isEditing === true,
                                    ).length !== 0
                                }
                                sx={{
                                    padding: "0.125rem 1rem",
                                    textTransform: "none",
                                    marginLeft: "1.875rem",
                                }}
                            >
                                Save
                            </StyledButton>
                        )}
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
};

export default Profile;
