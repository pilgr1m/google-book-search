import { createAction, createReducer } from '@reduxjs/toolkit'

export type initialStoreType = {
	count: number
}

const initialStore = {
	books: [],
	count: 0,
}

// const getData = createAction("GET_DATA")
// const setData = createAction("SET_DATA")
export const inc = createAction('INC')
export const dec = createAction('DEC')

export const mainReducer = createReducer(initialStore, {
	[`${inc}`]: (state: initialStoreType) => {
		state.count += 1
	},
	[`${dec}`]: (state: initialStoreType) => {
		state.count = state.count - 1
	},
})
