import React from 'react';
import { Center, VStack, Text, Divider, Box, Image } from '@chakra-ui/react'

const Home = () => {
    const src = 'https://alphavs.com/wp-content/uploads/2018/05/parking-lot-surveillance.jpg'
    return (
        <Center marginY='25px'>
            <VStack >
                <Text fontSize='3xl'>Welcome to CameraSeeCar</Text>
                <Divider />
                <VStack spacing={2} w='500px'>
                    <Text fontSize='lg'>
                        This is a web app that informs users of open parking spaces and their exact locations. 
                    </Text>
                    <Text fontSize='lg'>
                        For this project, we intend to use a computer's camera to analyze available parking spots and when a car enters/leaves a spot.
                        This project can scale to cover a small garage, to a multi-level parking lot, and eventually an entire city.  
                    </Text>
                </VStack>
                <Box boxSize='575px'>
                    <Image src={src} alt='Parking Lot' boxSize='100%' borderRadius='10px' shadow='lg'/>
                </Box>
            </VStack>
        </Center>
    )
}

export default Home;