import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import {
    Box,
    Typography,
    Tooltip,
    IconButton,
    InputBase,
    MenuItem,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ActiveStatus } from "../ActiveStatus";
import { PrimaryButton } from "../PrimaryButton";
import avatar from "../../assets/img/DSC_0036-1.jpg";
const StyledButton = styled(PrimaryButton)({
    color: "#7269ef",
    backgroundColor: "#fff",
    ":hover": {
        backgroundColor: "#f9f9f9",
    },
});

const StyledTextField = styled(TextField)({
    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ccc",
        borderWidth: 1,
    },
    ".MuiFormLabel-colorSecondary.Mui-focused": {
        color: "#495057",
    },
});
const friends = [
    {
        id: "1",
        name: "Lê Hồng Phú 1",
        email: "lehongphu6@gmail.com",
        avatar,
    },
    {
        id: "2",
        name: "Lê Hồng Phú 2",
        email: "lehongphu5@gmail.com",
        avatar,
    },
    {
        id: "3",
        name: "Lê Hồng Phú 3",
        email: "lehongphu4@gmail.com",
        avatar,
    },
    {
        id: "4",
        name: "Lê Hồng Phú 4",
        email: "lehongphu3@gmail.com",
        avatar,
    },
    {
        id: "5",
        name: "Lê Hồng Phú 5",
        email: "lehongphu2@gmail.com",
        avatar,
    },
    {
        id: "6",
        name: "Lê Hồng Phú 6",
        email: "lehongphu1@gmail.com",
        avatar,
    },
];
const Friends = () => {
    const [openAddFriend, setOpenAddFriend] = React.useState(false);
    const [searchFriend, setSearchFriend] = React.useState("");
    const [searchPerson, setSearchPerson] = React.useState("");

    const handleClose = () => {
        setOpenAddFriend(false);
    };
    return (
        <>
            <Box
                sx={{
                    p: 3,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant='h6' className='primary-text-color'>
                        Friends
                    </Typography>
                    <Tooltip title='Add friends'>
                        <IconButton
                            sx={{
                                p: 0,
                                color: "#7F8487",
                                ":hover": {
                                    backgroundColor: "#fff",
                                },
                            }}
                            onClick={() => setOpenAddFriend(true)}
                        >
                            <BsPersonPlusFill />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Dialog
                    open={openAddFriend}
                    onClose={handleClose}
                    sx={{
                        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                            width: 480,
                        },
                    }}
                >
                    <DialogTitle>Add friends</DialogTitle>
                    <DialogContent>
                        <StyledTextField
                            id='name'
                            color='secondary'
                            label='Search friends'
                            placeholder='Enter name or email'
                            size='small'
                            margin='normal'
                            fullWidth
                            value={searchPerson}
                            onChange={(e) => setSearchPerson(e.target.value)}
                        />
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                border: "1px solid #ccc",
                                borderRadius: 1,
                                height: 200,
                                overflowY: "scroll",
                                animation: "fadeIn 0.5s  ease-in-out",
                                "@keyframes fadeIn": {
                                    "0%": {
                                        opacity: 0,
                                    },
                                    "100%": {
                                        opacity: 1,
                                    },
                                },
                            }}
                        >
                            {friends
                                .filter(
                                    (friend) =>
                                        friend.name
                                            .toLowerCase()
                                            .includes(
                                                searchPerson.toLowerCase(),
                                            ) ||
                                        friend.email
                                            .toLowerCase()
                                            .includes(
                                                searchPerson.toLowerCase(),
                                            ),
                                )
                                .map((friend) => (
                                    <MenuItem
                                        key={friend.id}
                                        sx={{
                                            my: 0.5,
                                            py: 1,
                                            borderRadius: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Avatar
                                                alt=''
                                                src={friend.avatar}
                                                sx={{
                                                    mr: 1.5,
                                                }}
                                            />
                                            {friend.name}
                                        </Box>
                                        <IconButton
                                            size='small'
                                            sx={{
                                                p: 0,
                                                ml: 1.5,
                                                color: "#7F8487",
                                                ":hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                        >
                                            <BsPersonPlusFill />
                                        </IconButton>
                                    </MenuItem>
                                ))}
                        </Box>
                    </DialogContent>
                    <DialogActions
                        sx={{
                            px: 2,
                        }}
                    >
                        <StyledButton onClick={handleClose}>Close</StyledButton>
                    </DialogActions>
                </Dialog>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        borderRadius: 1.5,
                        p: "4px 12px",
                        mt: 2,
                    }}
                >
                    <SearchOutlinedIcon color='action' />
                    <InputBase
                        fullWidth
                        placeholder='Search friends...'
                        value={searchFriend}
                        onChange={(e) => setSearchFriend(e.target.value)}
                        sx={{
                            paddingLeft: 1.5,
                        }}
                    />
                </Box>
            </Box>
            <Box
                className='chatvia-unScrollBar'
                sx={{
                    mx: 3,
                    flexGrow: 1,
                    overflowY: "scroll",
                }}
            >
                {friends
                    .filter((friend) =>
                        friend.name
                            .toLowerCase()
                            .includes(searchFriend.toLowerCase()),
                    )
                    .map((friend) => (
                        <MenuItem
                            key={friend.id}
                            sx={{
                                my: 0.5,
                                py: 1.5,
                                borderRadius: 2,
                            }}
                        >
                            <ActiveStatus
                                sx={{
                                    mr: 1.5,
                                }}
                            >
                                <Avatar alt='' src={friend.avatar} />
                            </ActiveStatus>
                            {friend.name}
                        </MenuItem>
                    ))}
            </Box>
        </>
    );
};

export default Friends;
