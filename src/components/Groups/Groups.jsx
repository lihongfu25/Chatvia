import React from "react";
import { styled } from "@mui/material/styles";
import {
    Box,
    Typography,
    InputBase,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    MenuItem,
    Avatar,
} from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { GroupConversation } from "./GroupConversation";
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

const groups = [
    {
        id: "1",
        name: "HTML, CSS",
    },

    {
        id: "2",
        name: "Javascrips",
    },
    {
        id: "3",
        name: "ReactJS",
    },
    {
        id: "4",
        name: "PHP",
    },
];

const Groups = () => {
    const [searchGroup, setSearchGroup] = React.useState("");
    const [openCreateGroup, setOpenCreateGroup] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");
    const [members, setMembers] = React.useState([]);
    const [memberFilter, setMemberFilter] = React.useState("");

    const searchMemberRef = React.useRef();

    const handleClose = () => {
        setOpenCreateGroup(false);
        setGroupName("");
        setMembers([]);
        setMemberFilter("");
    };

    const handleAddMembers = (value) => {
        setMembers((prevState) => [...prevState, value]);
        setMemberFilter("");
        searchMemberRef.current.firstChild.focus();
    };

    const handleRemoveMembers = (value) => {
        setMembers((prevState) =>
            prevState.filter((member) => member.id !== value.id),
        );
        searchMemberRef.current.firstChild.focus();
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
                    onClick={() => {
                        setOpenCreateGroup(true);
                    }}
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
                    <StyledTextField
                        id='name'
                        color='secondary'
                        label='Group Name'
                        size='small'
                        margin='normal'
                        fullWidth
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                    <Box
                        onClick={() =>
                            searchMemberRef.current.firstChild.focus()
                        }
                        sx={{
                            py: "7px",
                            px: "14px",
                            border: "1px solid #ccc",
                            borderRadius: 1,
                            my: 1,
                        }}
                    >
                        <Typography
                            className='action-text-color'
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
                                .filter(
                                    (contact) =>
                                        !members
                                            .map((member) => member.id)
                                            .includes(contact.id) &&
                                        contact.name
                                            .toLowerCase()
                                            .includes(
                                                memberFilter.toLowerCase(),
                                            ),
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
                <DialogActions
                    sx={{
                        px: 2,
                    }}
                >
                    <StyledButton onClick={handleClose}>Cancel</StyledButton>
                    <StyledButton onClick={handleClose}>
                        Create Group
                    </StyledButton>
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
                    value={searchGroup}
                    onChange={(e) => setSearchGroup(e.target.value)}
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
                {groups
                    .filter((group) =>
                        group.name
                            .toLowerCase()
                            .includes(searchGroup.toLowerCase()),
                    )
                    .map((group) => (
                        <GroupConversation key={group.id} name={group.name} />
                    ))}
            </Box>
        </Box>
    );
};

export default Groups;
