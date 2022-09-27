import React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Conversation } from "./Conversation";
const Chats = () => {
    const [search, setSearch] = React.useState("");
    return (
        <>
            <Box sx={{ p: 3 }}>
                <Typography variant='h6' className='primary-text-color'>
                    Chats
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        p: "4px 12px",
                        borderRadius: 1.5,
                        marginTop: 2,
                    }}
                >
                    <SearchOutlinedIcon color='action' />
                    <InputBase
                        fullWidth
                        placeholder='Search messages or users'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            paddingLeft: 1.5,
                        }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    px: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Typography
                    variant='h6'
                    className='primary-text-color'
                    sx={{
                        fontSize: 16,
                        px: 1.5,
                    }}
                >
                    Recent
                </Typography>
                <Box className='chatvia-unScrollBar conversations'>
                    <Conversation
                        senderId='1'
                        seen
                        name={"Lê Hồng Phú"}
                        lastest={
                            "hé lô bạn hé lô bạn hé lô bạn hé lô bạn hé lô bạn"
                        }
                        time={"21:30"}
                    />
                    <Conversation
                        senderId='2'
                        name={"Lê Hồng Phú"}
                        lastest={"hé lô bạn"}
                        time={"21:30"}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Chats;
