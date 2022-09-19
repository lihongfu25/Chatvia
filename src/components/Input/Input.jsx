import React from "react";
import { styled } from "@mui/material/styles";
import { Box, InputBase, Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const StyledButton = styled(Button)({
    padding: "2px 16px",
    textTransform: "none",
    boxShadow: "none",
});

const Input = ({ value = "Lê Hồng Phú", label, isEdit }) => {
    const [openEditor, setOpenEditor] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(value);

    const iconEditRef = React.useRef();

    const handleOpenEditor = () => {
        iconEditRef.current.style.display = "none";
        setOpenEditor(true);
    };

    const handleSubmit = () => {
        iconEditRef.current.style.display = "inline-block";
        setOpenEditor(false);
    };

    const handleClose = () => {
        iconEditRef.current.style.display = "inline-block";
        setOpenEditor(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <label className='action-text-color' htmlFor={label}>
                {label}
            </label>
            {!openEditor && (
                <p
                    className='primary-text-color'
                    id={label}
                    style={{
                        margin: "4px 0 0",
                        lineHeight: "32px",
                    }}
                >
                    {inputValue}
                </p>
            )}
            {isEdit && (
                <EditOutlinedIcon
                    ref={iconEditRef}
                    onClick={handleOpenEditor}
                    sx={{
                        position: "absolute",
                        top: "45%",
                        right: 0,
                        cursor: "pointer",
                    }}
                />
            )}
            {openEditor && (
                <>
                    <InputBase
                        className='primary-text-color'
                        autoFocus
                        defaultValue={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        sx={{
                            marginTop: 0.5,
                            backgroundColor: "#f1f1f1",
                            ".css-yz9k0d-MuiInputBase-input": {
                                paddingLeft: 1.5,
                            },
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 1,
                        }}
                    >
                        <StyledButton
                            variant='contained'
                            onClick={handleSubmit}
                            sx={{
                                marginRight: 1,
                            }}
                        >
                            Save
                        </StyledButton>
                        <StyledButton variant='contained' onClick={handleClose}>
                            Cancel
                        </StyledButton>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Input;
