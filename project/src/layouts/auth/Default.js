// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
// Custom components
import { NavLink } from "react-router-dom";
// Assets
import { FaChevronLeft } from "react-icons/fa";

function AuthIllustration(props) {
    const { children, } = props;
    // Chakra color mode
    return (
        <Flex position='relative' h='max-content'>
            <Flex
                h={{
                    sm: "initial",
                    md: "unset",
                    lg: "100vh",
                    xl: "100vh",
                }}
                w='100vw'
                mx='auto'
                justifyContent='start'
                direction='column'>
                <Header />
                <NavLink
                    to='/home'
                    style={() => ({
                        width: "fit-content",
                        marginTop: "40px",
                    })}>
                </NavLink>
                {children}

                <Footer />
            </Flex>
        </Flex>
    );
}
// PROPS

AuthIllustration.propTypes = {
    illustrationBackground: PropTypes.string,
    image: PropTypes.any,
};

export default AuthIllustration;
