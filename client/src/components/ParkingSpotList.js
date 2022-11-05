import React from 'react';
import { VStack, HStack, Stack, Center, UnorderedList} from '@chakra-ui/react'
import ParkingSpot from './ParkingSpot';
import { v4 as uuidv4 } from 'uuid';

const ParkingSpotList = ({spots, ...rest}) => {
    return (
        <UnorderedList listStyleType='none' spacing={4}>
            {spots.map((spot) => {
                return (
                    <React.Fragment key={uuidv4()}>
                        <ParkingSpot {...spot}/>
                    </React.Fragment>
                )
            })}
        </UnorderedList>
        
    )
}

export default ParkingSpotList;