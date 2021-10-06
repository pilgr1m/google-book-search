import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './store/reducer'
import { RootState } from './store/store'
import './App.css'
import { useAppDispatch } from './store/hooks'

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	// const books = useSelector((state) => state.books)
	// const book = useSelector((state) => state.book)
	const count = useSelector((state: RootState) => {
		console.log(state.main)

		return state.main.count
	})

	const action = (ac: any) => {
		dispatch(ac)
	}

	return (
		<div>
			<h1> {count}</h1>

			<button onClick={() => dispatch(inc())}> inc + </button>

			<button onClick={() => dispatch(dec())}> dec - </button>
		</div>
	)
}

export default App
