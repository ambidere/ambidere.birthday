import React, { Component } from "react"
import { Sidebar, Button, Menu, Image } from 'semantic-ui-react'

import _ from "lodash"

import { getBirthdayForGroup, clearBirthdays } from "../actions"

export default class SidebarContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active : this.props.active
		}
	}

	handleItemClick(e, data) {
		window.location.hash = data.name
		if (_.isEmpty(data.name)) {
			this.props.dispatch(clearBirthdays())
		}	
		else {
			this.props.dispatch(getBirthdayForGroup(data.name))
			this.setState({
				active : data.name
			});
		}
	}

	render() {
		const { active } = this.state;

		return (
			<Sidebar as={Menu} animation='scale down' visible={true} width='thin' icon='labeled' vertical inverted>
        		<Menu.Item name='' onClick={this.handleItemClick.bind(this)}>
            		<Image centered src='assets/logos/ambimoe.png'/>
            	</Menu.Item>
            	<Menu.Item name='wug' active={active === "wug"} onClick={this.handleItemClick.bind(this)}>
              		<Image centered src='assets/logos/wug.gif'/>
            	</Menu.Item>
            	<Menu.Item name='aqours' active={active === "aqours"} onClick={this.handleItemClick.bind(this)}>
              		<Image centered src='assets/logos/aqours.png'/>
            	</Menu.Item>
            	<Menu.Item name='million' active={active === "million"} onClick={this.handleItemClick.bind(this)}>
              		<Image centered src='assets/logos/million.png'/>
            	</Menu.Item>
        	</Sidebar>
		);
	}
}