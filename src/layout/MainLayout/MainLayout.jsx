import React from "react";
import { Box } from "@mui/material";
import { Navigation } from "../../components/Navigation";
import { Profile } from "../../components/Profile";
import { ChatBox } from "../../components/ChatBox";

const MainLayout = () => {
    return (
        <Box className='chatvia-container primary-bg-color'>
            <Navigation />
            <Box className='chatvia-navBar-infor'>
                <Profile />
            </Box>
            <ChatBox />
        </Box>
    );
};

export default MainLayout;
