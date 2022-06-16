import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "assets/css/MiniCalendar.css";
import { Text, Icon, useColorModeValue } from "@chakra-ui/react";
// Chakra imports
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Custom components
import Card from "components/card/Card.js";
import FocusLock from 'react-focus-lock';
import { AddIcon } from '@chakra-ui/icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  ButtonGroup,
  useDisclosure,
  Box,
  IconButton,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

export default function MiniCalendar(props) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());

  const TextInput = React.forwardRef((props, ref) => {
    return (
      <FormControl>
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Input ref={ref} id={props.id} {...props} />
      </FormControl>
    )
  });

  const Form = ({ firstFieldRef, onCancel }) => {
    return (
      <Stack spacing={4}>
        <TextInput
          label='Dogodek:'
          id='Dogodek'
          ref={firstFieldRef}
          defaultValue='Vnesi Dogodek'
        />
        <TextInput
          label='Datum:'
          id='Datum'
          defaultValue='Vnesi datum' />
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Preklic
          </Button>
          <Button colorScheme='orange' onClick={onCancel}>
            Shrani
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }

  const PopoverForm = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)

    return (
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <a>
            <AddIcon w={6} h={6} color="orange.300" />
          </a>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    )
  }


  // Chakra Color Mode
  const borderColor = useColorModeValue("transparent", "whiteAlpha.100");
  return (
    <Card
      border='1px solid'
      borderColor={borderColor}
      align='center'
      direction='column'
      w='100%'
      maxW='max-content'
      p='20px 15px'
      h='max-content'
      {...rest}>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color='orange.300'></Text>}
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
      />
      <PopoverForm />
    </Card>
  );
}
