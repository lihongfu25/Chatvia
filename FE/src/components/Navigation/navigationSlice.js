import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: { currentTab: "Friends" },
    reducers: {
        navigationChange: (state, action) => {
            state.currentTab = action.payload;
        },
    },
});
export const { navigationChange } = navigationSlice.actions;
export default navigationSlice.reducer;
