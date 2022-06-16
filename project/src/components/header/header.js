import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom'

export default function Footer() {
    const location = useLocation();
    const locationString = location.pathname;
    let locationText = 'prazn';
    let textColor = 'brand.300';
    let mainColor = 'brand.100';
    if (locationString.includes('auth')) {
        locationText = 'Sign in'
    } else if (locationString.includes('myNft')) {
        locationText = 'My NFTs'
    } else if (locationString.includes('auction')) {
        locationText = 'Auction'
    } else if (locationString.includes('map')) {
        locationText = 'Map'
    } else if (locationString.includes('marketplace')) {
        locationText = 'Marketplace'
    } else if (locationString.includes('profile')) {
        locationText = 'Profile'
    }

    return (
        <Flex
            className="header"
            bg={mainColor}
        >
            <Text className="location" color={textColor}>
                {locationText}
            </Text>
        </Flex>
    );
}
