import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateParkingSpots, updateParkingFrame } from './redux/actions/parkingActions';

import Routes from './routes';
import Nav from './components/Nav';


const App = () => {
  const socketRef = useRef();
  const dispatch = useDispatch();
  const { parkingSpots, parkingFrame } = useSelector(({ parking }) => parking)

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
    socketRef.current.on('parking-spots', ({ parkingData, frameData}) => {
      // console.log("Received New Parking Spots: ", parkingData);
      // console.log("Received Frame Data: ", frameData);
      const arrayBufferView = new Uint8Array(frameData);
      const frameBlob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
      const fileURL = URL.createObjectURL(frameBlob);
      console.log(fileURL)

      dispatch(updateParkingSpots(parkingData));
      dispatch(updateParkingFrame(fileURL));
    })
    console.log(parkingFrame)
  }, [parkingSpots, parkingFrame])


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
