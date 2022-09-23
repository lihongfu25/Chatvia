import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Typography } from "@mui/material";
import { ActiveStatus } from "../ActiveStatus";
import avatar from "../../assets/img/DSC_0036-1.jpg";
const Conversation = ({ name, senderId, lastest, time, seen = false }) => {
    const isActive = useSelector((state) => state.activeStatus.isActive);
    const userId = useSelector((state) => state.user.id);
    console.log(seen);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                p: 1.5,
                borderRadius: 1.5,
                cursor: "pointer",
                ":hover": {
                    backgroundColor: "#e6ebf5",
                },
            }}
        >
            <Avatar alt='' src={avatar} />
            {isActive && (
                <ActiveStatus
                    sx={{
                        top: 14,
                        left: -6,
                    }}
                ></ActiveStatus>
            )}
            <Box
                sx={{
                    ml: 2,
                    flexGrow: 1,
                    overflowX: "hidden",
                }}
            >
                <Typography
                    variant='h6'
                    className='primary-text-color'
                    sx={{
                        fontSize: 16,
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    paragraph
                    className={
                        !seen ? "secondary-text-color" : "action-text-color"
                    }
                    sx={{
                        fontSize: 14,
                        m: 0,
                        whiteSpace: "nowrap",
                    }}
                >
                    {senderId === userId ? "You: " : ""}
                    {lastest}
                </Typography>
            </Box>
            <Typography
                className='action-text-color'
                paragraph
                sx={{
                    ml: 1.5,
                    fontSize: 12,
                }}
            >
                {time}
            </Typography>
        </Box>
    );
};

export default React.memo(Conversation);
