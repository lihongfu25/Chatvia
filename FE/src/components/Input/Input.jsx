import React from "react";
import { styled } from "@mui/material/styles";
import { Box, InputBase } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { PrimaryButton } from "../PrimaryButton";

const StyledButton = styled(PrimaryButton)({
    padding: "0.125rem 1rem",
    textTransform: "none",
    boxShadow: "none",
});

const Input = ({ value = "", label, isEdit, onSubmit, setEditing }) => {
    const [openEditor, setOpenEditor] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(value);

    const iconEditRef = React.useRef();

    const handleOpenEditor = () => {
        iconEditRef.current.style.display = "none";
        setOpenEditor(true);
        setEditing((prevState) => {
            const newArr = prevState.filter(
                (element) => element.label !== label,
            );
            return [...newArr, { label, isEditing: !openEditor }];
        });
    };
    const handleSubmit = () => {
        iconEditRef.current.style.display = "inline-block";
        setOpenEditor(false);
        onSubmit(inputValue);
        setEditing((prevState) => {
            const newArr = prevState.filter(
                (element) => element.label !== label,
            );
            return [...newArr, { label, isEditing: !openEditor }];
        });
    };

    const handleClose = () => {
        iconEditRef.current.style.display = "inline-block";
        setOpenEditor(false);
        setEditing((prevState) => {
            const newArr = prevState.filter(
                (element) => element.label !== label,
            );
            return [...newArr, { label, isEditing: !openEditor }];
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                marginBottom: "0.75rem",
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
                        margin: "0.25rem 0 0",
                        lineHeight: "2rem",
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
            {isEdit && openEditor && (
                <>
                    <InputBase
                        className='primary-text-color'
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        sx={{
                            marginTop: "0.25rem",
                            backgroundColor: "#f1f1f1",
                            ".css-yz9k0d-MuiInputBase-input": {
                                paddingLeft: "0.75rem",
                            },
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "0.5rem",
                        }}
                    >
                        <StyledButton
                            onClick={handleSubmit}
                            sx={{
                                marginRight: "0.5rem",
                            }}
                        >
                            Save
                        </StyledButton>
                        <StyledButton onClick={handleClose}>
                            Cancel
                        </StyledButton>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default React.memo(Input);
