import React from 'react';
import { Link, Text } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavItem = ({to, text, ...rest}) => {
    const location = useLocation()
    const { pathname } = location
    const color = pathname === to ? 'blue.400' : 'black'
    return (
        <Link as={RouterLink} to={to}>
            <Text color={color}>
                {text}
            </Text>
        </Link>
    )
}

export default NavItem;