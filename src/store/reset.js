import { history } from './index'
import { connectRouter } from 'connected-react-router'

const RESET_ACTION_TYPE = '@@RESET'

const resetReducerCreator = (reducer, resetState) => (state, action) => {
	if (action.type === RESET_ACTION_TYPE) {
		return resetState
	}
	return reducer(state, action)
}

const reset = (createStore) => (reducer, preloadedState, enhancer) => {
	const store = createStore(reducer, preloadedState, enhancer)

	const reset = (resetReducer, resetState) => {
		const newReducer = resetReducerCreator(resetReducer, resetState)
		store.replaceReducer(connectRouter(history)(newReducer))
		store.dispatch({type: RESET_ACTION_TYPE, state: resetState})
	}

	return {
		...store,
		reset
	}
}

export default reset