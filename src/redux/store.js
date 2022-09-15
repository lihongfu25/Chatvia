import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice";
import navigationSlice from "../components/Navigation/navigationSlice";
export const store = configureStore({
    reducer: { user: userSlice, navigation: navigationSlice },
});
