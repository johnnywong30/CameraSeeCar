import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateParkingSpots } from './redux/actions/parkingActions';

import Routes from './routes';
import Nav from './components/Nav';


const App = () => {
  const socketRef = useRef();
  const dispatch = useDispatch();
  const { parkingSpots } = useSelector(({ parking }) => parking)

  // initialize client socket
  useEffect(() => {
    socketRef.current = io('/');
    socketRef.current.emit('connection') 
    return () => {
      socketRef.current.emit('disconnection')
      socketRef.current.disconnect();
    };
  }, []);

  // initial fetch of parking spots
  useEffect(() => {
    socketRef.current.emit('get-parking-spots') 
  }, [])

  // listen for 'parking-spots' to update current parking spots
  useEffect(() => {
    socketRef.current.on('parking-spots', ({ parkingSpots }) => {
      console.log("Received New Parking Spots: ", parkingSpots);
      dispatch(updateParkingSpots(parkingSpots));
    })
  }, [parkingSpots])

  // https://github.com/AhmedBhati/video-streaming-with-flask-socketio
  // Look at this to figure out how to stream video on client side with sockets
  // Could be optional

  return (
    <Router>
      <div className='App'>
        <Nav />
      </div>
        <div className='App-body'>
          <Routes />
        </div>
    </Router>
  )
}

export default App;
