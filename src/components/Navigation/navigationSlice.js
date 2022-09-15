import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "navigation",
    initialState: { value: "Chats" },
    reducers: {
        navigationChange: (state, action) => {
            state.value = action.payload;
        },
    },
});
