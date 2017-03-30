import React, { Component } from 'react'
import { Sidebar, Button, Menu, Image, Dimmer, Loader } from 'semantic-ui-react'

import { connect } from "react-redux"
import BirthdayCount from "./BirthdayCount"

import { getBirthdayForGroup } from "../actions"

@connect((store) => {
	return {
		name : store.name,
		members : store.members,
		fetching : store.fetching
	};
})

export default class MainLayout extends Component {
	constructor() {
		super();
	}

	handleItemClick(e, data) {
		this.props.dispatch(getBirthdayForGroup(data.name))
	}

	render() {
		const { name, members, fetching } = this.props 
		const mappedTweets = members.map(member => <BirthdayCount key={member.id} member={member}/>)
		const data = fetching ?
		     		""
			   		:
	        		<div>
	        		<h1>{name}</h1>
		        		<ul>
		        			{mappedTweets}
		        		</ul> 
		        	</div>;

		const loader = fetching ? 
					<Dimmer active>
		     			<Loader>Loading</Loader>
		     		</Dimmer> : "";
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
	        		{data}
	        	</main>
		        <Image className='corner_bg' src='assets/bg/marei.png'/>
		        {loader}
			</div>
		);
	}
}