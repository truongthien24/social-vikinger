import { Navigate } from "react-router-dom";
import Login from "../page/public/login/Login";
import * as Layouts from "../core/layout-config/index";
import * as LayoutsPrivate from "../core/layout-config/private-layout/component/index";
import Page404 from "../page/public/404/Page404";
import * as Private from '../page/private'
import ProfileAbout from "../page/private/profile/profileAbout/ProfileAbout";
import ProfileTimeline from "../page/private/profile/profileTimeline/ProfileTimeline";
import ProfileFriends from "../page/private/profile/profileFriends/ProfileFriends";
import ProfileGroups from "../page/private/profile/profileGroups/ProfileGroups";
import ProfilePhotos from "../page/private/profile/profilePhotos/ProfilePhotos";
import ProfilePhotosInside from "../page/private/profile/profilePhotos-inside/ProfilePhotosInside";
import ProfileVideo from "../page/private/profile/profileVideo/ProfileVideo";
import ProfileBadges from "../page/private/profile/profileBadges/ProfileBadges";
import ProfileStream from "../page/private/profile/profileStream/ProfileStream";
import ProfileBlog from "../page/private/profile/profileBlog/ProfileBlog";
import ProfilePost from "../page/private/profile/profilePost/ProfilePost";
import ProfileForum from "../page/private/profile/profileForum/ProfileForum";
import ForumCategory from "../page/private/forum-category/ForumCategory";
import ForumDiscussion from "../page/private/forum-discussion/ForumDiscussion";
import ProfileStore from "../page/private/profile/profileStore/ProfileStore";
import MarketPlaceProduct from "../page/private/market-place-product/MarketPlaceProduct";
import MarketPlaceCategory from "../page/private/market-place-category/MarketPlaceCategory";
import MarketPlace from "../page/private/market-place/MarketPlace";
import Newsfeed from "../page/private/newsfeed/Newsfeed";
import Quests from "../page/private/quests/Quests";
import Overview from "../page/private/overview/Overview";
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
                <LayoutsPrivate.LayoutProfile>
                    <ProfileAbout/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-timeline",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileTimeline/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-friends",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileFriends/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-groups",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileGroups/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        ),
    },
    {
        path: "/profile-photos",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfilePhotos/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-photos-inside",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfilePhotosInside/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-videos",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileVideo/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-badges",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileBadges/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-stream",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileStream/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-blog",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileBlog/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-post",
        element: (
            <Layouts.LayoutPrivate>
                <ProfilePost/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-forum",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileForum/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/profile-store",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutProfile>
                    <ProfileStore/>
                </LayoutsPrivate.LayoutProfile>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/forums-category",
        element: (
            <Layouts.LayoutPrivate>
                <ForumCategory/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/forums-discussion",
        element: (
            <Layouts.LayoutPrivate>
                <ForumDiscussion/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/marketplace-product",
        element: (
            <Layouts.LayoutPrivate>
                <MarketPlaceProduct/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/marketplace-category",
        element: (
            <Layouts.LayoutPrivate>
                <MarketPlaceCategory/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/marketplace",
        element: (
            <Layouts.LayoutPrivate>
                <MarketPlace/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/newsfeed",
        element: (
            <Layouts.LayoutPrivate>
                <Newsfeed/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/quests",
        element: (
            <Layouts.LayoutPrivate>
                <Quests/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/overview",
        element: (
            <Layouts.LayoutPrivate>
                <Overview/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "*",
        element: <Page404/>
    }
]