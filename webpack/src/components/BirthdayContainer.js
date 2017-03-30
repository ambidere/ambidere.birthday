import React, { Component } from "react"

import BirthdayCountdown from "./BirthdayCountdown"

export default class BirthdayContainer extends Component {

	componentWillMount() {
		const { members } = this.props;
		return members && !_.isEmpty(members)
	}

	render() {
		const { name, members } = this.props;
		const mappedTweets = members.map(member => <BirthdayCountdown key={member.id} member={member}/>);

		return (
			<div className="birthdayContainer">
        		<h1>{name}</h1>
        		<ul>
        			{mappedTweets}
        		</ul> 
	        </div>
	    );
	}
}