import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
                    fontSize: "21px",
                    marginBottom: 0.5,
                }}
            >
                Sign up
            </Typography>
            <Typography
                paragraph
                className='action-text-color'
                sx={{
                    fontSize: "15px",
                    marginBottom: 3,
                }}
            >
                Get your Chatvia account now.
            </Typography>
            <Box component='form' sx={{ width: "inherit", boxSizing: "border-box", backgroundColor: "#fff", p: 5, borderRadius: 1.5 }}>
                <InputField id='email' icon={EmailOutlinedIcon} label='Email' placeholder='Enter Email' value={email} handleChange={setEmail} />
                <InputField id='name' icon={PersonOutlineOutlinedIcon} label='Your Name' placeholder='Enter Your Name' value={name} handleChange={setName} />
                <InputField id='password' icon={LockOutlinedIcon} label='Password' placeholder='Enter Password' value={password} handleChange={setPassword} />
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
                    Sign up
                </Button>
                <Typography className='action-text-color' sx={{ fontSize: 15, marginTop: 2.5 }}>
                    By registering you agree to the Chatvia{" "}
                    <Link to='/register' className='secondary-text-color chatvia-link'>
                        Terms of Use
                    </Link>
                </Typography>
            </Box>
            <Typography className='primary-text-color' sx={{ fontSize: 15, marginTop: 4 }}>
                Already have an account ?{" "}
                <Link to='/login' className='secondary-text-color chatvia-link'>
                    Signin
                </Link>
            </Typography>
        </>
    );
};

export default Register;
