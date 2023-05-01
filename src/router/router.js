import { Navigate } from "react-router-dom";
import Login from "../page/public/login/Login";
import * as Layouts from "../core/layout-config/index";
import Page404 from "../page/public/404/Page404";
import * as Private from '../page/private'

export const publicRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Navigate to="/login" replace />,
    },
]

export const privateRoutes = [
    {
        path: "/profile",
        element: (
            <Layouts.LayoutPrivate>
                <ProfileAbout/>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "*",
        element: <Page404/>
    }
]