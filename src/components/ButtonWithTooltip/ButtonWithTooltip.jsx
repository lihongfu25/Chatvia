import React from "react";
import { Paper, ButtonBase } from "@mui/material";

const ButtonWithTooltip = ({
    value,
    icon,
    className,
    placement = "right",
    sx,
    onClick,
}) => {
    const Icon = icon;
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
            onClick={onClick}
        >
            <Icon className='chatvia-icon-medium' />
            <Paper
                className={`tooltip placement-${placement}`}
                elevation={1}
                sx={{
                    fontFamily: "Roboto",
                    zIndex: 100,
                }}
            >
                {value}
            </Paper>
        </ButtonBase>
    );
};

export default React.memo(ButtonWithTooltip);
