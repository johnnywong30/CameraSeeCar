import React from 'react';
import { HStack, Text, Icon } from '@chakra-ui/react'
import { AiFillCar } from 'react-icons/ai'


const Heading = () => {
    return (
        <HStack spacing={2} paddingLeft={4} paddingTop={2} bg='gray.800'>
            <Icon as={AiFillCar} w={6} h={6} color='white'/>
            <Text fontSize='2xl' color='white'>CameraSeeCar</Text>
        </HStack>
    )
}

export default Heading;