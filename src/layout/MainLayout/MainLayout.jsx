import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Navigation } from "../../components/Navigation";
import { Profile } from "../../components/Profile";
import { Chats } from "../../components/Chats";
import { Groups } from "../../components/Groups";
import { Friends } from "../../components/Friends";
import { Settings } from "../../components/Settings";

import { ChatBox } from "../../components/ChatBox";

const MainLayout = () => {
    const currentTab = useSelector((state) => state.navigation.currentTab);
    return (
        <Box className='chatvia-container primary-bg-color'>
            <Navigation />
            <Box className='chatvia-navBar-infor'>
                {currentTab === "Profile" && <Profile />}
                {currentTab === "Chats" && <Chats />}
                {currentTab === "Groups" && <Groups />}
                {currentTab === "Friends" && <Friends />}
                {currentTab === "Settings" && <Settings />}
            </Box>
            <ChatBox />
        </Box>
    );
};

export default MainLayout;
