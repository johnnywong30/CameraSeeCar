import React from 'react';
import { VStack, HStack, Icon, ListItem, Button, Center, Box, Text } from '@chakra-ui/react'
import { BsFillCircleFill } from 'react-icons/bs'

const ParkingSpot = ({available, location, spotNum, ...rest}) => {
    const color = available ? 'green.200' : 'red.200'
    return (
        <ListItem
            border='1px'
            borderColor='gray.100' 
            borderRadius='12px' 
            shadow='sm' 
            width='300px'
            height='60px'
            marginY='10px'
            paddingY='2px'
            // paddingY='15px'
        >
            <Center>
                <VStack spacing={2}>
                    <HStack spacing={4}>
                        <Text fontSize='md'>Parking Spot #{spotNum}</Text>
                        <Icon as={BsFillCircleFill} w={3} h={3} color={color}/>
                    </HStack>
                    <Text>Location: {location}</Text>
                </VStack>
            </Center>

        </ListItem>
    )
}

export default ParkingSpot;