import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userSlice";
import navigationReducer from "../components/Navigation/navigationSlice";
import activeStatusReducer from "../components/ActiveStatus/activeStatusSlice";
import chatBoxReducer from "../components/ChatBox/chatBoxSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        navigation: navigationReducer,
        activeStatus: activeStatusReducer,
        chatBox: chatBoxReducer,
    },
});

export default store;
