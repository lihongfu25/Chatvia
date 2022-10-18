import { createSlice } from "@reduxjs/toolkit";

export const chatBoxSlice = createSlice({
    name: "chatBox",
    initialState: { currentChatBoxId: 0 },
    reducers: {
        chatBoxChange: (state, action) => {
            state.currentChatBoxId = action.payload;
        },
    },
});
export const { chatBoxChange } = chatBoxSlice.actions;
export default chatBoxSlice.reducer;
