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

    getCorrectUnit(amount, unit) {
    	return amount > 1 ? unit + "s" : unit;
    }

	render() {
		const { week, day, hour, minute, second } = this.state;
		const { group_id } = this.props;
		const { id, english, kanji, twitter, birthday, background } = this.props.member;
		
		const weekUnit = this.getCorrectUnit(week, "week")
		const dayUnit = this.getCorrectUnit(day, "day")
		const hourUnit = this.getCorrectUnit(hour, "hour")
		const minuteUnit = this.getCorrectUnit(minute, "minute")
		const secondUnit = this.getCorrectUnit(second, "second")

		const textStyle = {
			backgroundColor : background
		}

		const picStyle = {
			backgroundImage: "url(data/images/" + group_id + "/" + id + ".jpg)"
		}

		const birthdayFormat = " " + Moment.tz(this.props.member.birthday, "MM-DD-YYYY", "Asia/Tokyo").format('MMMM Do YYYY')
		const twitterLink = "https://twitter.com/" + twitter
		return (
			<div id={id} className="member" style={textStyle}>
				<div className="picsContainer memberColumn">
                    <div className="pic" style={picStyle}></div>
                    <div className="arc"></div>
                </div>
                <div className="details memberColumn">
                    <div className="nameContainer"><span className="name">{kanji} | {english}</span>
                        <br/>
                        <span className="birthday">
                        	<i className="fa fa-birthday-cake" aria-hidden="true"></i> {birthdayFormat}
                        </span>
                        <br/>
                        <span class="twitter">
                        	<a href={twitterLink} target="_blank">
                        		<i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;@{twitter}
                        	</a>
                        </span>
                    </div>
                    <div className="birthdayContainer">
                        <div className="week unitContainer">
                            <div className="number">{week}</div>
                            <div className="unit">{weekUnit}</div>
                        </div>
                        <div className="day unitContainer">
                            <div className="number">{day}</div>
                            <div className="unit">{dayUnit}</div>
                        </div>
                        <div className="hour unitContainer">
                            <div className="number">{hour}</div>
                            <div className="unit">{hourUnit}</div>
                        </div>
                        <div className="minute unitContainer">
                            <div className="number">{minute}</div>
                            <div className="unit">{minuteUnit}</div>
                        </div>
                        <div className="second unitContainer">
                            <div className="number">{second}</div>
                            <div className="unit">{secondUnit}</div>
                        </div>
                    </div>
                </div>
				{kanji} | {english}
				<ul>
					<li>{week} weeks</li>
					<li>{day} days</li>
					<li>{hour} hours</li>
					<li>{minute} minutes</li>
					<li>{second} seconds</li>
				</ul>
			</div>
		);
	}
}