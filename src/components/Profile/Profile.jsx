import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
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
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 15,
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(9px)",
        },
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            transform: "translateX(12px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#177ddc" : "#7269ef",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(["width"], {
            duration: 200,
        }),
    },
    "& .MuiSwitch-track": {
        borderRadius: 16 / 2,
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
        statusRef.current?.click();

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
        };
    }, [customStatus, status, dispatch]);

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
    const getEditStatus = (value) => {
        if (value) {
            saveChangeBtn.current.disabled = true;
            saveChangeBtn.current.classList.add("chatvia-disabled-PriBtn");
        } else {
            saveChangeBtn.current.disabled = false;
            saveChangeBtn.current.classList.remove("chatvia-disabled-PriBtn");
        }
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
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                }}
            >
                <Typography variant='h6' className='primary-text-color'>
                    Profile
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
                        left: -201,
                        ".css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                            {
                                minWidth: "220px",
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
                                    left: -16,
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
                                width: 160,
                                ".css-1x51dt5-MuiInputBase-input-MuiInput-input":
                                    {
                                        paddingLeft: 1.5,
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
                        <Input
                            label='Name'
                            isEdit={edit}
                            value={user.name}
                            onSubmit={handleChangeName}
                            getEditStatus={getEditStatus}
                        />
                        <Input
                            label='Email'
                            isEdit={edit}
                            value={user.email}
                            onSubmit={handleChangeEmail}
                            getEditStatus={getEditStatus}
                        />
                        <Input label='Time' value={curTime} />
                        <Input
                            label='Location'
                            isEdit={edit}
                            value={user.address}
                            onSubmit={handleChangeAddress}
                            getEditStatus={getEditStatus}
                        />
                        {edit && (
                            <StyledButton
                                ref={saveChangeBtn}
                                disableElevation
                                onClick={handleComplatedEdit}
                                sx={{
                                    padding: "2px 16px",
                                    textTransform: "none",
                                    marginLeft: 29,
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
