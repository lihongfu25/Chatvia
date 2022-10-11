import React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

function App() {
    const appRoutes = useRoutes(routes);
    const currentMode = useSelector((state) => state.mode.currentMode);
    return <div className={currentMode}>{appRoutes}</div>;
}

export default App;
