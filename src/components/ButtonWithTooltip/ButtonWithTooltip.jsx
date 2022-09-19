// import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { Paper, ButtonBase } from "@mui/material";
import { navigationChange } from "../Navigation/navigationSlice";

const ButtonWithTooltip = ({
    value,
    icon,
    className,
    placement = "top",
    sx,
}) => {
    const Icon = icon;
    const dispatch = useDispatch();

    const handleChangeNavigation = () => {
        dispatch(navigationChange(value));
    };
    return (
        <ButtonBase
            className={className}
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
