import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Layout extends Component {
	constructor() {
		super();
		this.state = { 
			visible: true 
		};
	}

	toggleVisibility() {
		const { visible } = this.state
		this.setState({ visible: !visible })
	} 

	render() {
		const { visible } = this.state
		return (
			<div id="container">
		        <Sidebar.Pushable as={Segment}>
		        	<Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
		        		<Menu.Item name='home'>
		            		<Image centered src='assets/logos/ambimoe.png'/>
		            	</Menu.Item>
		            	<Menu.Item name='wug'>
		              		<Image centered src='assets/logos/wug.gif'/>
		            	</Menu.Item>
		            	<Menu.Item name='aqours'>
		              		<Image centered src='assets/logos/aqours.png'/>
		            	</Menu.Item>
		            	<Menu.Item name='million'>
		              		<Image centered src='assets/logos/million.png'/>
		            	</Menu.Item>
		        	</Sidebar>
		        	<Sidebar.Pusher>
		            	<Segment basic>
		            	</Segment>
		        	</Sidebar.Pusher>
		        </Sidebar.Pushable>
		        <Image className='corner_bg' src='assets/bg/marei.png'/>
			</div>
		);
	}
}