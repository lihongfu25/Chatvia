import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: "mode",
    initialState: { currentMode: "light" },
    reducers: {
        modeChange: (state) => {
            if (state.currentMode === "light") state.currentMode = "dark";
            else state.currentMode = "light";
        },
    },
});
export const { modeChange } = modeSlice.actions;
export default modeSlice.reducer;
