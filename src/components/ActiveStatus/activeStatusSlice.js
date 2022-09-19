import { createSlice } from "@reduxjs/toolkit";

export const activeStatusSlice = createSlice({
    name: "activeStatus",
    initialState: { isActive: true },
    reducers: {
        activeStatusToggle: (state) => {
            state.isActive = !state.isActive;
        },
    },
});
export const { activeStatusToggle } = activeStatusSlice.actions;
export default activeStatusSlice.reducer;
