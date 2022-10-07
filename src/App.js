import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

function App() {
    const appRoutes = useRoutes(routes);
    return <div>{appRoutes}</div>;
}

export default App;
