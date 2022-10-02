import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
    Avatar,
    Box,
    Divider,
    Typography,
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
import { Message } from "../Message";
import { ActiveStatus } from "../ActiveStatus";
import { PrimaryButton } from "../PrimaryButton";
import SendIcon from "@mui/icons-material/Send";
import avatar from "../../assets/img/DSC_0036-1.jpg";

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

const messages = [
    {
        id: 1,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "hello",
                time: "20:00",
            },
            {
                desc: "hello helo",
                time: "20:00",
            },
        ],
    },
    {
        id: 2,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "Hello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello Hello",
                time: "Thứ sáu 20:00",
            },
        ],
    },
    {
        id: 3,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "hello",
                time: "20:00",
            },
            {
                desc: "hello helo",
                time: "20:00",
            },
        ],
    },
    {
        id: 4,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "Hello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello Hello",
                time: "Thứ sáu 20:00",
            },
        ],
    },
    {
        id: 5,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "hello",
                time: "20:00",
            },
            {
                desc: "hello helo",
                time: "20:00",
            },
        ],
    },
    {
        id: 6,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "Hello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello Hello",
                time: "Thứ sáu 20:00",
            },
        ],
    },
    {
        id: 7,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "hello",
                time: "20:00",
            },
            {
                desc: "hello helo",
                time: "20:00",
            },
        ],
    },
    {
        id: 8,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "Hello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello Hello",
                time: "Thứ sáu 20:00",
            },
        ],
    },
    {
        id: 9,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "Hello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello Hello",
                time: "Thứ sáu 20:00",
            },
        ],
    },
    {
        id: 10,
        photoURL:
            "https://1hot.vn/wp-content/uploads/2020/10/phong-canh-dep-nhat-the-gioi-4.jpg",
        content: [
            {
                desc: "hello",
                time: "20:00",
            },
            {
                desc: "hello helo",
                time: "20:00",
            },
        ],
    },
];

const ChatBox = () => {
    const isActive = useSelector((state) => state.activeStatus.isActive);

    const [openSearch, setOpenSearch] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [message, setMessage] = React.useState("");

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
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
                    {isActive && (
                        <ActiveStatus
                            isRipple={true}
                            sx={{
                                marginLeft: 1.5,
                            }}
                            variant='dot'
                        ></ActiveStatus>
                    )}
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
                                placeholder='Search'
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
            <Box className='chatvia-chatBox-content chatvia-unScrollBar'>
                {messages.map((message, i) => (
                    <Message
                        key={i}
                        message={message}
                        className={message.id % 2 === 0 ? "owner" : ""}
                    />
                ))}
            </Box>
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
                <PrimaryButton
                    variant='contained'
                    endIcon={<SendIcon />}
                    disableElevation
                    sx={{
                        marginLeft: 1.5,
                        minWidth: 100,
                    }}
                >
                    Send
                </PrimaryButton>
            </Box>
        </Box>
    );
};

export default ChatBox;
