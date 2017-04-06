import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import MainLayout from "./components/MainLayout"
import size from 'lodash/size'
import _ from 'lodash'

import store from "./store"

const app = document.getElementById('app')

var split = _.split(window.location, '#');

if (size(split) > 1) {
	ReactDOM.render(<Provider store={store}>
		<MainLayout group={split[1]}/>
	</Provider>, app)
}
else {
	ReactDOM.render(<Provider store={store}>
		<MainLayout/>
	</Provider>, app)
}

function handleNewHash() {
	var group = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')[0];
	ReactDOM.render(<Provider store={store}>
		<MainLayout group={group}/>
	</Provider>, app)
}

handleNewHash()
window.addEventListener('hashchange', handleNewHash, false);
