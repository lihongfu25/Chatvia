import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import { BsEnvelope } from "react-icons/bs";
import { InputField } from "../../components/InputField";

const ForgetPassword = () => {
    document.title = "Forget-password | Chatvia";
    const [email, setEmail] = React.useState("");
    const [send, setSend] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSend(true);
    };
    return (
        <>
            <Typography
                variant='h6'
                className='primary-text-color'
                sx={{
                    fontSize: "1.3125rem",
                    marginBottom: "0.25rem",
                }}
            >
                Reset Password
            </Typography>
            <Typography
                paragraph
                className='action-text-color'
                sx={{
                    fontSize: "0.9375rem",
                    marginBottom: "1.5rem",
                }}
            >
                Reset Password With Chatvia.
            </Typography>
            <Box
                component='form'
                sx={{
                    width: "inherit",
                    boxSizing: "border-box",
                    backgroundColor: "#fff",
                    p: "2.5rem",
                    borderRadius: "0.375rem",
                }}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "#048060",
                        backgroundColor: "#cdf7ec",
                        border: "1px solid #b6f3e4",
                        borderRadius: "0.125rem",
                        p: "0.5rem 1rem",
                        marginBottom: "1.25rem",
                    }}
                >
                    {!send
                        ? "Enter your Email and instructions will be sent to you!"
                        : "Check your mail and reset your password."}
                </Typography>
                <InputField
                    id='email'
                    icon={BsEnvelope}
                    label='Email'
                    placeholder='Enter Email'
                    value={email}
                    handleChange={setEmail}
                />
                <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disableElevation
                    onClick={handleSubmit}
                    sx={{
                        p: "0.5rem 1rem",
                        marginTop: "0.75rem",
                        backgroundColor: "#7269ef",
                        "&:hover": {
                            backgroundColor: "#6159cb",
                        },
                    }}
                >
                    Reset
                </Button>
            </Box>
            <Typography
                className='primary-text-color'
                sx={{ fontSize: "0.9375rem", marginTop: "2rem" }}
            >
                Remember It ?{" "}
                <Link to='/login' className='secondary-text-color chatvia-link'>
                    Signin
                </Link>
            </Typography>
        </>
    );
};

export default ForgetPassword;
