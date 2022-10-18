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
                fontSize: "1.875rem",
                p: "0.75rem",
                margin: "0.25rem 0",
                borderRadius: "0.75rem",
                position: "relative",
                "&:hover .tooltip": {
                    display: "block",
                },
                ...sx,
            }}
            onClick={onClick}
        >
            <Icon className='chatvia-icon-medium action-text-color' />
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
