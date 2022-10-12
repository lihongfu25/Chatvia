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
    Tooltip,
} from "@mui/material";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
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

const friends = [
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
        <>
            <Box
                sx={{
                    p: "1.5rem",
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
                        Groups
                    </Typography>
                    <Tooltip title='Create group'>
                        <GroupRoundedIcon
                            onClick={() => {
                                setOpenCreateGroup(true);
                            }}
                            sx={{
                                color: "#7F8487",
                                cursor: "pointer",
                            }}
                        />
                    </Tooltip>
                </Box>
                <Dialog
                    open={openCreateGroup}
                    onClose={handleClose}
                    sx={{
                        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                            width: "30rem",
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
                                py: "0.4375rem",
                                px: "0.875rem",
                                border: "1px solid #ccc",
                                borderRadius: "0.25rem",
                                my: "0.5rem",
                            }}
                        >
                            <Typography
                                className='action-text-color'
                                sx={{
                                    pr: "0.75rem",
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
                                        py: "0.25rem",
                                        px: "0.5rem",
                                        backgroundColor:
                                            "rgba(114,105,239, 0.3)",
                                        color: "#7269ef",
                                        borderRadius: "0.25rem",
                                        mr: "0.75rem",
                                        my: "0.125rem",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {member.name}
                                    <CloseIcon
                                        fontSize='small'
                                        onClick={() =>
                                            handleRemoveMembers(member)
                                        }
                                        sx={{
                                            ml: "0.5rem",
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
                                onChange={(e) =>
                                    setMemberFilter(e.target.value)
                                }
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
                                borderRadius: "0.25rem",
                                height: "10rem",
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
                                friends
                                    .filter(
                                        (friend) =>
                                            !members
                                                .map((member) => member.id)
                                                .includes(friend.id) &&
                                            friend.name
                                                .toLowerCase()
                                                .includes(
                                                    memberFilter.toLowerCase(),
                                                ),
                                    )
                                    .map((friend) => (
                                        <MenuItem
                                            key={friend.id}
                                            onClick={() =>
                                                handleAddMembers(friend)
                                            }
                                        >
                                            <Avatar
                                                alt=''
                                                src={friend.avatar}
                                                sx={{
                                                    width: "2rem",
                                                    height: "2rem",
                                                    mr: "0.5rem",
                                                }}
                                            />
                                            {friend.name}
                                        </MenuItem>
                                    ))
                            )}
                        </Box>
                    </DialogContent>
                    <DialogActions
                        sx={{
                            px: "1rem",
                        }}
                    >
                        <StyledButton onClick={handleClose}>
                            Cancel
                        </StyledButton>
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
                        borderRadius: "0.375rem",
                        p: "0.25rem 0.75rem",
                        mt: "1rem",
                    }}
                >
                    <SearchOutlinedIcon color='action' />
                    <InputBase
                        fullWidth
                        placeholder='Search groups...'
                        value={searchGroup}
                        onChange={(e) => setSearchGroup(e.target.value)}
                        sx={{
                            paddingLeft: "0.75rem",
                        }}
                    />
                </Box>
            </Box>

            <Box
                className='chatvia-unScrollBar'
                sx={{
                    mx: "1.5rem",
                    flexGrow: 1,
                    overflowY: "scroll",
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
        </>
    );
};

export default Groups;
