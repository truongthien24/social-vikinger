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
import Groups from "../page/private/groups/Groups";
import GroupsTimeLine from "../page/private/groups/groups-timeline/GroupsTimeLine";
import GroupInfo from "../page/private/groups/group-info/GroupInfo";
import GroupMembers from "../page/private/groups/group-members/GroupMembers";
import GroupEvents from "../page/private/groups/group-events/GroupEvents";
import HubGroupManagement from "../page/private/hub/hub-group-management/HubGroupManagement";
import HubProfileInfo from "../page/private/hub/hub-profile-info/HubProfileInfo";
import HubProfileSocial from "../page/private/hub/hub-profile-social/HubProfileSocial";
import HubProfileNotifications from "../page/private/hub/hub-profile-notifications/HubProfileNotifications";
import HubProfileMessages from "../page/private/hub/hub-profile-messages/HubProfileMessages";
import HubProfileRequest from "../page/private/hub/hub-profile-request/HubProfileRequest";
import HubAccountPassword from "../page/private/hub/hub-account-password/HubAccountPassword";
import HubAccountInfo from "../page/private/hub/hub-account-info/HubAccountInfo";
import HubAccountSettings from "../page/private/hub/hub-account-settings/HubAccountSettings";
import HubGroupInvitations from "../page/private/hub/hub-group-invitations/HubGroupInvitations";
import HubStoreStatement from "../page/private/hub/hub-store-statement/HubStoreStatement";
import HubStoreAccount from "../page/private/hub/hub-store-account/HubStoreAccount";
import HubStoreItems from "../page/private/hub/hub-store-items/HubStoreItems";
import HubStoreDownloads from "../page/private/hub/hub-store-downloads/HubStoreDownloads";
import Members from "../page/private/members/Members";
import Badges from "../page/private/badges/Badges";
import Stream from "../page/private/streams/Stream";
import Events from "../page/private/events/Events";
import Forums from "../page/private/forums/Forums";
import MarketplaceCheckout from "../page/private/marketplace-checkout/MarketplaceCheckout";
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
        path: "/marketplace-checkout",
        element: (
            <Layouts.LayoutPrivate>
                <MarketplaceCheckout/>
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
        path: "/groups",
        element: (
            <Layouts.LayoutPrivate>
                <Groups/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/members",
        element: (
            <Layouts.LayoutPrivate>
                <Members/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/badges",
        element: (
            <Layouts.LayoutPrivate>
                <Badges/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/streams",
        element: (
            <Layouts.LayoutPrivate>
                <Stream/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/events",
        element: (
            <Layouts.LayoutPrivate>
                <Events/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/forums",
        element: (
            <Layouts.LayoutPrivate>
                <Forums/>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/group-timeline",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutGroup>
                    <GroupsTimeLine/>
                </LayoutsPrivate.LayoutGroup>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/group-info",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutGroup>
                    <GroupInfo/>
                </LayoutsPrivate.LayoutGroup>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/group-members",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutGroup>
                    <GroupMembers/>
                </LayoutsPrivate.LayoutGroup>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/group-events",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutGroup>
                    <GroupEvents/>
                </LayoutsPrivate.LayoutGroup>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-group-management",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubGroupManagement/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-profile-info",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubProfileInfo/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-profile-social",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubProfileSocial/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-profile-notifications",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubProfileNotifications/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-profile-messages",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubProfileMessages/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-profile-requests",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubProfileRequest/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-account-info",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubAccountInfo/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-account-password",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubAccountPassword/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-account-settings",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubAccountSettings/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-group-invitations",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubGroupInvitations/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-store-statement",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubStoreStatement/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-store-account",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubStoreAccount/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-store-items",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubStoreItems/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "/hub-store-downloads",
        element: (
            <Layouts.LayoutPrivate>
                <LayoutsPrivate.LayoutHub>
                    <HubStoreDownloads/>
                </LayoutsPrivate.LayoutHub>
            </Layouts.LayoutPrivate>
        )
    },
    {
        path: "*",
        element: <Page404/>
    },
    {
        path: "404",
        element: <Page404/>
    }
]