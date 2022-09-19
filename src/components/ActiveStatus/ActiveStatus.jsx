import React from "react";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));
const ActiveStatus = ({
    children,
    isRipple = false,
    anchorOrigin = { vertical: "bottom", horizontal: "right" },
    sx,
    ...props
}) => {
    if (!isRipple)
        return (
            <StyledBadge
                variant='dot'
                overlap='circular'
                anchorOrigin={anchorOrigin}
                sx={sx}
                {...props}
            >
                {children}
            </StyledBadge>
        );
    else
        return (
            <StyledBadge
                sx={{
                    ...sx,
                    ".MuiBadge-badge::after": {
                        position: "absolute",
                        top: -1,
                        left: -1,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        animation: "ripple 1.2s infinite ease-in-out",
                        border: "1px solid currentColor",
                        content: '""',
                    },
                }}
                {...props}
            >
                {children}
            </StyledBadge>
        );
};

export default ActiveStatus;
