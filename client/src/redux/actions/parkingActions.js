export const updateParkingSpots = parkingSpots => ({
    type: 'UPDATE_PARKING_SPOTS',
    payload: parkingSpots
})

export const updateParkingFrame = frame => ({
    type: 'UPDATE_PARKING_FRAME',
    payload: frame
})

const actions = {
    updateParkingSpots
}

export default actions;