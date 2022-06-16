// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import Footer from "../../components/footer/Footer";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
// Custom components
import { NavLink } from "react-router-dom";
// Assets
import { FaChevronLeft } from "react-icons/fa";

function AuthIllustration(props) {
    const { children, illustrationBackground } = props;
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
                w='100%'
                mx='auto'
                justifyContent='start'
                direction='column'>
                <NavLink
                    to='/home'
                    style={() => ({
                        width: "fit-content",
                        marginTop: "40px",
                    })}>
                </NavLink>
                {children}
                <Box
                    display={{ base: "none", md: "block" }}
                    h='100%'
                    minH='100vh'
                    w={{ lg: "50vw", "2xl": "44vw" }}
                    position='absolute'
                    right='0px'>
                    <Flex
                        bg={`url(${illustrationBackground})`}
                        justify='center'
                        align='end'
                        w='100%'
                        h='100%'
                        bgSize='cover'
                        bgPosition='50%'
                        position='absolute'
                        borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}></Flex>
                </Box>
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
