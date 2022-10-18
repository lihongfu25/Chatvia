import React from "react";
import { Box, Typography } from "@mui/material";
const GroupConversation = ({ name }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                py: "0.75rem",
                px: "1rem",
                my: "0.5rem",
                borderRadius: "0.5rem",
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
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    fontSize: "1.125rem",
                    backgroundColor: "#d4d3f8",
                    mr: "1rem",
                }}
            >
                {name[0]}
            </Typography>
            <Typography
                variant='h6'
                className='primary-text-color'
                sx={{
                    whiteSpace: "nowrap",
                    maxWidth: "15.5rem",
                    overflowX: "hidden",
                    fontSize: "0.9375rem",
                }}
            >
                #{name}
            </Typography>
        </Box>
    );
};

export default React.memo(GroupConversation);
