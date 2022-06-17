import React from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "../../../components/separator/Separator";
import DefaultAuth from "../../../layouts/auth/Default";
// Assets
import illustration from "../../../img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignIn() {
    const mainColor = "brand.100";//green
    const mainColorSecondary = "brand.400"; //saturated green
    const textColor = "brand.200";//black
    const textColorSecondary = "brand.300";//white
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <DefaultAuth>
            <Flex
            zIndex={1}
            maxW={{ base: "100%", md: "max-content" }}
            w='100%'
            mx={{ base: "auto", lg: "0px" }}
            me='auto'
            h='100%'
            alignItems='start'
            justifyContent='center'
            mb={{ base: "30px", md: "60px" }}
            px={{ base: "25px", md: "0px" }}
            mt={{ base: "40px", md: "14vh" }}>
                <Flex
                   zIndex={2}
                   className="SingInLeft"
                   h="100%"
                   w="40%"
                   flexDirection='column'
                   justifyContent='center'>
                    <Box>
                        <Heading 
                           color={textColor}
                           fontSize="52px">
                           Sign IN
                        </Heading>
                        <Text>
                             Enter your persional details and continue your journy with us

                        </Text>
                     </Box>
                </Flex>
                <Flex
                className="SingInRight"
                h="100%"
                w="60%"
                >
                    etwf

                </Flex>

            </Flex>
        </DefaultAuth>
    );
}

export default SignIn;
