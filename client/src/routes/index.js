import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Taken from './Pages/Taken';
import Parking from './Pages/Parking';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/parking' element={<Parking />} />
            <Route path='/taken' element={<Taken />} />
        </Switch>
    )
}

export default Routes;