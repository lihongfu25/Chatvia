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
                my: 0.5,
                px: 1.5,
                py: 1,
                borderRadius: 2,
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
                        mr: 1.5,
                    }}
                />
                {value.name}
            </Box>
            <Button
                onClick={handleAddFriend}
                sx={{
                    fontSize: 10,
                    py: 0.25,
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

export default MenuItem;
