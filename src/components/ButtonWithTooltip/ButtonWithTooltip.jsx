// import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { Paper, ButtonBase } from "@mui/material";
import navigationSlice from "../Navigation/navigationSlice";

const ButtonWithTooltip = ({ value, icon, placement = "top", sx }) => {
    const Icon = icon;
    const dispatch = useDispatch();

    const handleChangeNavigation = () => {
        console.log(value);
        dispatch(navigationSlice.actions.navigationChange(value));
    };
    return (
        <ButtonBase
            sx={{
                fontSize: 30,
                p: 1.5,
                margin: "4px 0",
                borderRadius: 3,
                position: "relative",
                "&:hover .tooltip": {
                    display: "block",
                },
                ...sx,
            }}
            onClick={handleChangeNavigation}
        >
            <Icon
                fontSize='inherit'
                sx={{
                    color: "#878a92",
                }}
            />
            <Paper
                className={`tooltip placement-${placement}`}
                elevation={1}
                sx={{
                    fontFamily: "Roboto",
                }}
            >
                {value}
            </Paper>
        </ButtonBase>
    );
};

export default ButtonWithTooltip;
