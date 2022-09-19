import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice";
import navigationReducer from "../components/Navigation/navigationSlice";
import activeStatusReducer from "../components/ActiveStatus/activeStatusSlice";
const store = configureStore({
    reducer: {
        user: userSlice,
        navigation: navigationReducer,
        activeStatus: activeStatusReducer,
    },
});

export default store;
