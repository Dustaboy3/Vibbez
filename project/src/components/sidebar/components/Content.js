// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Links from "./Links";
import React from "react";
import Logo from "../../../img/logo/logologo.png";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
      <img src={Logo} height={175} width={175} class="logoCenter" />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
