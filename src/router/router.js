import MainPage from "../pages/MainPage/MainPage";
import AddApplication from "../pages/Application/AddApplication";

export const router = [
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: '/application',
        element: <AddApplication/>
    }
]