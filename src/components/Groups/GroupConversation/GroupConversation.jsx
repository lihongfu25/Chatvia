import React from "react";
import { Box, Typography } from "@mui/material";
const GroupConversation = ({ name }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                py: 1.5,
                px: 2,
                my: 1,
                borderRadius: 2,
                boxSizing: "border-box",
                ":hover": {
                    backgroundColor: "#e6ebf5",
                },
            }}
        >
            <Typography
                variant='h6'
                className='secondary-text-color'
                sx={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    fontSize: 18,
                    backgroundColor: "#d4d3f8",
                    mr: 2,
                }}
            >
                {name[0]}
            </Typography>
            <Typography
                variant='h6'
                className='primary-text-color'
                sx={{
                    whiteSpace: "nowrap",
                    maxWidth: 248,
                    overflowX: "hidden",
                    fontSize: 15,
                }}
            >
                #{name}
            </Typography>
        </Box>
    );
};

export default GroupConversation;
