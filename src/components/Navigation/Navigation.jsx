import React from "react";
import {
    BsPersonFill,
    BsChatSquareTextFill,
    BsPeopleFill,
    BsPersonLinesFill,
    BsGearFill,
    BsMoonStarsFill,
    BsSunFill,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Box, ButtonBase } from "@mui/material";
import { ButtonWithTooltip } from "../ButtonWithTooltip";
import { navigationChange } from "../Navigation/navigationSlice";
import { modeChange } from "../../redux/store/modeSlice";
import avatar from "../../assets/img/DSC_0036-1.jpg";

const navButtons = [
    {
        value: "Profile",
        icon: BsPersonFill,
    },
    {
        value: "Chats",
        icon: BsChatSquareTextFill,
    },
    {
        value: "Groups",
        icon: BsPeopleFill,
    },
    {
        value: "Friends",
        icon: BsPersonLinesFill,
    },
    {
        value: "Settings",
        icon: BsGearFill,
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
                    icon={currentMode === "light" ? BsMoonStarsFill : BsSunFill}
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
