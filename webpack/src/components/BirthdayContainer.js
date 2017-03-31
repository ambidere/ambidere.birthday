import React, { Component } from "react"

import BirthdayCountdown from "./BirthdayCountdown"

export default class BirthdayContainer extends Component {

	componentWillMount() {
		const { members } = this.props;
		return members && !_.isEmpty(members)
	}

	render() {
		const { group_id, name, members } = this.props;
		const mappedCountdown = members.map(member => <BirthdayCountdown group_id={group_id} key={member.id} member={member}/>);

		return (
			<div className="groupContainer">
        		<h1>{name}</h1>
        		<div className="membersContainer">
        			{mappedCountdown}
        		</div> 
	        </div>
	    );
	}
}