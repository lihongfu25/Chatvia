import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: "1",
        name: "Lê Hồng Phú",
        email: "lehongphudhcnhn@gmail.com",
        address: "Hà Nội, VN",
    },
    reducers: {
        userChangeName: (state, action) => {
            state.name = action.payload;
        },
        userChangeEmail: (state, action) => {
            state.email = action.payload;
        },
        userChangeAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});
export const { userChangeName, userChangeEmail, userChangeAddress } =
    userSlice.actions;
export default userSlice.reducer;
