import { MainLayout } from "../layout/MainLayout";
import { LoginLogoutLayout } from "../layout/LoginLogout";
import { Login } from "../screen/Login";
import { Register } from "../screen/Register";
import { ForgetPassword } from "../screen/ForgetPassword";

export const routes = [
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
    {
        path: "/login",
        element: (
            <LoginLogoutLayout>
                <Login />
            </LoginLogoutLayout>
        ),
    },
    {
        path: "/register",
        element: (
            <LoginLogoutLayout>
                <Register />
            </LoginLogoutLayout>
        ),
    },
    {
        path: "/forget-password",
        element: (
            <LoginLogoutLayout>
                <ForgetPassword />
            </LoginLogoutLayout>
        ),
    },
];
