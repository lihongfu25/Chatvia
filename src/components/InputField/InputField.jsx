import { Box, InputBase } from "@mui/material";
import React from "react";

const InputField = ({ label, icon, handleChange, id, ...props }) => {
    const Icon = icon;
    return (
        <div style={{ marginBottom: "1.5rem" }}>
            <label
                htmlFor={id}
                className='primary-text-color'
                style={{ fontWeight: 500 }}
            >
                {label}:
            </label>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    marginTop: "0.5rem",
                }}
            >
                <Box
                    sx={{
                        p: "0.5rem 0.75rem",
                        backgroundColor: "#f1f1f1",
                    }}
                >
                    <Icon className='primary-text-color' />
                </Box>
                <InputBase
                    id={id}
                    {...props}
                    onChange={(e) => handleChange(e.target.value)}
                    sx={{
                        borderLeft: "1px solid #ccc",
                        padding: "0.25rem 0.75rem",
                    }}
                    fullWidth
                />
            </Box>
        </div>
    );
};

export default React.memo(InputField);
