import { createSlice } from "@reduxjs/toolkit";

export const activeStatusSlice = createSlice({
    name: "activeStatus",
    initialState: { isActive: true, value: "Active" },
    reducers: {
        activeStatusToggle: (state) => {
            state.isActive = !state.isActive;
        },
        activeStatusChange: (state, action) => {
            state.value = action.payload;
        },
    },
});
export const { activeStatusToggle, activeStatusChange } =
    activeStatusSlice.actions;
export default activeStatusSlice.reducer;
