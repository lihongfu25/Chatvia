import React from "react";
import { Box, Typography, InputBase } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { GroupConversation } from "./GroupConversation";

const Groups = () => {
    const [search, setSearch] = React.useState("");

    return (
        <Box
            sx={{
                p: 3,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography className='primary-text-color'>Groups</Typography>
                <GroupAddOutlinedIcon
                    sx={{
                        color: "#7F8487",
                        cursor: "pointer",
                    }}
                />
            </Box>
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
                    placeholder='Search groups...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        paddingLeft: 1.5,
                    }}
                />
            </Box>
            <Box
                sx={{
                    mt: 3,
                }}
            >
                <GroupConversation name='hello' />
                <GroupConversation name='General' />
                <GroupConversation name='Designer' />
            </Box>
        </Box>
    );
};

export default Groups;
