import React from "react";
import { Avatar, Box, Button } from "@mui/material";
const MenuItem = ({ value }) => {
    const [sended, setSended] = React.useState(false);

    const handleAddFriend = (e) => {
        setSended((prevState) => !prevState);
        if (e.target.innerText === "ADD FRIEND")
            e.target.classList.add("chatvia-action-btn");
        else e.target.classList.remove("chatvia-action-btn");
    };
    return (
        <Box
            sx={{
                my: "0.25rem",
                px: "0.75rem",
                py: "0.5rem",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ":hover": {
                    backgroundColor: "#f1f1f1",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    alt=''
                    src={value.avatar}
                    sx={{
                        mr: "0.75rem",
                    }}
                />
                {value.name}
            </Box>
            <Button
                onClick={handleAddFriend}
                sx={{
                    fontSize: "0.625rem",
                    py: "0.125rem",
                    color: "#7269ef",
                    border: "1px dashed #7269ef",
                    ":hover": {
                        backgroundColor: "inherit",
                    },
                }}
            >
                {!sended ? "Add friend" : "Cancel request"}
            </Button>
        </Box>
    );
};

export default React.memo(MenuItem);
