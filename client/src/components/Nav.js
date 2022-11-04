import React from 'react';
import { Stack, HStack, Center, Divider } from '@chakra-ui/react'
import NavItem from './NavItem';
import Heading from './Heading';

const Nav = () => {
    return (
        <Stack>
            <Heading />
            <Center paddingTop={2}>
                <HStack spacing={2} height='18px'>
                    <NavItem to='/parking' text='Available Spots' />
                    <Divider orientation='vertical' borderColor='gray.800'/>
                    <NavItem to='/' text='Home' />
                    <Divider orientation='vertical' borderColor='gray.800'/>
                    <NavItem to='/taken' text='My Spots' />
                </HStack>
            </Center>
        </Stack>
    )
}

export default Nav;