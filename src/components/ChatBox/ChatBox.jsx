import React from "react";
import { styled } from "@mui/material/styles";
import {
    Avatar,
    Box,
    Divider,
    Typography,
    Badge,
    IconButton,
    Button,
    InputBase,
    Tooltip,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import SendIcon from "@mui/icons-material/Send";
import avatar from "../../assets/img/DSC_0036-1.jpg";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: -1,
            left: -1,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const StyledInput = styled(InputBase)({
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderRadius: 0.5,
    "& .MuiInputBase-input": {
        padding: "8px 12px",
    },
});

const funcBtns = [
    {
        value: "Emoji",
        icon: <SentimentSatisfiedOutlinedIcon />,
    },
    {
        value: "Attached File",
        icon: <AttachFileOutlinedIcon />,
    },
    {
        value: "Images",
        icon: <PhotoSizeSelectActualOutlinedIcon />,
    },
];
const ChatBox = () => {
    const [openSearch, setOpenSearch] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [message, setMessage] = React.useState("");

    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        src={avatar}
                        alt=''
                        sx={{ width: 36, height: 36 }}
                    />
                    <Typography
                        className='primary-text-color'
                        paragraph
                        sx={{
                            margin: "0 0 0 16px",
                            fontWeight: "500",
                        }}
                    >
                        Lê Hồng Phú
                    </Typography>
                    <StyledBadge
                        overlap='circular'
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        sx={{
                            marginLeft: 1.5,
                        }}
                        variant='dot'
                    ></StyledBadge>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    {openSearch && (
                        <Box
                            sx={{
                                display: "flex",
                                position: "absolute",
                                top: 80,
                                left: 20,
                                right: 20,
                                p: "8px 12px",
                                boxShadow: "0 1px 3px 1px #eaeaea",
                                borderRadius: 1,
                                backgroundColor: "#fff",
                                zIndex: 10,
                            }}
                        >
                            <StyledInput
                                autoFocus
                                placeholder='Enter your keyword'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{
                                    backgroundColor: "#f9f9f9",
                                    marginRight: 1,
                                }}
                            />
                            <Button>Find</Button>
                            <Button onClick={() => setOpenSearch(false)}>
                                Close
                            </Button>
                        </Box>
                    )}

                    <IconButton onClick={() => setOpenSearch((prev) => !prev)}>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <VideocamOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <Box
                className='conversation'
                sx={{
                    flexGrow: 1,
                    overflowY: "scroll",
                }}
            ></Box>
            <Divider />
            <Box
                sx={{
                    p: 3,
                    display: "flex",
                }}
            >
                <StyledInput
                    placeholder='Enter your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                        marginRight: 3,
                    }}
                />
                {funcBtns.map((funcBtn) => (
                    <Tooltip
                        title={funcBtn.value}
                        placement='top'
                        key={funcBtn.value}
                    >
                        <IconButton
                            disableRipple
                            sx={{
                                margin: "0 5px",
                            }}
                        >
                            {funcBtn.icon}
                        </IconButton>
                    </Tooltip>
                ))}
                <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    disableElevation
                    sx={{
                        marginLeft: 1.5,
                        minWidth: 100,
                    }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBox;
