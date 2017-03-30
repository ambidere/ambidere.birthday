import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import MainLayout from "./components/MainLayout"

import store from "./store"

const app = document.getElementById('app')
ReactDOM.render(<Provider store={store}>
	<MainLayout/>
</Provider>, app)