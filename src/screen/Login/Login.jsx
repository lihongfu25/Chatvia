import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button, FormControlLabel, Checkbox } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
                    fontSize: "21px",
                    marginBottom: 0.5,
                }}
            >
                Sign in
            </Typography>
            <Typography
                paragraph
                className='action-text-color'
                sx={{
                    fontSize: "15px",
                    marginBottom: 3,
                }}
            >
                Sign in to continue to Chatvia.
            </Typography>
            <Box component='form' sx={{ width: "inherit", boxSizing: "border-box", backgroundColor: "#fff", p: 5, borderRadius: 1.5, position: "relative" }}>
                <InputField
                    id='username'
                    icon={PersonOutlineOutlinedIcon}
                    label='Username'
                    placeholder='Enter Email'
                    value={username}
                    handleChange={setUsername}
                />
                <InputField id='password' icon={LockOutlinedIcon} label='Password' placeholder='Enter Password' value={password} handleChange={setPassword} />
                <FormControlLabel
                    className='primary-text-color'
                    control={<Checkbox size='small' />}
                    label='Remember me'
                    fontSize='small'
                    sx={{
                        marginBottom: "10px",
                        "& .css-ahj2mt-MuiTypography-root": {
                            fontSize: 15,
                        },
                        "& .css-ptiqhd-MuiSvgIcon-root": {
                            fontSize: 18,
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
                        p: "8px 16px",
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
                        fontSize: 14,
                        position: "absolute",
                        top: 125,
                        right: 40,
                    }}
                >
                    Forgot password?
                </Link>
            </Box>
            <Typography className='primary-text-color' sx={{ fontSize: 15, marginTop: 4 }}>
                Don't have an account ?{" "}
                <Link to='/register' className='secondary-text-color chatvia-link'>
                    Signup now
                </Link>
            </Typography>
        </>
    );
};

export default Login;
