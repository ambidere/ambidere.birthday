import React, { Component } from "react"

import isEmpty from 'lodash/isEmpty'

import BirthdayCountdown from "./countdown/BirthdayCountdown"

export default class BirthdayContainer extends Component {
	render() {
		const { group_id, name, members } = this.props;
		const mappedCountdown = members.map(member => <BirthdayCountdown group_id={group_id} key={member.id} member={member}/>);

		return (
			<div className="group-container">
        		<div className="group-members">
        			{mappedCountdown}
        		</div> 
	        </div>
	    );
	}
}