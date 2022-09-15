import React from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { TextInput } from "./components/TextInput";
import { Login } from "./screen/Login";
import { LoginLogoutLayout } from "./layout/LoginLogout";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
function App() {
    const appRoutes = useRoutes(routes);
    return <div>{appRoutes}</div>;
}

export default App;
