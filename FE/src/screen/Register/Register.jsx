import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import { BsEnvelope, BsPerson, BsLock } from "react-icons/bs";
import { InputField } from "../../components/InputField";

const Register = () => {
    document.title = "Register | Chatvia";

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
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
                Sign up
            </Typography>
            <Typography
                paragraph
                className='action-text-color'
                sx={{
                    fontSize: "0.9375rem",
                    marginBottom: "1.5rem",
                }}
            >
                Get your Chatvia account now.
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
                <InputField
                    id='email'
                    icon={BsEnvelope}
                    label='Email'
                    placeholder='Enter Email'
                    value={email}
                    handleChange={setEmail}
                />
                <InputField
                    id='name'
                    icon={BsPerson}
                    label='Your Name'
                    placeholder='Enter Your Name'
                    value={name}
                    handleChange={setName}
                />
                <InputField
                    id='password'
                    icon={BsLock}
                    label='Password'
                    placeholder='Enter Password'
                    value={password}
                    handleChange={setPassword}
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
                    Sign up
                </Button>

                <Typography
                    className='action-text-color'
                    sx={{ fontSize: "0.9375rem", marginTop: "1.25rem" }}
                >
                    By registering you agree to the Chatvia{" "}
                    <Link
                        to='/register'
                        className='secondary-text-color chatvia-link'
                    >
                        Terms of Use
                    </Link>
                </Typography>
            </Box>
            <Typography
                className='primary-text-color'
                sx={{ fontSize: "0.9375rem", marginTop: "2rem" }}
            >
                Already have an account ?{" "}
                <Link to='/login' className='secondary-text-color chatvia-link'>
                    Signin
                </Link>
            </Typography>
        </>
    );
};

export default Register;
