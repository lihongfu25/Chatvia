import React from "react";
// import { useSelector } from "react-redux";
import { Avatar, Box, ButtonBase } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ButtonWithTooltip } from "../ButtonWithTooltip";
import avatar from "../../assets/img/DSC_0036-1.jpg";
const Navigation = () => {
    const navButtons = [
        {
            value: "Profile",
            icon: PersonOutlineOutlinedIcon,
        },
        {
            value: "Chats",
            icon: TextsmsOutlinedIcon,
        },
        {
            value: "Groups",
            icon: PeopleOutlinedIcon,
        },
        {
            value: "Contacts",
            icon: ConnectWithoutContactOutlinedIcon,
        },
        {
            value: "Settings",
            icon: SettingsOutlinedIcon,
        },
    ];

    return (
        <div className='chatvia-navBar'>
            <ButtonBase disableTouchRipple href='/'>
                <img
                    src='http://chatvia-dark.react.themesbrand.com/static/media/logo.e41f6087382055646c1c02d0a63583d5.svg'
                    alt='logo'
                    width={30}
                />
            </ButtonBase>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {navButtons.map((navButton, i) => (
                    <ButtonWithTooltip
                        key={i}
                        value={navButton.value}
                        icon={navButton.icon}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover":
                        {
                            backgroundColor: "#fff",
                        },
                }}
            >
                <ButtonWithTooltip
                    placement='right'
                    value='Dark/ Light Mode'
                    icon={DarkModeOutlinedIcon}
                    sx={{
                        marginBottom: 3,
                    }}
                />
                <ButtonBase disableRipple>
                    <Avatar
                        alt=''
                        src={avatar}
                        sx={{ width: 36, height: 36 }}
                    />
                </ButtonBase>
            </Box>
        </div>
    );
};

export default Navigation;
