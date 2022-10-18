import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
    backgroundColor: "#7269ef",
    color: "#fff",
    ":hover": {
        backgroundColor: "rgba(114,105,239, 0.8)",
    },
});

const PrimaryButton = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default React.memo(PrimaryButton);
