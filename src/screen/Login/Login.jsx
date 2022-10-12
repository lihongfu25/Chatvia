import React from "react";
import { Link } from "react-router-dom";
import {
    Typography,
    Box,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { BsPerson, BsLock } from "react-icons/bs";

import { InputField } from "../../components/InputField";

const Login = () => {
    document.title = "Login | Chatvia";
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
                Sign in
            </Typography>
            <Typography
                paragraph
                className='action-text-color'
                sx={{
                    fontSize: "0.9375rem",
                    marginBottom: "1.5rem",
                }}
            >
                Sign in to continue to Chatvia.
            </Typography>
            <Box
                component='form'
                sx={{
                    width: "inherit",
                    boxSizing: "border-box",
                    backgroundColor: "#fff",
                    p: 5,
                    borderRadius: "0.375rem",
                    position: "relative",
                }}
            >
                <InputField
                    id='username'
                    icon={BsPerson}
                    label='Username'
                    placeholder='Enter Email'
                    value={username}
                    handleChange={setUsername}
                />
                <InputField
                    id='password'
                    icon={BsLock}
                    label='Password'
                    placeholder='Enter Password'
                    value={password}
                    handleChange={setPassword}
                />
                <FormControlLabel
                    className='primary-text-color'
                    control={<Checkbox size='small' />}
                    label='Remember me'
                    fontSize='small'
                    sx={{
                        marginBottom: "0.625rem",
                        "& .css-ahj2mt-MuiTypography-root": {
                            fontSize: "0.9375rem",
                        },
                        "& .css-ptiqhd-MuiSvgIcon-root": {
                            fontSize: "1.125rem",
                        },
                    }}
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
                        backgroundColor: "#7269ef",
                        "&:hover": {
                            backgroundColor: "#6159cb",
                        },
                    }}
                >
                    Sign in
                </Button>
                <Link
                    to='/forget-password'
                    className='action-text-color chatvia-link'
                    style={{
                        fontSize: "0.875rem",
                        position: "absolute",
                        top: "7.8125rem",
                        right: "2.5rem",
                    }}
                >
                    Forgot password?
                </Link>
            </Box>
            <Typography
                className='primary-text-color'
                sx={{
                    fontSize: "0.9375rem",
                    marginTop: "2rem",
                }}
            >
                Don't have an account ?{" "}
                <Link
                    to='/register'
                    className='secondary-text-color chatvia-link'
                >
                    Signup now
                </Link>
            </Typography>
        </>
    );
};

export default Login;
