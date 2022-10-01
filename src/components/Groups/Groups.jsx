import React from "react";
import {
    Box,
    Typography,
    InputBase,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    MenuItem,
    Avatar,
} from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { GroupConversation } from "./GroupConversation";
import avatar from "../../assets/img/DSC_0036-1.jpg";

const contacts = [
    {
        id: "1",
        name: "Lê Hồng Phú 1",
        avatar,
    },
    {
        id: "2",
        name: "Lê Hồng Phú 2",
        avatar,
    },
    {
        id: "3",
        name: "Lê Hồng Phú 3",
        avatar,
    },
    {
        id: "4",
        name: "Lê Hồng Phú 4",
        avatar,
    },
    {
        id: "5",
        name: "Lê Hồng Phú 5",
        avatar,
    },
    {
        id: "6",
        name: "Lê Hồng Phú 6",
        avatar,
    },
];

const Groups = () => {
    const [search, setSearch] = React.useState("");
    const [openCreateGroup, setOpenCreateGroup] = React.useState(true);
    const [groupName, setGroupName] = React.useState("");
    const [members, setMembers] = React.useState([]);
    const [memberFilter, setMemberFilter] = React.useState("");

    const searchMemberRef = React.useRef();

    const handleClose = () => {
        setOpenCreateGroup(false);
    };

    const handleAddMembers = (value) => {
        setMembers((prevState) => [...prevState, value]);
        setMemberFilter("");
        searchMemberRef.current.focus();
    };
    const handleRemoveMembers = (value) => {
        setMembers((prevState) =>
            prevState.filter((member) => member.id !== value.id),
        );
        searchMemberRef.current.focus();
    };

    return (
        <Box
            sx={{
                p: 3,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography className='primary-text-color'>Groups</Typography>
                <GroupAddOutlinedIcon
                    onClick={() => setOpenCreateGroup(true)}
                    sx={{
                        color: "#7F8487",
                        cursor: "pointer",
                    }}
                />
            </Box>
            <Dialog
                open={openCreateGroup}
                onClose={handleClose}
                sx={{
                    ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                        width: 480,
                    },
                }}
            >
                <DialogTitle>Create New Group</DialogTitle>
                <DialogContent>
                    <TextField
                        size='small'
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        margin='normal'
                        id='name'
                        label='Group Name'
                        fullWidth
                    />
                    <Box
                        className='action-text-color'
                        sx={{
                            py: "7px",
                            px: "14px",
                            border: "1px solid #ccc",
                            borderRadius: 1,
                            my: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                pr: 1.5,
                                display: "inline-block",
                            }}
                        >
                            To:
                        </Typography>
                        {members.map((member) => (
                            <Typography
                                key={member.id}
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    py: 0.5,
                                    px: 1,
                                    backgroundColor: "rgba(114,105,239, 0.3)",
                                    color: "#7269ef",
                                    borderRadius: 1,
                                    mr: 1,
                                    my: 0.25,
                                    fontSize: 14,
                                }}
                            >
                                {member.name}
                                <CloseIcon
                                    fontSize='small'
                                    onClick={() => handleRemoveMembers(member)}
                                    sx={{
                                        ml: 1,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        ":hover": {
                                            backgroundColor:
                                                "rgba(114,105,239, 0.2)",
                                        },
                                    }}
                                />
                            </Typography>
                        ))}
                        <InputBase
                            ref={searchMemberRef}
                            autoFocus
                            value={memberFilter}
                            onChange={(e) => setMemberFilter(e.target.value)}
                            sx={{
                                ".css-yz9k0d-MuiInputBase-input": {
                                    padding: 0,
                                },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: 1,
                            height: 150,
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
                        {memberFilter === "" ? (
                            <Typography
                                className='primary-text-color'
                                sx={{
                                    mt: 1,
                                    textAlign: "center",
                                }}
                            >
                                Gợi ý cho bạn
                            </Typography>
                        ) : (
                            contacts
                                .filter((contact) =>
                                    contact.name
                                        .toLowerCase()
                                        .includes(memberFilter),
                                )
                                .map((contact) => (
                                    <MenuItem
                                        key={contact.id}
                                        onClick={() =>
                                            handleAddMembers(contact)
                                        }
                                    >
                                        <Avatar
                                            alt=''
                                            src={contact.avatar}
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                mr: 1,
                                            }}
                                        />
                                        {contact.name}
                                    </MenuItem>
                                ))
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Create Group</Button>
                </DialogActions>
            </Dialog>
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "#fff",
                    alignItems: "center",
                    p: "4px 12px",
                    borderRadius: 1.5,
                    marginTop: 2,
                }}
            >
                <SearchOutlinedIcon color='action' />
                <InputBase
                    fullWidth
                    placeholder='Search groups...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        paddingLeft: 1.5,
                    }}
                />
            </Box>
            <Box
                sx={{
                    mt: 3,
                }}
            >
                <GroupConversation name='hello' />
                <GroupConversation name='General' />
                <GroupConversation name='Designer' />
            </Box>
        </Box>
    );
};

export default Groups;
