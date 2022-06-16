import React from "react";
import {
    Flex,
    Link,
    List,
    ListItem,
    text,
    useColorModeValue,
} from "@chakra-ui/react";
export default function Footer(){
    let textColor = "brand.300"; //white color for text
    let mainColor = "brand.100"; //green color for background

    return(
        <Flex
        zIndex={9001}
        className="footer"
        bg={mainColor}
        >
            
        </Flex>
    )//end of return
}//end of export default function footter