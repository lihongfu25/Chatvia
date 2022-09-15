import { Box, InputBase } from "@mui/material";
import React from "react";

const InputField = ({ label, icon, handleChange, id, ...props }) => {
    const Icon = icon;
    return (
        <div style={{ marginBottom: "12px" }}>
            <label htmlFor={id} className='primary-text-color' style={{ fontWeight: 500 }}>
                {label}:
            </label>
            <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: 1, marginTop: 1 }}>
                <Icon color='action' sx={{ p: "8px 12px", backgroundColor: "#f1f1f1" }} />
                <InputBase
                    id={id}
                    {...props}
                    onChange={(e) => handleChange(e.target.value)}
                    sx={{ borderLeft: "1px solid #ccc", padding: "4px 12px" }}
                    fullWidth
                />
            </Box>
        </div>
    );
};

export default React.memo(InputField);
