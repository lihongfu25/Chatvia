import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "user",
    initialState: "",
    reducers: {
        tokenChange: (state, action) => {
            state = action.payload;
        },
    },
});
