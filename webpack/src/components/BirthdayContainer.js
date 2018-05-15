import React, { Component } from "react"

import isEmpty from 'lodash/isEmpty'

import BirthdayCountdown from "./countdown/BirthdayCountdown"

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

export default class BirthdayContainer extends Component {
	render() {
		const { group_id, name, members } = this.props;
		const mappedCountdown = members.map(member => 
			<BirthdayCountdown group_id={group_id} key={member.id} member={member}/>
		);

		return (
			<div className="group-container">
				<ReactCSSTransitionGroup
					id={group_id}
					component="div"
					className="group-members" 
					transitionName="member"
	          		transitionEnterTimeout={500}
	          		transitionLeaveTimeout={300}>
        				{mappedCountdown}
        		</ReactCSSTransitionGroup> 
	        </div>
	    );
	}
}