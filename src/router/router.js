import { Navigate } from "react-router-dom";
import Login from "../page/public/login/Login";
import * as Layouts from "../core/layout-config/index";

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
        path: "/",
        element: (
            <Layouts.LayoutPrivate>
                {/* <Private.Home /> */}
            </Layouts.LayoutPrivate>
        ),
    },
]