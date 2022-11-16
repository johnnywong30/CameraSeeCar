import React, { useState } from 'react';
import { VStack, HStack, Center, Box, Image } from '@chakra-ui/react'
import ParkingSpotList from '../../../components/ParkingSpotList';
import { useSelector } from 'react-redux';
import ParkingSpots from '../../../constants/ParkingSpots.json'

const Parking = () => {
    const { parkingFrame } = useSelector(({parking}) => parking)
    
    const src = parkingFrame ? parkingFrame : 'https://i.imgur.com/M7Lqj93.jpg'

    const height = '400px'
    const { parkingSpots } = useSelector(({ parking }) => parking)
    const data = parkingSpots.filter(({available}) => available)
    return (
        <Center w='100vw' marginY='25px'>
            <HStack spacing={4}>
                <Box boxSize={height}>
                    <Image src={src} boxSize='100%' alt='Garage' />
                </Box>
                <VStack height={height}>
                    <ParkingSpotList spots={data} />
                </VStack>
            </HStack >
        </Center>
    )
}

export default Parking;