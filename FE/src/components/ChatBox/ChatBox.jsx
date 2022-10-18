import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
    Avatar,
    Box,
    Divider,
    Typography,
    IconButton,
    InputBase,
} from "@mui/material";
import {
    BsSearch,
    BsTelephoneFill,
    BsCameraVideoFill,
    BsPersonFill,
    BsThreeDots,
    BsEmojiSmile,
    BsFileImage,
} from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { Message } from "../Message";
import { ActiveStatus } from "../ActiveStatus";
import { PrimaryButton } from "../PrimaryButton";
import { ButtonWithTooltip } from "../ButtonWithTooltip";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendIcon from "@mui/icons-material/Send";
import avatar from "../../assets/img/DSC_0036-1.jpg";

const StyledInput = styled(InputBase)({
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderRadius: "0.125rem",
    "& .MuiInputBase-input": {
        padding: "0.5rem 0.75rem",
    },
});
const StyledIconButton = styled(IconButton)({
    margin: "0 0.25rem",
});

const StyledButton = styled(PrimaryButton)({
    color: "#7269ef",
    backgroundColor: "#fff",
    ":hover": {
        backgroundColor: "#f9f9f9",
    },
});

const StyledButtonTooltip = styled(ButtonWithTooltip)({
    padding: 0,
    margin: "0 0.5rem",
});

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
    const [picker, setPicker] = React.useState(false);

    React.useEffect(() => {
        const handleClosePicker = (e) => {
            const emojiContainer =
                e.target.closest(".chatvia-emoji") ||
                e.target.closest(".pick-emoji");
            if (!emojiContainer) setPicker(false);
        };
        if (picker) window.addEventListener("click", handleClosePicker);

        return () => {
            window.removeEventListener("click", handleClosePicker);
        };
    }, [picker]);

    const onEmojiClick = (e, emojiObject) => {
        setMessage((prev) => prev + emojiObject.emoji);
    };

    return (
        <Box
            className='chatvia-chatBox'
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
            }}
        >
            <Box
                sx={{
                    p: "1.5rem",
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
                        sx={{ width: "2.25rem", height: "2.25rem" }}
                    />
                    <Typography
                        className='primary-text-color'
                        paragraph
                        sx={{
                            margin: "0 0 0 1rem",
                            fontWeight: "500",
                        }}
                    >
                        Lê Hồng Phú
                    </Typography>
                    {isActive && (
                        <ActiveStatus
                            isRipple={true}
                            sx={{
                                marginLeft: "0.75rem",
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
                            className='chatvia-chatBox-search'
                            sx={{
                                display: "flex",
                                position: "absolute",
                                top: "5rem",
                                left: "1.25rem",
                                right: "1.25rem",
                                p: "0.5rem 0.75rem",
                                borderRadius: "0.25rem",
                                zIndex: 10,
                            }}
                        >
                            <StyledInput
                                className='primary-text-color'
                                autoFocus
                                placeholder='Search'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{
                                    marginRight: "0.5rem",
                                }}
                            />
                            <StyledButton>Find</StyledButton>
                            <StyledButton
                                onClick={() => {
                                    setOpenSearch(false);
                                    setSearch("");
                                }}
                            >
                                Close
                            </StyledButton>
                        </Box>
                    )}

                    <StyledIconButton
                        onClick={() => setOpenSearch((prev) => !prev)}
                    >
                        <BsSearch className='chatvia-icon-small action-text-color' />
                    </StyledIconButton>
                    <StyledIconButton>
                        <BsTelephoneFill className='chatvia-icon-small action-text-color' />
                    </StyledIconButton>
                    <StyledIconButton>
                        <BsCameraVideoFill className='chatvia-icon-small action-text-color' />
                    </StyledIconButton>
                    <StyledIconButton>
                        <BsPersonFill className='chatvia-icon-small action-text-color' />
                    </StyledIconButton>
                    <StyledIconButton>
                        <BsThreeDots className='chatvia-icon-small action-text-color' />
                    </StyledIconButton>
                </Box>
            </Box>
            <Divider className='chatvia-divider' />
            <Box className='chatvia-chatBox-content chatvia-unScrollBar'>
                {messages.map((message, i) => (
                    <Message
                        key={i}
                        message={message}
                        className={message.id % 2 === 0 ? "owner" : ""}
                    />
                ))}
            </Box>
            <Divider className='chatvia-divider' />
            <Box
                sx={{
                    p: "1.5rem",
                    display: "flex",
                }}
            >
                <StyledInput
                    className='chatvia-chatBox-input'
                    placeholder='Enter your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                        marginRight: "1.5rem",
                    }}
                />
                <StyledButtonTooltip
                    className='pick-emoji'
                    value='Emoji'
                    icon={BsEmojiSmile}
                    placement='top'
                    onClick={() => setPicker((prevState) => !prevState)}
                />
                {picker && (
                    <Box className='chatvia-emoji'>
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                    </Box>
                )}
                <StyledButtonTooltip
                    value='Files'
                    icon={AttachFileOutlinedIcon}
                    placement='top'
                />
                <StyledButtonTooltip
                    value='Images'
                    icon={BsFileImage}
                    placement='top'
                />
                <PrimaryButton
                    endIcon={<SendIcon />}
                    disableElevation
                    sx={{
                        marginLeft: "0.75rem",
                        minWidth: "6.25rem",
                    }}
                >
                    Send
                </PrimaryButton>
            </Box>
        </Box>
    );
};

export default ChatBox;
