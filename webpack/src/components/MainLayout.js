import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import { connect } from "react-redux"

import LoaderContainer from "./LoaderContainer"
import BirthdayContainer from "./BirthdayContainer"
import SidebarContainer from "./SidebarContainer"

import { getBirthdayForGroup } from "../actions"

@connect((store) => {
	return {
		name : store.name,
		members : store.members,
		fetching : store.fetching
	};
})

export default class MainLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active : this.props.group
		};
	}

	componentDidMount() {
		if (this.props.group) {
			this.props.dispatch(getBirthdayForGroup(this.props.group));
			this.setState({
				active : this.props.group
			});
		}
	}

	render() {
		const { name, members, fetching, dispatch } = this.props;
		const { active } = this.state;
		
		const data = fetching ? <LoaderContainer/> : <BirthdayContainer name={name} members={members}/>;

		return (
			<div id="container">
	        	<SidebarContainer active={active} dispatch={dispatch}/>
	        	<main>
	        		{data}
	        	</main>
		        <Image className='corner_bg' src='assets/bg/marei.png'/>
			</div>
		);
	}
}