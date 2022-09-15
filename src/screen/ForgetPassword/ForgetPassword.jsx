import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
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
                    fontSize: "21px",
                    marginBottom: 0.5,
                }}
            >
                Reset Password
            </Typography>
            <Typography
                paragraph
                className='action-text-color'
                sx={{
                    fontSize: "15px",
                    marginBottom: 3,
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
                    p: 5,
                    borderRadius: 1.5,
                }}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "#048060",
                        backgroundColor: "#cdf7ec",
                        border: "1px solid #b6f3e4",
                        borderRadius: 0.5,
                        p: "8px 16px",
                        marginBottom: 2.5,
                    }}
                >
                    {!send
                        ? "Enter your Email and instructions will be sent to you!"
                        : "Check your mail and reset your password."}
                </Typography>
                <InputField
                    id='email'
                    icon={EmailOutlinedIcon}
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
                        p: "8px 16px",
                        marginTop: 1.5,
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
                sx={{ fontSize: 15, marginTop: 4 }}
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
