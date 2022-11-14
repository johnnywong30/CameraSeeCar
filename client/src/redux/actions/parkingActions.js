export const updateParkingSpots = parkingSpots => ({
    type: 'UPDATE_PARKING_SPOTS',
    payload: parkingSpots
})

const actions = {
    updateParkingSpots
}

export default actions;