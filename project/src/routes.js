import React from "react";

import { Icon } from "@chakra-ui/react";
import {
    MdBarChart,
    MdDashboard,
    MdPerson,
    MdLock
} from "react-icons/md";

import MyNft from "./views/home/myNft";
import Auction from "./views/home/auction";
import Map from "./views/home/map";
import Marketplace from "./views/home/marketplace";
import Profile from "./views/home/profile";
import InfoAuction from "./views/info/auction";
import InfoMap from "./views/info/map";
import InfoMarketplace from "./views/info/marketplace";
import SignInCentered from "./views/auth/signIn";

const routes = [
    {
        name: "My NFT",
        layout: "/home",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/myNft",
        component: MyNft,
    },
    {
        name: "Auction",
        layout: "/home",
        icon: <Icon as={MdDashboard} width='20px' height='20px' color='inherit' />,
        path: "/auction",
        component: Auction,
    },
    {
        name: "Map",
        layout: "/home",
        path: "/map",
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
        component: Map,
    },
    {
        name: "Marketplace",
        layout: "/home",
        path: "/marketplace",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: Marketplace,
    },
    {
        name: "Profile",
        layout: "/home",
        path: "/profile",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: Profile,
    },
    {
        name: "Auction",
        layout: "/info",
        path: "/auction",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: InfoAuction,
    },
    {
        name: "Map",
        layout: "/info",
        path: "/map",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: InfoMap,
    },
    {
        name: "Marketplace",
        layout: "/info",
        path: "/marketplace",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: InfoMarketplace,
    },
    {
        name: "Sign in",
        layout: "/auth",
        path: "/sign-in",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: SignInCentered,
    }

];

export default routes;
