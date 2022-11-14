const INITIAL_STATE = {
    parkingSpots: []
}

const parkingReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case 'UPDATE_PARKING_SPOTS':
            return {
                ...state,
                parkingSpots: payload
            }
        default:
            return state
    }
}

export default parkingReducer;