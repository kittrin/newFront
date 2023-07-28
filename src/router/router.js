import MainPage from "../pages/MainPage/MainPage";
import AddApplication from "../pages/Application/AddApplication";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const router = [
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: '/application',
        element: <AddApplication/>
    },
    {
        path: "/auth/register",
        element: <RegisterPage/>
    },
    {
        path: "/auth/login",
        element: <LoginPage/>
    },
]