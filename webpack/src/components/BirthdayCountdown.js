import React, { Component } from 'react'

import Moment from 'moment-timezone';

export default class BirthdayCountdown extends Component {
	constructor(props) {
		super(props);
		var targetDate = Moment.tz(this.props.member.birthday, "MM-DD-YYYY", "Asia/Tokyo");
		targetDate.year(Moment().tz("Asia/Tokyo").year());
		if (this.checkIfCurrentDateIsBeforeBirthday(targetDate)) {
			targetDate.add(1, 'y')
		}

		var currentDate = Moment().tz("Asia/Tokyo", "MM-DD-YYYY");
			var duration = Moment.duration(targetDate.diff(currentDate));

		this.state = {
			week : Math.floor(duration.asWeeks()),
			day : duration.days(),
			hour:  duration.hours(),
			minute : duration.minutes(), 
			second : duration.seconds(),
			isBirthdayNow : this.checkIfCurrentDateIsABirthday(targetDate)
		};
	}

	componentDidMount() {
		var targetDate = Moment.tz(this.props.member.birthday, "MM-DD-YYYY", "Asia/Tokyo");
		targetDate.year(Moment().tz("Asia/Tokyo").year());

		if (this.checkIfCurrentDateIsBeforeBirthday(targetDate)) {
			targetDate.add(1, 'y')
		}
				
		this.loadInterval = setInterval(() => {
			var currentDate = Moment().tz("Asia/Tokyo", "MM-DD-YYYY");
			var duration = Moment.duration(targetDate.diff(currentDate));

			this.setState({
				week : Math.floor(duration.asWeeks()),
				day : duration.days(),
				hour:  duration.hours(),
				minute : duration.minutes(), 
				second : duration.seconds(),
				isBirthdayNow : this.checkIfCurrentDateIsABirthday(targetDate)
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.loadInterval)
	}

	checkIfCurrentDateIsBeforeBirthday(targetDate) {
		var now = Moment().tz("Asia/Tokyo");
        return targetDate.isBefore(now, 'day');
	}

	checkIfCurrentDateIsABirthday(targetDate) {
        var now = Moment().tz("Asia/Tokyo");
        return targetDate.isSame(now, 'day');
    }

	render() {
		const { week, day, hour, minute, second } = this.state;
		const { id, english, kanji, twitter, birthday, background } = this.props.member;

		return (
			<li id={id}>
				{kanji} | {english}
				<ul>
					<li>{week} weeks</li>
					<li>{day} days</li>
					<li>{hour} hours</li>
					<li>{minute} minutes</li>
					<li>{second} seconds</li>
				</ul>
			</li>
		);
	}
}