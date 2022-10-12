import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Typography } from "@mui/material";
import { ActiveStatus } from "../../ActiveStatus";
import avatar from "../../../assets/img/DSC_0036-1.jpg";
const Conversation = ({ name, senderId, message, time, seen }) => {
    const isActive = useSelector((state) => state.activeStatus.isActive);
    const userId = useSelector((state) => state.user.id);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                p: "0.75rem",
                borderRadius: "0.75rem",
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
                        top: "0.875rem",
                        left: "-0.375rem",
                    }}
                ></ActiveStatus>
            )}
            <Box
                sx={{
                    ml: "1rem",
                    flexGrow: 1,
                    overflowX: "hidden",
                }}
            >
                <Typography
                    variant='h6'
                    className='primary-text-color'
                    sx={{
                        fontSize: "1rem",
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
                        fontSize: "0.875rem",
                        m: 0,
                        whiteSpace: "nowrap",
                    }}
                >
                    {senderId === userId ? "You: " : ""}
                    {message}
                </Typography>
            </Box>
            <Typography
                className='action-text-color'
                paragraph
                sx={{
                    ml: "0.75rem",
                    fontSize: "0.75rem",
                }}
            >
                {time}
            </Typography>
        </Box>
    );
};

export default React.memo(Conversation);
