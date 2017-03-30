import React, { Component } from "react"
import { Dimmer, Loader } from 'semantic-ui-react'

export default class LoaderContainer extends Component {
	render() {
		return (
			<Dimmer active>
     			<Loader>Loading</Loader>
     		</Dimmer>
	    );
	}
}