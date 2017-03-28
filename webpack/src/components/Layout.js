import React, { Component } from 'react'
import _ from 'lodash'
import { Sidebar, Segment, Button, Menu, Image } from 'semantic-ui-react'

import { connect } from "react-redux"

import { getBirthdayForGroup } from "../actions"

@connect((store) => {
	return {
		name : store.name,
		members : store.members
	};
})

export default class Layout extends Component {
	constructor() {
		super();
	}

	handleItemClick(e, data) {
		this.props.dispatch(getBirthdayForGroup(data.name))
	} 

	render() {
		const { name, members } = this.props
		const mappedTweets = members.map(member => <li>{member.kanji} {member.birthday}</li>)

		return (
			<div id="container">
		        <Sidebar as={Menu} animation='scale down' visible={true} width='thin' icon='labeled' vertical inverted>
	        		<Menu.Item name='home'>
	            		<Image centered src='assets/logos/ambimoe.png'/>
	            	</Menu.Item>
	            	<Menu.Item name='wug' onClick={this.handleItemClick.bind(this)}>
	              		<Image centered src='assets/logos/wug.gif'/>
	            	</Menu.Item>
	            	<Menu.Item name='aqours' onClick={this.handleItemClick.bind(this)}>
	              		<Image centered src='assets/logos/aqours.png'/>
	            	</Menu.Item>
	            	<Menu.Item name='million' onClick={this.handleItemClick.bind(this)}>
	              		<Image centered src='assets/logos/million.png'/>
	            	</Menu.Item>
	        	</Sidebar>
	        	<main>
	        		<h1>{name}</h1>
		        	<ul>
		        		{mappedTweets}
		        	</ul>
	        	</main>
		        <Image className='corner_bg' src='assets/bg/marei.png'/>
			</div>
		);
	}
}