import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import isEmpty from 'lodash/isEmpty'
import { connect } from "react-redux"

import LoaderContainer from "./LoaderContainer"
import BirthdayContainer from "./BirthdayContainer"
import SidebarContainer from "./SidebarContainer"

import { getBirthdayForGroup } from "../actions"

@connect((store) => {
	return {
		group_id : store.id,
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
		const { name, members, group_id, fetching, dispatch } = this.props;
		const { active } = this.state;

		const backgroundStyle = {
			backgroundImage : "url(../assets/bg/" + group_id + ".jpg)"
		}
		
		const data = <BirthdayContainer group_id={group_id} name={name} members={members}/>;

		return (
			<div id="container">
	        	<SidebarContainer active={active} dispatch={dispatch}/>
	        	<main>
	        		{data}
	        		<div className="group-background" style={backgroundStyle}/>
	        	</main>
		        <Image className='corner_bg' src='assets/bg/marei.png' hidden={!isEmpty(members)}/>
			</div>
		);
	}
}