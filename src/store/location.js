// ------------------------------------
// Constants
// ------------------------------------
console.log('222')
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  console.log('-------------------------------updateLocation', arguments)
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function locationReducer (state = initialState, action) {
  console.log('locationReducer', state, action)
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
