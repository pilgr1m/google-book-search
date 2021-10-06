import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { mainReducer } from './reducer'
// import { mainReducer } from './reducer'

// const rootReducer = combineReducers({
//     main: mainReducer
// })

export const store = configureStore({
	// reducer = rootReducer
	reducer: {
		main: mainReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
