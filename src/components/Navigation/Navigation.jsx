import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Box, ButtonBase } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ButtonWithTooltip } from "../ButtonWithTooltip";
import { navigationChange } from "../Navigation/navigationSlice";
import { modeChange } from "../../redux/store/modeSlice";
import avatar from "../../assets/img/DSC_0036-1.jpg";

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
        value: "Friends",
        icon: ConnectWithoutContactOutlinedIcon,
    },
    {
        value: "Settings",
        icon: SettingsOutlinedIcon,
    },
];

const Navigation = () => {
    const currentTab = useSelector((state) => state.navigation.currentTab);
    const currentMode = useSelector((state) => state.mode.currentMode);

    const dispatch = useDispatch();

    const handleChangeNavBar = (value) => {
        dispatch(navigationChange(value));
    };
    const handleChangeMode = () => {
        dispatch(modeChange());
    };

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
                        className={
                            currentTab === navButton.value
                                ? "chatvia-navBar-currentTab"
                                : ""
                        }
                        value={navButton.value}
                        icon={navButton.icon}
                        onClick={() => handleChangeNavBar(navButton.value)}
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
                    value='Dark/ Light Mode'
                    icon={
                        currentMode === "light"
                            ? DarkModeOutlinedIcon
                            : LightModeOutlinedIcon
                    }
                    onClick={handleChangeMode}
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
