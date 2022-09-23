import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userSlice";
import navigationReducer from "../components/Navigation/navigationSlice";
import activeStatusReducer from "../components/ActiveStatus/activeStatusSlice";
import chatBoxReducer from "../components/ChatBox/chatBoxSlice";
import modeReducer from "../redux/store/modeSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        navigation: navigationReducer,
        activeStatus: activeStatusReducer,
        chatBox: chatBoxReducer,
        mode: modeReducer,
    },
});

export default store;
