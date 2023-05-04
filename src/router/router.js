import { Navigate } from "react-router-dom";
import Login from "../page/public/login/Login";
import * as Layouts from "../core/layout-config/index";
import Page404 from "../page/public/404/Page404";
import * as Private from '../page/private'
import ProfileAbout from "../page/private/profile/profileAbout/ProfileAbout";
import ProfileTimeline from "../page/private/profile/profileTimeline/ProfileTimeline";
import ProfileFriends from "../page/private/profile/profileFriends/ProfileFriends";
import ProfileGroups from "../page/private/profile/profileGroups/ProfileGroups";
// import { ProfileAbout } from "../page/private/profile";

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
        path: "/profile-about",
        element: (
            <Layouts.LayoutPrivate>
                <ProfileAbout/>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-timeline",
        element: (
            <Layouts.LayoutPrivate>
                <ProfileTimeline/>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-friends",
        element: (
            <Layouts.LayoutPrivate>
                <ProfileFriends/>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-groups",
        element: (
            <Layouts.LayoutPrivate>
                <ProfileGroups/>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "*",
        element: <Page404/>
    }
]