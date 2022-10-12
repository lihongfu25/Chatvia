import React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Conversation } from "./Conversation";

const conversations = [
    {
        id: "2",
        name: "Lê Hồng Phú 2",
        senderId: "1",
        message: "hé lô bạn hé lô bạn hé lô bạn hé lô bạn hé lô bạn",
        time: "21:30",
        seen: true,
    },
    {
        id: "3",
        name: "Lê Hồng Phú 3",
        senderId: "3",
        message: "hé lô bạn",
        time: "21:30",
        seen: false,
    },
];

const Chats = () => {
    const [search, setSearch] = React.useState("");
    return (
        <>
            <Box sx={{ p: "1.5rem" }}>
                <Typography variant='h6' className='primary-text-color'>
                    Chats
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        p: "0.25rem 0.75rem",
                        borderRadius: "0.375rem",
                        marginTop: "1rem",
                    }}
                >
                    <SearchOutlinedIcon color='action' />
                    <InputBase
                        fullWidth
                        placeholder='Search messages or users'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            paddingLeft: "0.75rem",
                        }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    px: "0.75rem",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Typography
                    variant='h6'
                    className='primary-text-color'
                    sx={{
                        fontSize: "1rem",
                        px: "0.75rem",
                    }}
                >
                    Recent
                </Typography>
                <Box className='chatvia-unScrollBar conversations'>
                    {conversations
                        .filter((group) =>
                            group.name
                                .toLowerCase()
                                .includes(search.toLowerCase()),
                        )
                        .map((conversation) => (
                            <Conversation
                                key={conversation.id}
                                name={conversation.name}
                                senderId={conversation.senderId}
                                message={conversation.message}
                                time={conversation.time}
                                seen={conversation.seen}
                            />
                        ))}
                </Box>
            </Box>
        </>
    );
};

export default Chats;
