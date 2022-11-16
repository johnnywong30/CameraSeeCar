const INITIAL_STATE = {
    parkingSpots: [],
    parkingFrame: ''
}

const parkingReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case 'UPDATE_PARKING_SPOTS':
            return {
                ...state,
                parkingSpots: payload
            }
        case 'UPDATE_PARKING_FRAME':
            return {
                ...state,
                parkingFrame: payload
            }
        default:
            return state
    }
}

export default parkingReducer;